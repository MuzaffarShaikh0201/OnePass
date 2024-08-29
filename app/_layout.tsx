import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { AppProvider } from "@/contexts/AppContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import * as NavigationBar from "expo-navigation-bar";
import { StatusBar } from "react-native";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    return (
        <AppProvider>
            <ThemeProvider>
                <Stack screenOptions={{ headerShown: false }}>
                    <Stack.Screen
                        name="index"
                        options={{ headerShown: false }}
                    />
                </Stack>
            </ThemeProvider>
        </AppProvider>
    );
}
