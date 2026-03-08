import React from 'react';
import * as SiIcons from 'react-icons/si';
import { FaCode } from 'react-icons/fa'; // Fallback icon

const IconRenderer = ({ iconName, className = "w-8 h-8" }) => {
  // Construct the icon component name (e.g., 'SiPython' -> SiPython)
  const IconComponent = SiIcons[iconName] || FaCode; // Fallback to FaCode if icon not found

  return <IconComponent className={className} />;
};

export default IconRenderer;