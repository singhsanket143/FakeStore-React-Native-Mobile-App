import axios from "axios";
import { useLocalSearchParams, useRouter } from "expo-router/build/hooks";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { theme } from "./theme";
import { HapticButton } from "@/components/HapticButton";
type Rating = {
    rate: number;
    count: number;
}

type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}
export default function AddProductToCart() {

    const {id} = useLocalSearchParams();

    const router = useRouter();

    const [product, setProduct] = useState<Product | null>(null);
    const [quantity, setQuantity] = useState<string>("");

    async function downloadProduct() {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        console.log(response);
        setProduct(response.data);
    }

    useEffect(() => {
        if(!product) {
            downloadProduct();
        }
    }, [product]);

    if(!product) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }

    return (
        <KeyboardAwareScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
            keyboardShouldPersistTaps="handled"
        >
            <View
                style={styles.center}
            >
                <Image source={{ uri: product?.image }} style={{ width: 200, height: 200 }} />
            </View>
            <Text style={styles.label}>{product?.title}</Text>
            <Text style={styles.label}>${product?.price}</Text>

            <TextInput 
                style={styles.input}
                placeholder="Quantity"
                keyboardType="number-pad"
                value={quantity?.toString()}
                onChangeText={setQuantity}
            />
            <HapticButton 
                title="Add to Cart"
                onPress={() => {
                    router.navigate("/")
                    console.log("Add to Cart");
                }}
            />
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.white
    },
    contentContainer: {
        paddingTop: 24,
        paddingHorizontal: 24,
        paddingBottom: 80
    },
    input: {
        borderWidth: 1,
        borderColor: theme.gray,
        padding: 12,
        borderRadius: 6,
        marginBottom: 24,
        fontSize: 16
    },
    label: {
        fontSize: 18,
        marginBottom: 8
    },
    center: {
        alignItems: 'center'
    }
})