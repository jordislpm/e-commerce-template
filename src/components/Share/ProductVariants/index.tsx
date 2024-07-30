"use client";
import React, { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import { ProductVariant } from 'helebba-sdk';
import useVariantsSelected from '@/hooks/global-state/useVariantsSelected';
import styles from './ProductVariants.module.css';

interface ProductVariantsProps {
  variants: ProductVariant[];
}

const ProductVariants = ({ variants }: ProductVariantsProps) => {
  const {
    theVariantSelected,
    setTheVariantSelected,
    isVariantAvailable,
    setIsVariantAvailable
  } = useVariantsSelected();

  const [availableColors, setAvailableColors] = useState<string[]>([]);
  const variantsRef = useRef<ProductVariant[]>(variants);

  const initialColor = useMemo(() => {
    for (const variant of variantsRef.current) {
      if (variant.color && variant.color !== "") {
        return { color: variant.color, haveColor: true };
      }
    }
    return { color: "", haveColor: false };
  }, []);

  const initialSize = useMemo(() => {
    for (const variant of variantsRef.current) {
      if (variant.size && variant.size !== "") {
        return { size: variant.size, haveSize: true };
      }
    }
    return { size: "", haveSize: false };
  }, []);

  useEffect(() => {
    setTheVariantSelected(initialColor);
    setTheVariantSelected(initialSize);
    setIsVariantAvailable(initialColor.haveColor || initialSize.haveSize);

    console.log("se esta cambiando color y size inicial")
  }, [initialColor, initialSize, setTheVariantSelected, setIsVariantAvailable]);

  useEffect(() => {
    if (theVariantSelected.haveSize) {
      const availableColorsForSize = variantsRef.current
        .filter(variant => variant.size === theVariantSelected.size)
        .map(variant => variant.color);
      setAvailableColors(availableColorsForSize);
    } else {
      const availableColorsForSize = variantsRef.current
        .map(variant => variant.color);
      setAvailableColors(availableColorsForSize);
    }
  }, [theVariantSelected]);

  useEffect(() => {
    if (variantsRef.current[0]?.color) {
      const availability = availableColors.includes(theVariantSelected.color);
      setIsVariantAvailable(availability);
    }
  }, [availableColors, theVariantSelected.color, setIsVariantAvailable]);

  const changeSize = useCallback((size: string) => {
    setTheVariantSelected({ size });
  }, [setTheVariantSelected]);

  const changeColor = useCallback((color: string) => {
    setTheVariantSelected({ color });
  }, [setTheVariantSelected]);

  const colorsUnique = useMemo(() =>
    variantsRef.current.filter((value, index, self) =>
      index === self.findIndex((t) => t.color === value.color)
    ), []);

  const sizesUnique = useMemo(() =>
    variantsRef.current.filter((value, index, self) =>
      index === self.findIndex((t) => t.size === value.size)
    ), []);
  return (
    <div className={styles.body}>
      {variantsRef.current.some((variant) => variant.size) && (
        <div className={styles.details_variants}>
          Tamaño:
          <div className={styles.sizes}>
            {sizesUnique.map((variant) => (
              <div
                key={variant.size}
                className={`${styles.size} ${variant.size === theVariantSelected.size ? styles.size_selected : ''}`}
                onClick={() => changeSize(variant.size)}
              >
                {variant.size.charAt(0).toUpperCase() + variant.size.slice(1)}
              </div>
            ))}
          </div>
        </div>
      )}
      {variantsRef.current.some((variant) => variant.color) && (
        <div className={styles.details_variants}>
          Color:
          <div className={styles.sizes}>
            {colorsUnique.map((variant) => (
              <div
                key={variant.color}
                onClick={() => changeColor(variant.color)}
                className={`
                ${styles.color} 
                ${!availableColors.includes(variant.color) ? styles.no_disponible : ''} 
                ${variant.color === theVariantSelected.color ? styles.color_selected : ''}`} 
                style={{ backgroundColor: variant.color }}
              ></div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductVariants;