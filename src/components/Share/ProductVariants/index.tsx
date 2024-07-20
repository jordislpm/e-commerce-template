"use client";
import React, { useEffect, useState } from 'react';
import { ProductVariant } from 'helebba-sdk';
import useVariantsSelected from '@/hooks/global-state/useVariantsSelected';
import styles from './ProductVariants.module.css';

interface ProductVariantsProps {
  variants: ProductVariant[];
}

function ProductVariants({ variants }: ProductVariantsProps) {
  const { variantSelected, setVariantSelected, isVariantAvailable, setIsVariantAvailable } = useVariantsSelected();
  const [availableColors, setAvailableColors] = useState<string[]>([]);

  useEffect(() => {
    for (const variant of variants) {
      if (variant.color) {
        setVariantSelected({ color: variant.color });
        break;
      } else{
        setIsVariantAvailable(true);
      }
    }
    for (const variant of variants) {
      if (variant.size) {
        setVariantSelected({ size: variant.size });
        break;
      }
    }

    
  }, [variants, setVariantSelected]);

  useEffect(() => {
    const availableColorsForSize = variants
      .filter(variant => variant.size === variantSelected.size)
      .map(variant => variant.color);
    setAvailableColors(availableColorsForSize);
  }, [variantSelected.size, variants]);

  useEffect(() => {
    if(variants[0].color){
    const availability = availableColors.includes(variantSelected.color);
    setIsVariantAvailable(availability);
}
  }, [availableColors, variantSelected.color, setIsVariantAvailable]);


  const changeSize = (size: string) => {
    setVariantSelected({ size }); 
  };

  const changeColor = (color: string) => {
    setVariantSelected({ color }); 
  };

  const colorsUnique = variants.filter((value, index, self) =>
    index === self.findIndex((t) => t.color === value.color)
  );

  const sizesUnique = variants.filter((value, index, self) =>
    index === self.findIndex((t) => t.size === value.size)
  );

  return (
    <div className={styles.body}>
      {variants.some((variant) => variant.size) && (
        <div className={styles.details_variants}>
          Tamaño:
          <div className={styles.sizes}>
            {sizesUnique.map((variant) => (
              <div
                key={variant.size}
                className={`${styles.size} ${variant.size === variantSelected.size ? styles.size_selected : ''}`}
                onClick={() => changeSize(variant.size)}
              >
                {variant.size.charAt(0).toUpperCase() + variant.size.slice(1)}
              </div>
            ))}
          </div>
        </div>
      )}
      {variants.some((variant) => variant.color) && (
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
                ${variant.color === variantSelected.color ? styles.color_selected : ''}`} 
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