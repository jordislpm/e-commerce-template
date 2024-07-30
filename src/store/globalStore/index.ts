import { CartProductType, GlobalStateType } from "@/types";
import { create } from 'zustand'

export const GlobalStore = create<GlobalStateType>()(
    (set) => ({
      isMenuOpen: false,
      isCartOpen: false,
      showProductDetails: false,
      productForShowDetails: null,
      slugForGetProduct: "",
      setSlugForGetProduct: (slug: string) => set({ slugForGetProduct: slug }),
      setProductForShowDetails: (product: CartProductType| null) => set({ productForShowDetails: product }),
      toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
      toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
      toggleShowProductDetails: () => set((state) => ({ showProductDetails: !state.showProductDetails })),
    })
);