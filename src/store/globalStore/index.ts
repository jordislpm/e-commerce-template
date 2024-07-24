import { CartProductType, GlobalStateType } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";



export const GlobalStore = create<GlobalStateType>()(
  persist(
    (set) => ({
      isMenuOpen: false,
      isCartOpen: false,
      showProductDetails: false,
      productForShowDetails: null,
      setProductForShowDetails: (product: CartProductType) => set({ productForShowDetails: product }),
      toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
      toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
      toggleShowProductDetails: () => set((state) => ({ showProductDetails: !state.showProductDetails })),
    }),
    {
      name: "global-store", 
      getStorage: () => localStorage, 
    }
  )
);