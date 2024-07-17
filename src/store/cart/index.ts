import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "helebba-sdk";
import { CartProductType, CartStateType } from "@/types";



export const useCartStore = create<CartStateType>()(
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
    }),
    { name: 'algodonia-shopping-cart' },
  ),
);