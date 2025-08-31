// Configuration des performances

export const PERFORMANCE_CONFIG = {
  // Animations
  ANIMATION_DURATION: {
    FAST: 0.3,
    NORMAL: 0.6,
    SLOW: 1.0
  },
  
  // Matrix Rain
  MATRIX: {
    MAX_COLUMNS: 40,
    MIN_COLUMN_LENGTH: 8,
    MAX_COLUMN_LENGTH: 15,
    MIN_SPEED: 20,
    MAX_SPEED: 28
  },
  
  // Particules
  PARTICLES: {
    COUNT: 8,
    MIN_SIZE: 1,
    MAX_SIZE: 3,
    ANIMATION_DURATION: 4
  },
  
  // Loading
  LOADING: {
    DURATION: 1500,
    STEPS: [
      "Initialisation...",
      "Sécurité...",
      "Modules...",
      "Connexion...",
      "Prêt..."
    ]
  },
  
  // Scroll
  SCROLL: {
    THROTTLE_DELAY: 16, // ~60fps
    PASSIVE_EVENTS: true
  },
  
  // Lazy Loading
  LAZY_LOADING: {
    THRESHOLD: 0.1,
    ROOT_MARGIN: '50px'
  }
};

// Détection des capacités de l'appareil
export const DEVICE_CAPABILITIES = {
  isLowEndDevice: () => {
    const memory = (navigator as any).deviceMemory;
    const cores = (navigator as any).hardwareConcurrency;
    return memory < 4 || cores < 4;
  },
  
  prefersReducedMotion: () => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },
  
  isMobile: () => {
    return window.innerWidth < 768;
  }
};

// Optimisations basées sur les capacités
export const getOptimizedConfig = () => {
  const isLowEnd = DEVICE_CAPABILITIES.isLowEndDevice();
  const prefersReducedMotion = DEVICE_CAPABILITIES.prefersReducedMotion();
  
  return {
    ...PERFORMANCE_CONFIG,
    MATRIX: {
      ...PERFORMANCE_CONFIG.MATRIX,
      MAX_COLUMNS: isLowEnd ? 20 : PERFORMANCE_CONFIG.MATRIX.MAX_COLUMNS,
      MAX_COLUMN_LENGTH: isLowEnd ? 10 : PERFORMANCE_CONFIG.MATRIX.MAX_COLUMN_LENGTH
    },
    PARTICLES: {
      ...PERFORMANCE_CONFIG.PARTICLES,
      COUNT: isLowEnd ? 4 : PERFORMANCE_CONFIG.PARTICLES.COUNT
    },
    ANIMATION_DURATION: {
      FAST: prefersReducedMotion ? 0.1 : PERFORMANCE_CONFIG.ANIMATION_DURATION.FAST,
      NORMAL: prefersReducedMotion ? 0.3 : PERFORMANCE_CONFIG.ANIMATION_DURATION.NORMAL,
      SLOW: prefersReducedMotion ? 0.5 : PERFORMANCE_CONFIG.ANIMATION_DURATION.SLOW
    }
  };
};
