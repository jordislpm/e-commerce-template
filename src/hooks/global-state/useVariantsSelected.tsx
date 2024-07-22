import variantSelectedGlobal from "@/store/variants";

const useVariantsSelected = () => {
  const theVariantSelected = variantSelectedGlobal((state) => state.theVariantSelected);
  const isVariantAvailable = variantSelectedGlobal((state) => state.isVariantAvailable);
  const setTheVariantSelected = variantSelectedGlobal((state) => state.setTheVariantSelected);
  const setIsVariantAvailable = variantSelectedGlobal((state) => state.setIsVariantAvailable);

  return {
    theVariantSelected,
    isVariantAvailable,
    setIsVariantAvailable,
    setTheVariantSelected
  };
};

export default useVariantsSelected;

