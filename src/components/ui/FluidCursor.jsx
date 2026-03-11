'use client';
import React, { useEffect, useRef } from 'react';
import useFluidCursor from '../../hooks/useFluidCursor';

const FluidCursor = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    // Make sure canvas exists before initializing
    if (canvasRef.current) {
      useFluidCursor();
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 z-0 pointer-events-none">
      <canvas 
        ref={canvasRef}
        id="fluid" 
        className="h-screen w-screen" 
      />
    </div>
  );
};

export default FluidCursor;