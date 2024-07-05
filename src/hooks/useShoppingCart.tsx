import { useCartStore } from "@/store/cart"

export const useShoppingCart =()=>{
    
    const shoppingCart= useCartStore((state)=>state);
    return shoppingCart;
}