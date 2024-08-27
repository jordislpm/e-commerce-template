import { globalSearchStore} from "../../store/SearchStore"
const useSearchStore  = () => {
    const productsListSearch = globalSearchStore((state) => state.productsListSearch);
    const productSearchedTitle = globalSearchStore((state) => state.productSearchedTitle);
    const setProductSearchedTitle = globalSearchStore((state) => state.setProductSearchedTitle);
    const filterProductsListSearch = globalSearchStore((state) => state.filterProductsListSearch);
  
    return {
      productsListSearch,
      productSearchedTitle,
      setProductSearchedTitle,
      filterProductsListSearch,
    };
  };

export default useSearchStore;