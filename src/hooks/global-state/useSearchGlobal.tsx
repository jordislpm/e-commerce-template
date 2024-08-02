import { SearchStore } from "@/store/searchStore";

const useSearchStore  = () => {
    const productsListSearch = SearchStore((state) => state.productsListSearch);
    const productSearchedTitle = SearchStore((state) => state.productSearchedTitle);
    const setProductSearchedTitle = SearchStore((state) => state.setProductSearchedTitle);
    const filterProductsListSearch = SearchStore((state) => state.filterProductsListSearch);
  
    return {
      productsListSearch,
      productSearchedTitle,
      setProductSearchedTitle,
      filterProductsListSearch,
    };
  };

export default useSearchStore;