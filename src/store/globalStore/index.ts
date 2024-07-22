import { GlobalStateType } from "@/types";
import { create } from "zustand";



export const GlobalStore = create<GlobalStateType>((set) => ({
  isMenuOpen: false,
  isCartOpen: false,
  showProductDetails: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  toggleShowProductDetails: () => set((state) => ({ showProductDetails: !state.showProductDetails }))
}));