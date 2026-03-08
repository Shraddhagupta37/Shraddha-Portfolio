import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const WatercolorBackground = () => {
  const backgroundRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });
  const { isDark } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e) => {
      targetPos.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2
      };
    };

    const animate = () => {
      mousePos.current.x += (targetPos.current.x - mousePos.current.x) * 0.05;
      mousePos.current.y += (targetPos.current.y - mousePos.current.y) * 0.05;

      if (backgroundRef.current) {
        const x = mousePos.current.x * 30;
        const y = mousePos.current.y * 30;
        
        // Different opacity for light/dark mode
        const opacity = isDark ? 0.08 : 0.15;
        
        backgroundRef.current.style.background = `
          radial-gradient(circle at ${50 + x}% ${30 + y}%, 
            rgba(238, 119, 82, ${opacity}), 
            transparent 50%),
          radial-gradient(circle at ${30 - x}% ${70 - y}%, 
            rgba(231, 60, 126, ${opacity}), 
            transparent 50%),
          radial-gradient(circle at ${70 + y}% ${40 - x}%, 
            rgba(35, 166, 213, ${opacity}), 
            transparent 50%),
          radial-gradient(circle at ${40 - y}% ${60 + x}%, 
            rgba(35, 213, 171, ${opacity}), 
            transparent 50%),
          linear-gradient(125deg, 
            ${isDark ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.05)'} 0%, 
            ${isDark ? 'rgba(0,0,0,0.02)' : 'rgba(255,255,255,0.02)'} 100%)
        `;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    const animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, [isDark]);

  return (
    <div
      ref={backgroundRef}
      className="fixed inset-0 -z-5 transition-colors duration-1000"
      style={{
        background: isDark 
          ? `
              radial-gradient(circle at 50% 30%, rgba(238, 119, 82, 0.08), transparent 50%),
              radial-gradient(circle at 30% 70%, rgba(231, 60, 126, 0.08), transparent 50%),
              radial-gradient(circle at 70% 40%, rgba(35, 166, 213, 0.08), transparent 50%),
              radial-gradient(circle at 40% 60%, rgba(35, 213, 171, 0.08), transparent 50%),
              linear-gradient(125deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.02) 100%)
            `
          : `
              radial-gradient(circle at 50% 30%, rgba(238, 119, 82, 0.15), transparent 50%),
              radial-gradient(circle at 30% 70%, rgba(231, 60, 126, 0.15), transparent 50%),
              radial-gradient(circle at 70% 40%, rgba(35, 166, 213, 0.15), transparent 50%),
              radial-gradient(circle at 40% 60%, rgba(35, 213, 171, 0.15), transparent 50%),
              linear-gradient(125deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)
            `
      }}
    />
  );
};

export default WatercolorBackground;