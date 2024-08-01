import { GlobalStore } from "@/store/globalStore";

const useGlobalStores = () => {
  const isMenuOpen = GlobalStore((state) => state.isMenuOpen);
  const isCartOpen = GlobalStore((state) => state.isCartOpen);
  const showProductDetails = GlobalStore((state) => state.showProductDetails);
  const localAllProductsList = GlobalStore((state) => state.localAllProductsList);
  const slugForGetProduct = GlobalStore((state) => state.slugForGetProduct);
  const setSlugForGetProduct = GlobalStore((state) => state.setSlugForGetProduct);
  const setLocalAllProductsList = GlobalStore((state) => state.setLocalAllProductsList);
  const toggleMenu = GlobalStore((state) => state.toggleMenu);
  const toggleCart = GlobalStore((state) => state.toggleCart);
  const toggleShowProductDetails = GlobalStore((state) => state.toggleShowProductDetails);

  return {
    isMenuOpen,
    isCartOpen,
    showProductDetails,
    localAllProductsList,
    slugForGetProduct,
    setSlugForGetProduct,
    setLocalAllProductsList,
    toggleMenu,
    toggleCart,
    toggleShowProductDetails,
  };
};

export default useGlobalStores;