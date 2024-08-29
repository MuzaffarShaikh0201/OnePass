import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Image,
} from "react-native";
import { height, width } from "@/utils/constants";
import useTheme from "@/hooks/useTheme";
import { getSize } from "@/utils/helpers";

interface FormFieldProps {
    title: string;
    value: string;
    placeholder: string;
    handleChange: (text: string) => void;
}

const FormField: React.FC<FormFieldProps> = ({
    title,
    placeholder,
    value,
    handleChange,
}) => {
    const { theme } = useTheme();
    const [isFocused, setIsFocused] = useState(false);

    const styles = StyleSheet.create({
        container: {
            width: "100%",
            gap: height * 0.002,
        },
        title: {
            color: isFocused ? theme.primary : theme.textPrimary,
            fontFamily: "BebasNeue",
            fontSize: getSize("normal"),
            paddingLeft: width * 0.02,
        },
        inputContainer: {
            width: "100%",
            height: height * 0.05,
            borderWidth: 2,
            borderColor: isFocused ? theme.primary : theme.tint,
            backgroundColor: theme.backgroundSecondary,
            borderRadius: height * 0.01,
            flexDirection: "row",
            justifyContent: "space-between",
            gap: width * 0.02,
            alignItems: "center",
            paddingHorizontal: width * 0.02,
        },
        input: {
            width: "100%",
            fontSize: getSize("normal"),
            fontFamily: "Poppins-Medium",
            letterSpacing: 0.5,
            color: theme.textPrimary,
        },
        icon: {
            height: height * 0.025,
            width: height * 0.025,
        },
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    keyboardType={
                        value === "EMAIL" ? "email-address" : "default"
                    }
                    value={value}
                    style={styles.input}
                    placeholder={placeholder}
                    placeholderTextColor={theme.textSecondary}
                    cursorColor={theme.textPrimary}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onChangeText={handleChange}
                />
            </View>
        </View>
    );
};

export default FormField;
