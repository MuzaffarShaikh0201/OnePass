import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import getAuthStyles from "@/styles/authStyles";
import FormField from "@/components/FormField";
import { Href, Link } from "expo-router";
import PrimaryButton from "@/components/PrimaryButton";

const SIGNUP = () => {
    const styles = getAuthStyles();
    const [form, setForm] = useState({
        firstname: "",
        lastname: "",
        email: "",
    });

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require("../../assets/images/iconVector.png")}
                    style={styles.logo}
                />
            </View>
            <View style={styles.hero}>
                <Text
                    style={styles.heroText}
                    textBreakStrategy="simple"
                    adjustsFontSizeToFit
                >
                    <Text style={styles.title}>SIGN UP</Text>
                </Text>
                <Text style={styles.subtitle}>
                    Let’s get you setup with a new account!
                </Text>
            </View>
            <View style={styles.formContainer}>
                <FormField
                    title="FIRST NAME"
                    value={form.firstname}
                    handleChange={(e) => setForm({ ...form, firstname: e })}
                    placeholder="John"
                />
                <FormField
                    title="LAST NAME"
                    value={form.lastname}
                    handleChange={(e) => setForm({ ...form, lastname: e })}
                    placeholder="Doe"
                />
                <FormField
                    title="EMAIL"
                    value={form.email}
                    handleChange={(e) => setForm({ ...form, email: e })}
                    placeholder="johndoe@example.com"
                />
            </View>
            <View style={styles.btnContainer}>
                <PrimaryButton title="SIGN UP" handlePress={() => {}} />
            </View>
            <View style={styles.secondaryBtnContainer}>
                <Link href={"/register" as Href<string>}>
                    <Text style={styles.secondaryBtn}>
                        Register a new device
                    </Text>
                </Link>
            </View>
            <View style={styles.questionContainer}>
                <Text style={styles.question}>Already have an account?</Text>
                <Link href={"/login"} style={styles.alternativeLink}>
                    <Text style={styles.alternativeText}>LOGIN</Text>
                </Link>
            </View>
        </SafeAreaView>
    );
};

export default SIGNUP;
