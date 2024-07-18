import { cartStore } from "@/store/cart";

const useShoppingCart = () => {
  const cart = cartStore((state) => state.cart);
  const getTotalItems = cartStore((state) => state.getTotalItems);
  const getTotalValueItems = cartStore((state) => state.getTotalValueItems);
  const addProductToCart = cartStore((state) => state.addProductToCart);
  const removeProduct = cartStore((state) => state.removeProduct);
  const increaseQuantity = cartStore((state) => state.increaseQuantity);
  const decreaseQuantity = cartStore((state) => state.decreaseQuantity);

  return {
    cart,
    getTotalItems,
    getTotalValueItems,
    addProductToCart,
    removeProduct,
    increaseQuantity,
    decreaseQuantity,
  };
};

export default useShoppingCart;