import { GlobalStateType } from "@/types";
import { Product } from "helebba-sdk";
import { create } from 'zustand'
import { persist } from "zustand/middleware";

export const GlobalStore = create<GlobalStateType>()(
   persist( (set) => ({
      isSearchOpen: false,
      isMenuOpen: false,
      isCartOpen: false,
      showProductDetails: false,
      slugForGetProduct: "",
      localAllProductsList: null,
      setLocalAllProductsList : (newProductList: Product[]) => set({ localAllProductsList: newProductList}),
      setSlugForGetProduct: (slug: string) => set({ slugForGetProduct: slug }),
      toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
      toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
      toggleSearch: () => set((state) => ({ isSearchOpen: !state.isSearchOpen})),
      toggleShowProductDetails: () => set((state) => ({ showProductDetails: !state.showProductDetails })),
    }),
    {
      name: 'algodina-store', 
      getStorage: () => localStorage, 
    }
  )
);