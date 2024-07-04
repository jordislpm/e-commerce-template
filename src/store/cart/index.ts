import { ProductProps, CouponProps } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";





interface State {
    cart: ProductProps[];
    coupon: CouponProps;
    getTotalItems: () => number;
    getTotalValueItems: () => number;
    addProductToCart: (product: ProductProps) => void;
    removeProduct: (id: string) => void;
    addCoupon: (coupon: CouponProps) => void;
}

export const useCartStore = create<State>()(
    persist(
        (set, get) => ({
            cart: [
            ],
            coupon: {
                name: '',
                value: 0,
            },
            addCoupon: (myCoupon: CouponProps) => {
                set({ coupon: { name: myCoupon.name, value: myCoupon.value } });
            },
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
            addProductToCart: (product: ProductProps) => {
                const { cart } = get();

                const productInCart = cart.some((item) => item.id == product.id);

                if (!productInCart) {
                    set({ cart: [...cart, product] });
                    return;
                }

                const updatedCartProducts = cart.map((item) => {
                    if (item.id == product.id) {
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
