import { globalStorage } from "@/utils/storage";
import * as SplashScreen from "expo-splash-screen";
import React, { createContext, ReactNode, useEffect, useState } from "react";

export const AppContext = createContext({
    isLoading: true,
    firstLoad: true,
});

export const AppProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [firstLoad] = useState(
        globalStorage.getBoolean("firstLoad") === undefined ? true : false
    );

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 4000);
        const hideSplashScreen = async () => {
            await SplashScreen.hideAsync();
        };
        if (!isLoading) {
            hideSplashScreen();
        }
    }, [isLoading]);

    return (
        <AppContext.Provider
            value={{
                isLoading,
                firstLoad,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
