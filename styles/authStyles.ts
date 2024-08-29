import useTheme from "@/hooks/useTheme";
import { height, width } from "@/utils/constants";
import { getSize } from "@/utils/helpers";
import { StyleSheet } from "react-native";

const getAuthStyles = () => {
    const { theme } = useTheme();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: "column",
            paddingTop: height * 0.03,
            paddingBottom: height * 0.03,
            paddingHorizontal: width * 0.04,
            justifyContent: "flex-start",
            alignItems: "flex-start",
            backgroundColor: theme.backgroundPrimary,
        },
        header: {
            height: height * 0.03,
            width: "100%",
            justifyContent: "center",
            alignItems: "flex-start",
        },
        logo: {
            objectFit: "contain",
            width: getSize("logo"),
        },
        hero: {
            height: height * 0.2,
            width: "100%",
            justifyContent: "center",
        },
        heroText: {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: width - width * 0.08,
            gap: height * 0.05,
        },
        title: {
            color: theme.textPrimary,
            fontFamily: "BebasNeue",
            fontSize: getSize("title"),
        },
        subtitle: {
            fontFamily: "Poppins-Medium",
            color: theme.textSecondary,
            letterSpacing: 0.5,
            fontSize: getSize("normal"),
        },
        formContainer: {
            width: "100%",
            gap: height * 0.02,
            paddingTop: height * 0.02,
            paddingBottom: height * 0.05,
        },
        secondaryBtnContainer: {
            width: "100%",
            height: height * 0.08,
            justifyContent: "center",
            alignItems: "center",
        },
        secondaryBtn: {
            color: theme.primary,
            fontFamily: "Poppins-Regular",
            fontSize: getSize("normal"),
        },
        btnContainer: {
            height: height * 0.05,
            width: "100%",
        },
        questionContainer: {
            flexDirection: "column",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: height * 0.02,
        },
        question: {
            fontFamily: "Poppins-Medium",
            color: theme.textPrimary,
            fontSize: getSize("normal"),
            alignSelf: "center",
        },
        alternativeLink: {
            justifyContent: "center",
            alignItems: "center",
        },
        alternativeText: {
            color: theme.primary,
            fontFamily: "BebasNeue",
            fontSize: getSize(24),
        },
    });

    return styles;
};

export default getAuthStyles;
