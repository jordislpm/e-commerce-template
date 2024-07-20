import variantSelectedGlobal from "@/store/variants";

const useVariantsSelected = () => {
  const variantSelected = variantSelectedGlobal((state) => state.variantSelected);
  const isVariantAvailable = variantSelectedGlobal((state) => state.isVariantAvailable);
  const setVariantSelected = variantSelectedGlobal((state) => state.setVariantSelected);
  const setIsVariantAvailable = variantSelectedGlobal((state) => state.setIsVariantAvailable);

  return {
    variantSelected,
    isVariantAvailable,
    setIsVariantAvailable,
    setVariantSelected
  };
};

export default useVariantsSelected;

