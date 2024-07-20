import create from 'zustand';
import { VariantSelectedGlobaType, VariantSelectedType } from '@/types';

const variantSelectedGlobal = create<VariantSelectedGlobaType>((set) => ({
  variantSelected: {
    color: "",
    size: ""
  },
  isVariantAvailable: true,
  setVariantSelected: (variant: Partial<VariantSelectedType>) => set((state) => ({
    variantSelected: {
      ...state.variantSelected,
      ...variant
    }
  })),
  setIsVariantAvailable: (availability) => set({ isVariantAvailable: availability })
}));

export default variantSelectedGlobal;