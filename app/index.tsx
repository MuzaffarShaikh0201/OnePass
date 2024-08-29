import Onboarding from "@/components/Onboarding";
import useApp from "@/hooks/useApp";
import useTheme from "@/hooks/useTheme";
import { Redirect } from "expo-router";
import { View, StyleSheet } from "react-native";

export default function Index() {
    const { theme } = useTheme();
    const { firstLoad } = useApp();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.backgroundPrimary,
            alignItems: "center",
            justifyContent: "center",
        },
    });

    if (!firstLoad) {
        return <Redirect href="/home" />;
    }

    return (
        <View style={styles.container}>
            <Onboarding />
        </View>
    );
}
