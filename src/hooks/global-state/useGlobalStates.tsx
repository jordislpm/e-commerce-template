import { GlobalStore } from "@/store/globalStore";

const useGlobalStores = () => {
  const isMenuOpen = GlobalStore((state) => state.isMenuOpen);
  const isSearchOpen = GlobalStore((state) => state.isSearchOpen);
  const isCartOpen = GlobalStore((state) => state.isCartOpen);
  const showProductDetails = GlobalStore((state) => state.showProductDetails);
  const localAllProductsList = GlobalStore((state) => state.localAllProductsList);
  const slugForGetProduct = GlobalStore((state) => state.slugForGetProduct);
  const setSlugForGetProduct = GlobalStore((state) => state.setSlugForGetProduct);
  const setLocalAllProductsList = GlobalStore((state) => state.setLocalAllProductsList);
  const toggleMenu = GlobalStore((state) => state.toggleMenu);
  const toggleCart = GlobalStore((state) => state.toggleCart);
  const toggleSearch = GlobalStore((state) => state.toggleSearch);
  const toggleShowProductDetails = GlobalStore((state) => state.toggleShowProductDetails);

  return {
    isMenuOpen,
    isCartOpen,
    isSearchOpen,
    showProductDetails,
    localAllProductsList,
    slugForGetProduct,
    setSlugForGetProduct,
    setLocalAllProductsList,
    toggleMenu,
    toggleCart,
    toggleSearch,
    toggleShowProductDetails,
  };
};

export default useGlobalStores;