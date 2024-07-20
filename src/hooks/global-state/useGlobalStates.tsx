import { GlobalStore } from "@/store/globalStore";

const useGlobalStores = () => {
    const isMenuOpen = GlobalStore((state) => state.isMenuOpen);
    const isCartOpen = GlobalStore((state) => state.isCartOpen);
    const toggleMenu = GlobalStore((state) => state.toggleMenu);
    const toggleCart = GlobalStore((state) => state.toggleCart);
  
    return {
      isMenuOpen,
      isCartOpen,
      toggleMenu,
      toggleCart,
    };
  };
  
  export default useGlobalStores;