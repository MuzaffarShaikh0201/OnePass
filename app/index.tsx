import Onboarding from "@/components/Onboarding";
import useTheme from "@/hooks/useTheme";
import { View, StyleSheet } from "react-native";

export default function Index() {
    const { theme } = useTheme();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.backgroundPrimary,
            alignItems: "center",
            justifyContent: "center",
        },
    });

    return (
        <View style={styles.container}>
            <Onboarding />
        </View>
    );
}
