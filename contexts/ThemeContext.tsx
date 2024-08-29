import React, { createContext, ReactNode, useEffect, useState } from "react";
import * as NavigationBar from "expo-navigation-bar";
import { StatusBar } from "react-native";

import { COLORS } from "@/utils/constants";
import useApp from "@/hooks/useApp";
import { globalStorage } from "@/utils/storage";

export const ThemeContext = createContext({
    theme: COLORS.light,
    toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [theme, setTheme] = useState(
        globalStorage.getString("theme") === undefined
            ? COLORS.light
            : globalStorage.getString("theme") === "light"
            ? COLORS.light
            : COLORS.dark
    );
    const { isLoading } = useApp();

    const toggleTheme = () => {
        setTheme(theme === COLORS.light ? COLORS.dark : COLORS.light);
        globalStorage.set("theme", theme === COLORS.light ? "dark" : "light");
        console.log(globalStorage.getString("theme"));
    };

    useEffect(() => {
        if (!isLoading) {
            StatusBar.setBarStyle(
                theme.isDark ? "light-content" : "dark-content"
            );
            StatusBar.setBackgroundColor(theme.backgroundPrimary);
            NavigationBar.setButtonStyleAsync(theme.isDark ? "light" : "dark");
            NavigationBar.setBackgroundColorAsync(theme.backgroundPrimary);
        }
    }, [theme.isDark, isLoading]);

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
