import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const WatercolorFlow = () => {
  const canvasRef = useRef(null);
  const { isDark } = useTheme();
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    // Track mouse
    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: e.clientX / canvas.width,
        y: e.clientY / canvas.height
      };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Create noise texture for organic feel
    const createNoiseTexture = () => {
      const noiseCanvas = document.createElement('canvas');
      noiseCanvas.width = 256;
      noiseCanvas.height = 256;
      const noiseCtx = noiseCanvas.getContext('2d');
      const imageData = noiseCtx.createImageData(256, 256);
      
      for (let i = 0; i < imageData.data.length; i += 4) {
        const value = Math.random() * 50;
        imageData.data[i] = value;     // R
        imageData.data[i + 1] = value; // G
        imageData.data[i + 2] = value; // B
        imageData.data[i + 3] = 15;    // A (very subtle)
      }
      
      noiseCtx.putImageData(imageData, 0, 0);
      return noiseCanvas;
    };

    const noiseTexture = createNoiseTexture();

    // Animation function
    const draw = () => {
      timeRef.current += 0.002;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Color palette - watercolor friendly
      const colors = isDark 
        ? [
            { r: 70, g: 40, b: 90 },   // Deep purple
            { r: 30, g: 60, b: 100 },  // Deep blue
            { r: 80, g: 50, b: 60 },   // Mauve
            { r: 40, g: 70, b: 70 },   // Teal
          ]
        : [
            { r: 238, g: 119, b: 82 },  // Coral
            { r: 231, g: 60, b: 126 },  // Pink
            { r: 35, g: 166, b: 213 },  // Blue
            { r: 35, g: 213, b: 171 },  // Turquoise
          ];

      const opacity = isDark ? 0.15 : 0.25;

      // Create multiple flowing gradients
      for (let i = 0; i < 4; i++) {
        const color = colors[i];
        
        // Organic movement using sine waves
        const moveX1 = Math.sin(timeRef.current * 0.5 + i) * 0.3;
        const moveY1 = Math.cos(timeRef.current * 0.4 + i) * 0.3;
        const moveX2 = Math.sin(timeRef.current * 0.7 + i + 2) * 0.4;
        const moveY2 = Math.cos(timeRef.current * 0.6 + i + 2) * 0.4;
        
        // Mouse influence
        const mouseInfluenceX = (mouseRef.current.x - 0.5) * 0.2;
        const mouseInfluenceY = (mouseRef.current.y - 0.5) * 0.2;
        
        // Calculate positions with mouse and wave effects
        const x1 = (0.3 + i * 0.2 + moveX1 + mouseInfluenceX) * canvas.width;
        const y1 = (0.3 + i * 0.1 + moveY1 + mouseInfluenceY) * canvas.height;
        const x2 = (0.5 + i * 0.15 + moveX2 - mouseInfluenceX) * canvas.width;
        const y2 = (0.5 + i * 0.2 + moveY2 - mouseInfluenceY) * canvas.height;
        const x3 = (0.7 + i * 0.1 - moveX1 * 0.5) * canvas.width;
        const y3 = (0.7 + i * 0.15 - moveY1 * 0.5) * canvas.height;
        
        // First gradient (larger, softer)
        const gradient1 = ctx.createRadialGradient(x1, y1, 50, x1, y1, canvas.width * 0.6);
        gradient1.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity})`);
        gradient1.addColorStop(0.5, `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity * 0.3})`);
        gradient1.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`);
        
        // Second gradient (smaller, more intense)
        const gradient2 = ctx.createRadialGradient(x2, y2, 30, x2, y2, canvas.width * 0.4);
        gradient2.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity * 1.2})`);
        gradient2.addColorStop(0.6, `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity * 0.2})`);
        gradient2.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`);
        
        // Third gradient for blending
        const gradient3 = ctx.createRadialGradient(x3, y3, 20, x3, y3, canvas.width * 0.3);
        gradient3.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity * 0.8})`);
        gradient3.addColorStop(0.7, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`);
        
        // Apply with different blend modes for watercolor effect
        ctx.globalCompositeOperation = i === 0 ? 'source-over' : 'overlay';
        ctx.fillStyle = gradient1;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.globalCompositeOperation = 'overlay';
        ctx.fillStyle = gradient2;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.globalCompositeOperation = 'soft-light';
        ctx.fillStyle = gradient3;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      
      // Add noise texture for paper-like texture
      ctx.globalCompositeOperation = 'soft-light';
      ctx.globalAlpha = 0.1;
      ctx.drawImage(noiseTexture, 0, 0, canvas.width, canvas.height);
      
      // Add subtle vignette
      const vignette = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width / 1.5
      );
      vignette.addColorStop(0, 'rgba(0,0,0,0)');
      vignette.addColorStop(1, `rgba(0,0,0,${isDark ? 0.2 : 0.1})`);
      
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 0.5;
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-5 pointer-events-none"
      style={{ 
        filter: 'blur(20px)', // Critical for watercolor effect!
        transition: 'filter 0.3s ease'
      }}
    />
  );
};

export default WatercolorFlow;