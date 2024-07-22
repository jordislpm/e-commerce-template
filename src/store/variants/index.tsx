import create from 'zustand';
import { VariantSelectedGlobaType, VariantSelectedType } from '@/types';

const variantSelectedGlobal = create<VariantSelectedGlobaType>((set) => ({
  theVariantSelected: {
    color: "",
    size: "",
    haveColor:false,
    haveSize: false,
  },
  isVariantAvailable: true,
  setTheVariantSelected: (variant: Partial<VariantSelectedType>) => set((state) => ({
    theVariantSelected: {
      ...state.theVariantSelected,
      ...variant
    }
  })),
  setIsVariantAvailable: (availability) => set({ isVariantAvailable: availability })
}));

export default variantSelectedGlobal;