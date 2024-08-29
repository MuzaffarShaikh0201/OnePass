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
    const [showPassword, setShowPassword] = useState(false);

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
            borderWidth: 4,
            borderColor: isFocused ? theme.primary : theme.tint,
            borderRadius: height * 0.01,
            flexDirection: "row",
            justifyContent: "space-between",
            gap: width * 0.02,
            alignItems: "center",
            paddingHorizontal: width * 0.02,
        },
        input: {
            width: "75%",
            backgroundColor: theme.backgroundSecondary,
            fontSize: getSize("normal"),
            fontFamily: "Poppins-Regular",
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
                        value === "EMAIL"
                            ? "email-address"
                            : value === "PASSWORD"
                            ? "visible-password"
                            : "default"
                    }
                    value={value}
                    style={styles.input}
                    placeholder={placeholder}
                    placeholderTextColor={theme.textSecondary}
                    cursorColor={theme.textPrimary}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onChangeText={handleChange}
                    secureTextEntry={title === "Password" && !showPassword}
                />

                {title === "PASSWORD" && (
                    <TouchableOpacity
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        <Image
                            source={
                                !showPassword
                                    ? require("../assets/icons/eye-opened.png")
                                    : require("../assets/icons/eye-closed.png")
                            }
                            resizeMode="contain"
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default FormField;
