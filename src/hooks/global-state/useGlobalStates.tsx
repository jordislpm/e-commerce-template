import { GlobalStore } from "@/store/globalStore";

const useGlobalStores = () => {
    const isMenuOpen = GlobalStore((state) => state.isMenuOpen);
    const isCartOpen = GlobalStore((state) => state.isCartOpen);
    const showProductDetails = GlobalStore((state) => state.showProductDetails);
    const productForShowDetails = GlobalStore((state) => state.productForShowDetails);
    const slugForGetProduct = GlobalStore((state) => state.slugForGetProduct);
    const setSlugForGetProduct = GlobalStore((state) => state.setSlugForGetProduct);
    const setProductForShowDetails = GlobalStore((state) => state.setProductForShowDetails);
    const toggleMenu = GlobalStore((state) => state.toggleMenu);
    const toggleCart = GlobalStore((state) => state.toggleCart);
    const toggleShowProductDetails= GlobalStore((state) => state.toggleShowProductDetails);
   
    return {
      isMenuOpen,
      isCartOpen,
      showProductDetails,
      productForShowDetails,
      slugForGetProduct,
      setSlugForGetProduct,
      setProductForShowDetails,
      toggleMenu,
      toggleCart,
      toggleShowProductDetails,
    };
  };
  
  export default useGlobalStores;