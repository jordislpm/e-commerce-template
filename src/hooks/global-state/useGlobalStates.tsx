import { GlobalStore } from "@/store/globalStore";

const useGlobalStores = () => {
    const isMenuOpen = GlobalStore((state) => state.isMenuOpen);
    const isCartOpen = GlobalStore((state) => state.isCartOpen);
    const showProductDetails = GlobalStore((state) => state.showProductDetails);
    const toggleMenu = GlobalStore((state) => state.toggleMenu);
    const toggleCart = GlobalStore((state) => state.toggleCart);
    const toggleShowProductDetails= GlobalStore((state) => state.toggleShowProductDetails);
  
    return {
      isMenuOpen,
      isCartOpen,
      showProductDetails,
      toggleMenu,
      toggleCart,
      toggleShowProductDetails,
    };
  };
  
  export default useGlobalStores;