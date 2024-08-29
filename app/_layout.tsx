import { ThemeProvider } from "@/contexts/ThemeContext";
import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <ThemeProvider>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="index" options={{ headerShown: false }} />
            </Stack>
        </ThemeProvider>
    );
}
