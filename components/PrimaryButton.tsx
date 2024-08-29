import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import useTheme from "@/hooks/useTheme";
import { getSize } from "@/utils/helpers";

interface PrimaryButtonProps {
    title: string;
    handlePress: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
    title,
    handlePress,
}) => {
    const { theme } = useTheme();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: theme.primary,
        },
        title: {
            fontFamily: "BebasNeue",
            fontSize: getSize("h2"),
            color: theme.tint,
            letterSpacing: 0.5,
        },
    });

    return (
        <TouchableOpacity onPress={handlePress} style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

export default PrimaryButton;
