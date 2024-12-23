import { StyleSheet, Text, View } from "react-native";
import { theme } from "@/app/theme";
import { HapticButton } from "@/components/HapticButton";
import { useUserStore } from "@/store/useUserStore";

export default function ProfileScreen() {

    const toggleOnboarding = useUserStore(state => state.toggleOnboarding);

    return (
        <View style={styles.container}>
            <HapticButton
                title="Back to onboarding"
                onPress={toggleOnboarding}
            />
        </View>
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
    }
});