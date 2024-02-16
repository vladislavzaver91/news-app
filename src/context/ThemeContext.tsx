import React, { createContext, useMemo, useState } from "react";

interface IThemeContext {
    isDark: boolean;
    toggleTheme: () => void;
}

interface Props {
    children: React.ReactNode;
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export const ThemeProvider = ({ children }: Props) => {
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