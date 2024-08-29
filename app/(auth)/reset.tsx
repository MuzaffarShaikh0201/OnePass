import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Reset = () => {
    return (
        <View style={styles.container}>
            <Text>Reset</Text>
        </View>
    );
};

export default Reset;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
