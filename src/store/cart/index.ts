import { create } from "zustand";
import { persist } from "zustand/middleware";
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
        const productVariantInCart = cart.some((item) => {
          if (product.variantSelected && item.variantSelected) {
            return item.variantSelected.variantId === product.variantSelected.variantId
          }
        });


        if (!productInCart && !product.variantSelected) {
          set({ cart: [product, ...cart] });
          return;
        } else if (productInCart && !product.variantSelected) {
          const updatedCartProducts = cart.map((item) => {
            if (item.id === product.id) {

              if (item.quantity < item.stock) {
                // a la espera de otro producto sin variante para probar
                return { ...item, quantity: item.quantity + product.quantity };
              } else {
                alert("Haz alcanzado el limite de unidades disponibles en nuestro stock.")
              }
            }
            return item;
          });
          set({ cart: updatedCartProducts });
          return;
        }

        if (!productInCart && product.variantSelected) {
          if (!productVariantInCart) {
            set({ cart: [product, ...cart] });
            return;
          }
        } else if (productInCart && product.variantSelected) {
          if (!productVariantInCart) {
            set({ cart: [product, ...cart] });

            return;
          } else if (productVariantInCart) {
            const updatedCartProducts = cart.map((item) => {
              if (item.variantSelected?.variantId === product.variantSelected?.variantId) {
                if (item.variantSelected && item.quantity < item.variantSelected.stock){
                  return { ...item, quantity: item.quantity + product.quantity };
                } else{
                  alert("Haz alcanzado el limite de unidades disponibles en nuestro stock.")
                }
              }
              return item;
            });

            set({ cart: updatedCartProducts });

          }
        }
      },
      removeProduct: (product: CartProductType) => {

        const { cart } = get();

        if (product.variantSelected) {
          const updatedCartProducts = cart.filter((item) => item?.variantSelected?.variantId !== product.variantSelected?.variantId);
          set({ cart: updatedCartProducts });
        } else {
          const updatedCartProducts = cart.filter((item) => item.id !== product.id);
          set({ cart: updatedCartProducts });
        }



      },
      increaseQuantity: (product: CartProductType) => {
        const { cart } = get();
        const updatedCartProducts = cart.map((item) => {

          if (product.variantSelected) {
            if (item.variantSelected?.variantId === product.variantSelected?.variantId) {
              if (item.variantSelected?.stock) {
                if (item.quantity < item.variantSelected.stock) {
                  return { ...item, quantity: item.quantity + 1 };
                } else {
                  alert("Haz alcanzado el limite de unidades disponibles en nuestro stock.")
                }
              } else if (item.stock) {
                if (item.quantity < item.stock) {
                  return { ...item, quantity: item.quantity + 1 };
                } else {
                  alert("Haz alcanzado el limite de unidades disponibles en nuestro stock.")
                }

              }

            }
            return item;

          } else {
            if (item.id === product.id) {
              if (item.variantSelected?.stock) {
                if (item.quantity < item.variantSelected?.stock) {
                  return { ...item, quantity: item.quantity + 1 };
                } else {
                  alert("Haz alcanzado el limite de unidades disponibles en nuestro stock.")
                }
              } else if (item.stock) {
                if (item.quantity < item.stock) {
                  return { ...item, quantity: item.quantity + 1 };
                } else {
                  alert("Haz alcanzado el limite de unidades disponibles en nuestro stock.")
                }
              }
            }
            return item;
          }
        });
        set({ cart: updatedCartProducts });
      },
      decreaseQuantity: (product: CartProductType) => {
        const { cart } = get();


        const updatedCartProducts = cart.map((item) => {
          if (product.variantSelected) {
            if (item.variantSelected?.variantId === product.variantSelected?.variantId && item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            }
            return item;
          } else {
            if (item.id === product.id && item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            }
            return item;
          }

        });
        set({ cart: updatedCartProducts });
      },
    }),
    { name: 'algodonia-shopping-cart' },
  ),
);