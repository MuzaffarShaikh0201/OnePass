import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    NativeSyntheticEvent,
    NativeScrollEvent,
} from "react-native";
import React, { useRef, useState } from "react";
import useTheme from "@/hooks/useTheme";
import { getSize } from "@/utils/helpers";
import { router } from "expo-router";
import { height, SLIDES, width } from "@/utils/constants";
import getOnboardingStyles from "@/styles/onboardingStyles";

const Onboarding = () => {
    const styles = getOnboardingStyles();
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const ref = useRef<FlatList<(typeof SLIDES)[number]>>(null);
    const { theme } = useTheme();

    const updateCurrentSlideIndex = (
        e: NativeSyntheticEvent<NativeScrollEvent>
    ) => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    };

    const skipSlides = () => {
        const lastSlideIndex = SLIDES.length - 1;
        const offset = lastSlideIndex * width - width * 0.08;
        ref?.current?.scrollToOffset({ offset });
        setCurrentSlideIndex(lastSlideIndex);
    };

    const goNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex != SLIDES.length) {
            const offset = nextSlideIndex * width - width * 0.08;
            ref?.current?.scrollToOffset({ offset });
            setCurrentSlideIndex(nextSlideIndex);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require("../assets/images/iconVector.png")}
                    style={styles.logo}
                />
            </View>
            <View style={styles.hero}>
                <FlatList
                    onMomentumScrollEnd={updateCurrentSlideIndex}
                    pagingEnabled
                    ref={ref}
                    data={SLIDES}
                    contentContainerStyle={{ height: height * 0.5 }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View style={styles.slidesContainer}>
                            <Text
                                style={styles.slideText}
                                textBreakStrategy="simple"
                                adjustsFontSizeToFit
                            >
                                <Text style={styles.title}>
                                    {item.title.text[0]}
                                </Text>
                                <Text style={styles.titleHighlighted}>
                                    {item.title.highlighted}
                                </Text>
                                <Text style={styles.title}>
                                    {item.title.text[1]}
                                </Text>
                            </Text>
                            <Text style={styles.subtitle}>{item.subtitle}</Text>
                        </View>
                    )}
                />
            </View>
            <View style={styles.footer}>
                <View style={styles.indicator}>
                    {SLIDES.map((_, index) => (
                        <Text
                            key={index}
                            style={
                                currentSlideIndex == index
                                    ? styles.activeIndicator
                                    : styles.inactiveIndicator
                            }
                        >
                            {index + 1}
                        </Text>
                    ))}
                </View>
                {currentSlideIndex == SLIDES.length - 1 ? (
                    <View style={styles.buttons}>
                        <TouchableOpacity
                            style={styles.getStartedBtn}
                            onPress={() => router.replace("/login")}
                        >
                            <Text
                                style={{
                                    fontFamily: "BebasNeue",
                                    fontSize: getSize("h2"),
                                    color: theme.tint,
                                    letterSpacing: 0.5,
                                }}
                            >
                                GET STARTED
                            </Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View style={styles.buttons}>
                        <TouchableOpacity
                            style={styles.skipBtn}
                            onPress={skipSlides}
                        >
                            <Text
                                style={{
                                    fontFamily: "BebasNeue",
                                    fontSize: getSize("h2"),
                                    color: theme.primary,
                                    letterSpacing: 0.5,
                                }}
                            >
                                SKIP
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.nextBtn}
                            onPress={goNextSlide}
                        >
                            <Text
                                style={{
                                    fontFamily: "BebasNeue",
                                    fontSize: getSize("h2"),
                                    color: theme.tint,
                                    letterSpacing: 0,
                                }}
                            >
                                NEXT
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </View>
    );
};

export default Onboarding;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
