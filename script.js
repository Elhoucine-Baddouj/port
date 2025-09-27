// ==UserScript==
// @name         Telemetry/Requests Resilient Poster - Example.com
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Intercepte fetch/XHR sur www.example.com uniquement et applique rate-limit + backoff automatique sur 429.
// @author       Toi
// @match        https://www.blsspainmorocco.net/MAR/    // <-- URL du site où tu veux appliquer le script
// @grant        none
// @run-at       document-start
// ==/UserScript==

(() => {
  'use strict';

  /********* CONFIG *********/
  const TARGET_HOST = 'www.blsspainmorocco.net/MAR/';  // <-- Host exact du site à cibler
  const TOKEN_BUCKET_CAPACITY = 5;    // nombre de requêtes "burst" initiales
  const TOKEN_REFILL_MS = 1000;       // intervalle de refill en ms
  const TOKEN_REFILL_AMOUNT = 1;      // nombre de tokens ajoutés chaque intervalle
  const MAX_RETRIES = 6;              // nb max de retries pour 429
  const BASE_BACKOFF_MS = 500;        // base pour backoff exponentiel

  /********* TOKEN BUCKET *********/
  class TokenBucket {
    constructor(capacity, refillMs, refillAmount=1) {
      this.capacity = capacity;
      this.tokens = capacity;
      this.queue = [];
      setInterval(() => {
        this.tokens = Math.min(this.capacity, this.tokens + refillAmount);
        this._drainQueue();
      }, refillMs);
    }
    _drainQueue() {
      while (this.tokens > 0 && this.queue.length > 0) {
        const resolver = this.queue.shift();
        this.tokens--;
        resolver();
      }
    }
    async take() {
      if (this.tokens > 0) {
        this.tokens--;
        return;
      }
      return new Promise(resolve => this.queue.push(resolve));
    }
  }

  const tb = new TokenBucket(TOKEN_BUCKET_CAPACITY, TOKEN_REFILL_MS, TOKEN_REFILL_AMOUNT);

  /********* HELPERS *********/
  function isTargetUrl(url) {
    try {
      const u = new URL(url, location.href);
      // On cible uniquement les requêtes provenant du site défini
      return u.host === TARGET_HOST;  // <-- Vérification du host du site
    } catch (e) {
      return false;
    }
  }

  function computeBackoff(attempt) {
    const expo = Math.pow(2, attempt) * BASE_BACKOFF_MS;
    const jitter = Math.floor(Math.random() * BASE_BACKOFF_MS);
    return expo + jitter;
  }

  async function wait(ms) {
    return new Promise(r => setTimeout(r, Math.max(ms, 0)));
  }

  async function handleResponseRetryable(resp, attempt) {
    if (resp.status !== 429) return { success: true, resp };
    const retryAfter = resp.headers && resp.headers.get && resp.headers.get('Retry-After');
    let waitMs = 0;
    if (retryAfter) {
      const asNum = Number(retryAfter);
      if (!Number.isNaN(asNum)) waitMs = asNum * 1000;
      else {
        const date = Date.parse(retryAfter);
        if (!Number.isNaN(date)) waitMs = date - Date.now();
      }
    }
    if (!waitMs || waitMs <= 0) {
      waitMs = computeBackoff(attempt);
    }
    console.warn(`[ResilientScript] 429 reçu. attempt=${attempt}. wait ${Math.round(waitMs)} ms`);
    await wait(waitMs);
    return { success: false };
  }

  /********* FETCH WRAPPER *********/
  const origFetch = window.fetch.bind(window);
  window.fetch = async function(input, init) {
    try {
      const url = (typeof input === 'string' || input instanceof URL) ? String(input) : (input && input.url);
      if (!url || !isTargetUrl(url)) {
        return origFetch(input, init);
      }

      await tb.take();

      for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
        const resp = await origFetch(input, init);
        const hr = await handleResponseRetryable(resp, attempt);
        if (hr.success) return resp;
      }
      throw new Error('ResilientScript: trop de retries (429).');
    } catch (e) {
      console.error('[ResilientScript] fetch wrapper error', e);
      throw e;
    }
  };

  /********* XHR WRAPPER *********/
  const origXhrOpen = XMLHttpRequest.prototype.open;
  const origXhrSend = XMLHttpRequest.prototype.send;

  XMLHttpRequest.prototype.open = function(method, url) {
    this._resilient_method = method;
    this._resilient_url = url;
    return origXhrOpen.apply(this, arguments);
  };

  XMLHttpRequest.prototype.send = function(body) {
    try {
      const url = this._resilient_url;
      if (!url || !isTargetUrl(url)) {
        return origXhrSend.apply(this, arguments);
      }

      const xhr = this;
      (async () => {
        await tb.take();
        for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
          const clone = new XMLHttpRequest();
          clone.open(xhr._resilient_method, xhr._resilient_url, true);
          clone.onload = function() {
            xhr.status = clone.status;
            xhr.readyState = clone.readyState;
            xhr.response = clone.response;
            xhr.responseText = clone.responseText;
            if (xhr.onload && typeof xhr.onload === 'function') xhr.onload();
          };
          clone.onerror = function(e) {
            if (xhr.onerror && typeof xhr.onerror === 'function') xhr.onerror(e);
          };
          clone.send(body);
          await new Promise(resolve => {
            const checker = () => {
              if (clone.readyState === 4) resolve();
            };
            clone.onreadystatechange = checker;
          });
          if (clone.status !== 429) {
            xhr.status = clone.status;
            xhr.readyState = clone.readyState;
            xhr.response = clone.response;
            xhr.responseText = clone.responseText;
            if (xhr.onload && typeof xhr.onload === 'function') xhr.onload();
            return;
          } else {
            const waitMs = computeBackoff(attempt);
            console.warn(`[ResilientScript][XHR] 429 reçu. attempt=${attempt}. wait ${Math.round(waitMs)} ms`);
            await wait(waitMs);
          }
        }
        const err = new Error('ResilientScript XHR: trop de retries (429).');
        if (xhr.onerror && typeof xhr.onerror === 'function') xhr.onerror(err);
      })();
    } catch (e) {
      console.error('[ResilientScript] xhr wrapper error', e);
      return origXhrSend.apply(this, arguments);
    }
  };

  console.log(`[ResilientScript] installé — interception active pour ${TARGET_HOST}`);
})();
