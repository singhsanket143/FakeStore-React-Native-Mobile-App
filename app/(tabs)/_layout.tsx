import { Link, Redirect, Tabs } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import { theme } from "@/app/theme";
import { useUserStore } from "@/store/useUserStore";
import { Pressable } from "react-native";


export default function Layout() {

    const { isOnboardingFinished } = useUserStore();

    if (!isOnboardingFinished) {
        return (
            <Redirect href="/Onboarding" />
        )
    }

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: theme.lylak,
            }}
        >
            <Tabs.Screen 
                name="index" 
                options={{ 
                    title: "Home", 
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="home" size={size} color={color} />
                    ),
                    headerRight: () => (
                        <Link href="/NewProduct" asChild>
                            <Pressable
                                style={{ paddingRight: 20 }}
                            >
                                <Feather name="plus-circle" size={24} color={theme.lylak} />
                            </Pressable>
                        </Link>
                    )
                }} 
            />
            <Tabs.Screen 
                name="profile" 
                options={{ 
                    title: "Profile",
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="user" size={size} color={color} />
                    )
                }}     
            />
        </Tabs>
    )
}