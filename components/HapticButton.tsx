import { Platform, Pressable, StyleSheet, Text } from "react-native";
import * as Haptics from 'expo-haptics';
import { theme } from "@/app/theme";
type Props = {
    onPress: () => void;
    title: string;
}

export const HapticButton = ({ title, onPress } : Props) => {
    
    const handlePress = () => {
        if(Platform.OS !== "web")
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        onPress();
    }
    
    return (
        <Pressable
            style={(state) => {
                if(state.pressed) 
                    return [styles.button, styles.buttonPressed];
                return styles.button;
            }}
            onPress={handlePress}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    text: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    },
    button: {
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 6,
        backgroundColor: theme.darkGreen
    },
    buttonPressed: {
        backgroundColor: theme.limeGreen
    }
})