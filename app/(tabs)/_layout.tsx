import React from "react";
import { Tabs } from "expo-router";

const TabsLayout = () => {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen name="home" options={{ headerShown: false }} />
            <Tabs.Screen name="create" options={{ headerShown: false }} />
            <Tabs.Screen name="profile" options={{ headerShown: false }} />
        </Tabs>
    );
};

export default TabsLayout;
