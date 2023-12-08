import { createContext, useMemo, useState } from "react";

export const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        setIsDark((prev) => !prev)
    };

    const value = useMemo(() => ({ isDark, toggleTheme }), [isDark])

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
};