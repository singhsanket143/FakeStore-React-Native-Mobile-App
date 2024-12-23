import { ProductCard } from "@/components/ProductCard";
import { Text, View } from "react-native";

export default function HomeScreen() {
    return (
        <View>
            <Text>Home</Text>
            <ProductCard 
                id={1}
                title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
                price={100}
                image={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
            />
            <ProductCard 
                id={1}
                title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
                price={100}
                image={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
            />
            <ProductCard 
                id={1}
                title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
                price={100}
                image={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
            />
            <ProductCard 
                id={1}
                title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
                price={100}
                image={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
            />
        </View>
    )
}