import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export function MiniNav({ open, onClose }) {
  const { mode, toggleMode } = useTheme();

  return (
    <div
      className="
        sticky top-0 z-50
        flex h-14 w-full
        items-center justify-between
        bg-background
        px-4
        border-b border-border
        max-[764px]:fixed
        md:h-screen
        md:w-12.5
        md:flex-col
        md:justify-start
        md:border-b-0
        md:border-r
        md:px-0
        md:py-3
      "
  
    >
      {/* Logo */}
      <button
        aria-label="Website Logo"
        className="
          flex h-9 w-9
          items-center justify-center
          rounded-lg
          bg-surface
          border border-border
          text-accent
        "
      >
        <i className="ph ph-codesandbox-logo text-xl"></i>
      </button>

      {/* Theme Toggle */}
      <button
        onClick={toggleMode}
        aria-label="Toggle theme"
        className="
          flex h-9 w-9
          items-center justify-center
          rounded-lg
          bg-accent
          border border-border
          text-text

          md:mt-auto
        "
      >
        {mode === "dark" ? (
          <Moon size={18} />
        ) : (
          <Sun size={18} />
        )}
      </button>
    </div>
      
  );
}

export default MiniNav;