import { Dimensions } from "react-native";

export const { width, height } = Dimensions.get("window");

export const COLORS = {
    light: {
        isDark: false,
        primary: "#FF6464",
        textPrimary: "#545974",
        textSecondary: "#BABABA",
        backgroundPrimary: "#FFFFFF",
        backgroundSecondary: "#FFFFFF33",
        tint: "#F1F1F1",
    },
    dark: {
        isDark: true,
        primary: "#FF6464",
        textPrimary: "#FFFFFF",
        textSecondary: "#BABABA",
        backgroundPrimary: "#545974",
        backgroundSecondary: "#FFFFFF33",
        tint: "#F1F1F1",
    },
};

export const SLIDES = [
    {
        id: 1,
        title: { text: ["ALL YOUR ", " ARE HERE."], highlighted: "PASSWORDS" },
        subtitle:
            "Store and manage all of your passwords from one place. Don’t remember hundreds of passwords.",
    },
    {
        id: 2,
        title: {
            text: ["Generate ", " Passwords."],
            highlighted: "Secure",
        },
        subtitle:
            "Stop using unsecure passwords for your online accounts, level up with OnePass. Get the most secure and difficult to crack passwords.",
    },
    {
        id: 3,
        title: {
            text: ["DON’T TYPE, ", " YOUR CREDENTIALS."],
            highlighted: "AUTOFILL",
        },
        subtitle:
            "Don’t compromise your passwords by typing them in public, let OnePass autofill those and keep your credentials secure.",
    },
];
