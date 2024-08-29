import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import useTheme from "@/hooks/useTheme";

const Login = () => {
    const { theme, toggleTheme } = useTheme();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: "center",
            backgroundColor: theme.backgroundPrimary,
            justifyContent: "center",
        },
    });

    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <TouchableOpacity onPress={toggleTheme}>
                <Text>Toggle Theme</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;
