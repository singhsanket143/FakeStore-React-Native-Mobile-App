import { theme } from "@/app/theme";
import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native"

type ProductProp = {
    id: number;
    title: string;
    price: number;
    image: string;
}

export const ProductCard = ({ id, title, image, price }: ProductProp) => {
    return (
        <Link href={`/AddProductToCart?id=${id}`}>

            <View style={styles.card}>
                <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
                <View style={styles.details}>
                    <Text numberOfLines={1} style={styles.productName}>
                        {title}
                    </Text>
                    <Text style={styles.price}>
                        {price}
                    </Text>
                </View>
            
            </View>
        </Link>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        shadowColor: theme.black,
        backgroundColor: theme.white,
        borderRadius: 6,
        padding: 12,
        marginBottom: 12,
        elevation: 4,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84
    },
    details: {
        padding: 14,
        justifyContent: 'center'
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 6,
        width: 250
    },
    price: {
        color: theme.gray,
    }
})