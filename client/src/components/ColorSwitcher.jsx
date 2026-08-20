import React, { useState } from 'react';
import { Settings } from 'lucide-react';
// Make sure to adjust these import paths to match your project structure!
import { useTheme } from '../context/ThemeContext'; 
import { themes, themeNames } from '../utils/themes'; 

const ColorSwitcher = () => {
  // 1. State to track if the panel is open or closed
  const [isOpen, setIsOpen] = useState(false);
  
  // 2. Bring in your context variables and functions
  const { theme, setTheme } = useTheme();

  return (
    // MAIN WRAPPER
    <div 
      className={`fixed right-0 top-1/2 z-[101] flex w-[160px] -translate-y-1/2 items-center transition-transform duration-300 ease-out 
        ${isOpen ? 'translate-x-0' : 'translate-x-[130px]'}
      `}
    >
      {/* TOGGLE BUTTON */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{ backgroundColor: themes[theme].accent }} // Button matches current theme
        className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-l-lg border-none text-white shadow-md transition-colors focus:outline-none"
      >
        <Settings size={18} className={isOpen ? 'animate-spin' : ''} />
      </button>

      {/* PALETTES CONTAINER */}
      <div className="w-[130px] rounded-l-xl bg-zinc-800 p-3 shadow-xl">
        
        {/* Using a grid makes it super easy to add more themes later! */}
        <div className="grid grid-cols-3 gap-2">
          
          {/* Map through the themeNames array you created */}
          {themeNames.map((themeName) => (
            <button
              key={themeName}
              onClick={() => setTheme(themeName)}
              // Pull the specific accent hex color from your themes object
              style={{ backgroundColor: themes[themeName].accent }}
              className={`h-[30px] w-[30px] cursor-pointer rounded-md border-2 transition-transform hover:scale-110 focus:outline-none 
                ${theme === themeName ? 'border-white scale-110' : 'border-transparent'}
              `}
              aria-label={`Set theme to ${themes[themeName].label}`}
              title={themes[themeName].label}
            />
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default ColorSwitcher;