import React, { createContext, ReactNode, useEffect, useState } from "react";
import * as NavigationBar from "expo-navigation-bar";
import { StatusBar } from "react-native";

import { COLORS } from "@/utils/constants";

export const ThemeContext = createContext({
    theme: COLORS.light,
    toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [theme, setTheme] = useState(COLORS.light);

    const toggleTheme = () => {
        setTheme(theme === COLORS.light ? COLORS.dark : COLORS.light);
    };

    useEffect(() => {
        StatusBar.setBarStyle(theme.isDark ? "light-content" : "dark-content");
        StatusBar.setBackgroundColor(theme.backgroundPrimary);
        NavigationBar.setButtonStyleAsync(theme.isDark ? "light" : "dark");
        NavigationBar.setBackgroundColorAsync(theme.backgroundPrimary);
    }, [theme.isDark]);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
