import { createContext, useContext, useEffect, useState } from "react";
import { themeNames } from "../utils/themes";
const ThemeContext = createContext(null);
const THEME_KEY = "portfolio-theme";
const MODE_KEY = "portfolio-mode";

const savedTheme = () => {
    const v = localStorage.getItem(THEME_KEY);
    return themeNames.includes(v) ? v : "emerald";
};

const savedMode = () => {
    const v = localStorage.getItem(MODE_KEY);
    return v === "light" || v === "dark" ? v : "dark";
};

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(savedTheme);
    const [mode, setMode] = useState(savedMode);
    
    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        document.documentElement.dataset.mode = mode;
        localStorage.setItem(THEME_KEY, theme);
        localStorage.setItem(MODE_KEY, mode);
    }, [theme, mode]);


    return (
        <ThemeContext.Provider
            value={{
                theme,
                mode,
                setTheme,
                setMode,
                toggleMode: () => setMode((m) => (m === "dark" ? "light" : "dark")),
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const v = useContext(ThemeContext);
    if (!v) throw new Error("useTheme must be used inside ThemeProvider");
    return v;
}
