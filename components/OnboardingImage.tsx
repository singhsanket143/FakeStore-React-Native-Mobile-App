import { Image, useWindowDimensions } from "react-native"

export const OnboardingImage = () => {

    const { width } = useWindowDimensions(); // get the width of the screen

    const imageSize = Math.min(width/1.5, 400);

    return (
        <Image 
            source={require("@/assets/images/logo.png")}
            style={{
                width: imageSize,
                height: imageSize,
            }}
        />
    
    );
}