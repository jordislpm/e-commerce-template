import React from 'react'
import { ProductVariant } from "helebba-sdk";
import styles from "./ProductVariants.module.css"


interface ProductVariantsProps {
    variants: ProductVariant[];
}

function ProductVariants({ variants }: ProductVariantsProps) {


    const colorsUnique = variants.filter((value, index, self) =>
        index === self.findIndex((t) => (
          t.color === value.color
        ))
      );

    return (
        <div className={styles.body}>
            {variants.some((variant) => (variant.size)) &&
                <div className={styles.details_variants}>
                    Tamaño:
                    <div className={styles.sizes}>
                        {variants.map((variant) => (
                            <div className={styles.size}>
                                {variant.size.charAt(0).toUpperCase() + variant.size.slice(1)}
                            </div>
                        ))}
                    </div>
                </div>}
            {variants.some((variant) => (variant.color)) &&
                <div className={styles.details_variants}>
                    Color:
                    <div className={styles.sizes}>
                        {colorsUnique.map((variant) => (
                            <div className={styles.color} style={{backgroundColor: variant.color}}>  
                            </div>
                        ))}
                    </div>
                </div>}
        </div>
    )
}

export default ProductVariants