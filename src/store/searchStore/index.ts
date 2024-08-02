import { create } from 'zustand'
import { SearchStoreType } from '@/types';
import { normalizeString } from '@/services/format';
import { Product, } from "helebba-sdk";

export const SearchStore = create<SearchStoreType>((set) => ({
  productsListSearch: null,
  productSearchedTitle: "",
  

  setProductSearchedTitle: (text: string) => {
    set({ productSearchedTitle: text });
  },


  filterProductsListSearch: (word: string, list: Product[]) => {
    const normalizedSearchTerm = word.split(" ").map(normalizeString);
    
    const filteredProducts = list.filter((product) => {
      const normalizedProductName = product.name.split(" ").map(normalizeString);
      return normalizedSearchTerm.every(normalizedSearchTermWord => 
        normalizedProductName.some(normalizedProductNameWord =>
          normalizedProductNameWord.includes(normalizedSearchTermWord)
        )
      );
    });

    set({
      productsListSearch: filteredProducts,
      productSearchedTitle: word
    });
  },
}));