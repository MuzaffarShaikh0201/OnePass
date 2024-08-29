import useTheme from "@/hooks/useTheme";
import { StyleSheet } from "react-native";
import { getSize } from "@/utils/utilities";
import { height, width } from "@/utils/constants";

const getOnboardingStyles = () => {
    const { theme } = useTheme();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: "column",
            paddingTop: height * 0.03,
            paddingBottom: height * 0.03,
            paddingHorizontal: width * 0.04,
            justifyContent: "space-between",
            alignItems: "flex-start",
        },
        header: {
            height: height * 0.05,
            width: "100%",
            justifyContent: "center",
            alignItems: "flex-start",
        },
        logo: {
            objectFit: "contain",
            width: getSize("logo"),
        },
        hero: {
            height: height * 0.5,
            width: "100%",
        },
        slidesContainer: {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: width - width * 0.08,
            gap: height * 0.05,
        },
        slideText: {
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            width: "auto",
        },
        title: {
            color: theme.textPrimary,
            fontFamily: "BebasNeue",
            fontSize: getSize("title"),
        },
        titleHighlighted: {
            fontFamily: "BebasNeue",
            color: theme.primary,
            fontSize: getSize("title"),
        },
        subtitle: {
            fontFamily: "Poppins-Medium",
            color: theme.textSecondary,
            letterSpacing: 0.5,
            fontSize: getSize("normal"),
        },
        footer: {
            height: height * 0.2,
            width: "100%",
            justifyContent: "space-between",
            alignItems: "flex-start",
            // paddingVertical: height * 0.02,
        },
        indicator: {
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            height: height * 0.1,
            gap: 8,
            // borderWidth: 1,
        },
        activeIndicator: {
            color: theme.primary,
            fontSize: getSize("h1"),
            textAlign: "center",
            fontFamily: "BebasNeue",
        },
        inactiveIndicator: {
            fontFamily: "BebasNeue",
            color: theme.textSecondary,
            fontSize: getSize("h2"),
            textAlign: "center",
        },
        buttons: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: width * 0.02,
        },
        getStartedBtn: {
            flex: 1,
            height: height * 0.05,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: theme.primary,
        },
        skipBtn: {
            flex: 1,
            height: height * 0.05,
            borderRadius: 10,
            borderWidth: 2,
            justifyContent: "center",
            alignItems: "center",
            borderColor: theme.primary,
            marginRight: 10,
        },
        nextBtn: {
            flex: 1,
            height: height * 0.05,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: theme.primary,
        },
    });

    return styles;
};

export default getOnboardingStyles;
