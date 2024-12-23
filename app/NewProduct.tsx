import { StyleSheet, ScrollView, Text, View } from "react-native";
import { theme } from "./theme";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductCard } from "@/components/ProductCard";

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

export default function NewProduct() {

    const [productList, setProductList] = useState<Product[]>([]);

    async function downloadProducts() {
        const response = await axios.get('https://fakestoreapi.com/products');
        console.log(response);
        setProductList(response.data);
    }

    useEffect(() => {
        if(productList.length === 0)
            downloadProducts();
    }, []);

    return (
        <ScrollView 
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
        >
            {productList.map((product) => (
                <ProductCard key={product.id} title={product.title} price={product.price} image={product.image} id={product.id} />
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.white
    },
    contentContainer: {
        padding: 12
    }
})