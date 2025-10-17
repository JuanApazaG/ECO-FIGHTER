import { useState, useEffect } from 'react';

/**
 * Hook personalizado para detectar el tipo de dispositivo
 * Retorna información sobre si es móvil, tablet, orientación, etc.
 */
export const useDevice = () => {
  const [deviceInfo, setDeviceInfo] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
    orientation: typeof window !== 'undefined' ? 
      (window.innerWidth > window.innerHeight ? 'landscape' : 'portrait') : 'portrait',
    isTouch: false,
    isDarkMode: false
  });

  useEffect(() => {
    const updateDeviceInfo = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const orientation = width > height ? 'landscape' : 'portrait';
      
      // Detectar tipo de dispositivo basado en ancho
      const isMobile = width < 768;
      const isTablet = width >= 768 && width < 1024;
      const isDesktop = width >= 1024;
      
      // Detectar si es touch
      const isTouch = () => {
        return (
          (typeof window !== 'undefined' && 
            ('ontouchstart' in window ||
              navigator.maxTouchPoints > 0 ||
              navigator.msMaxTouchPoints > 0))
        );
      };

      // Detectar modo oscuro
      const isDarkMode = window.matchMedia && 
                        window.matchMedia('(prefers-color-scheme: dark)').matches;

      setDeviceInfo({
        isMobile,
        isTablet,
        isDesktop,
        width,
        height,
        orientation,
        isTouch: isTouch(),
        isDarkMode
      });
    };

    // Actualizar en el montaje
    updateDeviceInfo();

    // Actualizar al cambiar tamaño de ventana
    window.addEventListener('resize', updateDeviceInfo);
    
    // Actualizar al cambiar orientación
    window.addEventListener('orientationchange', updateDeviceInfo);

    // Listener para cambios de tema (dark mode)
    if (window.matchMedia) {
      const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
      darkModeQuery.addEventListener('change', updateDeviceInfo);
    }

    return () => {
      window.removeEventListener('resize', updateDeviceInfo);
      window.removeEventListener('orientationchange', updateDeviceInfo);
      if (window.matchMedia) {
        const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        darkModeQuery.removeEventListener('change', updateDeviceInfo);
      }
    };
  }, []);

  return deviceInfo;
};

export default useDevice;
