import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Create = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Create</Text>
        </SafeAreaView>
    );
};

export default Create;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
