import { Button, StyleSheet, Text, View } from "react-native";
import { theme } from "@/app/theme";
import { useUserStore } from "@/store/useUserStore";
import { useRouter } from "expo-router";
import { HapticButton } from "@/components/HapticButton";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { OnboardingImage } from "@/components/OnboardingImage";
export default function Onboarding() {

    const { toggleOnboarding } = useUserStore();

    const router = useRouter();

    function handlePress() {
        toggleOnboarding();
        router.replace("/");

    }

    return (
        <LinearGradient
            style={styles.container}
            start={{x: 0, y:0}} // This is the top left
            end={{x: 1, y: 1}} // This is the bottom right
            colors={[theme.green, theme.appleGreen, theme.limeGreen]}
        >
            <StatusBar style="light" />
            <View>
                <Text style={styles.heading}>Fakestore</Text>
                <Text style={styles.tagLine}>Shop your heart out !</Text>
            </View>
            <OnboardingImage />
            <HapticButton
                onPress={handlePress}
                title="Finish onboarding"
            />
        </LinearGradient>    
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.white,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 20,
        color: theme.gray
    },
    heading: {
        fontSize: 40,
        color: theme.white,
        fontWeight: "bold",
        marginBottom: 12,
        textAlign: "center"
    },
    tagLine: {
        fontSize: 20,
        color: theme.black,
        textAlign: "center",
        marginBottom: 24
    }
});