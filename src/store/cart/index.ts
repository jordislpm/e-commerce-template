import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "helebba-sdk";
import { CartProductType, CartStateType } from "@/types";

export const cartStore = create<CartStateType>()(
  persist(
    (set, get) => ({
      cart: [],
      getTotalItems: () => {
        const { cart } = get();
        return cart.reduce((total, item) => total + item.quantity, 0);
      },
      getTotalValueItems: () => {
        const { cart } = get();
        return cart.reduce(
          (total, item) => total + item.price * item.quantity,
          0,
        );
      },
      addProductToCart: (product: CartProductType) => {
        const { cart } = get();
        const productInCart = cart.some((item) => item.id === product.id);

        if (!productInCart) {
          set({ cart: [...cart, product] });
          return;
        }

        const updatedCartProducts = cart.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + product.quantity };
          }
          return item;
        });

        set({ cart: updatedCartProducts });
      },
      removeProduct: (id: string) => {
        const { cart } = get();
        const updatedCartProducts = cart.filter((item) => item.id !== id);
        set({ cart: updatedCartProducts });
      },
      increaseQuantity: (id: string) => {
        const { cart } = get();
        const updatedCartProducts = cart.map((item) => {
          if (item.id === id) {
            if(item.quantity < item.stock){
                return { ...item, quantity: item.quantity + 1 };
            } else{
             alert("Haz alcanzado el limite de unidades disponibles en nuestro stock.")
            }
           
          }
          return item;
        });
        set({ cart: updatedCartProducts });
      },
      decreaseQuantity: (id: string) => {
        const { cart } = get();
        const updatedCartProducts = cart.map((item) => {
          if (item.id === id && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
        set({ cart: updatedCartProducts });
      },
    }),
    { name: 'algodonia-shopping-cart' },
  ),
);