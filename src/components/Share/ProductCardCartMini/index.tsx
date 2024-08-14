import React from 'react'
import styles from "./ProductCardCartMini.module.css"
import { CartProductType } from '@/types'
import Image from 'next/image'
import useShoppingCart from '@/hooks/global-state/useShoppingCart'
import { formatPrice } from '@/services/format'
import QuantityOptions from '../QuantityOptions'
import { colors } from "helebba-sdk"

interface ProductCardCartType {
    product: CartProductType
}


function ProductCardCartMini({product}:ProductCardCartType) {
    const {images, name, price, quantity, id, kind, variantSelected}= product;

    if (variantSelected && variantSelected){
        const colorOfVariant = colors.find((color) => color.value == variantSelected.color)
    }


    const {increaseQuantity, decreaseQuantity, removeProduct} = useShoppingCart();
  return (
    <div className={styles.body}>
        <Image className={styles.img} src={images[0]} alt={name} width={50} height={50}/>
        <div className={styles.main}>
            <h2 className={styles.name}>{name}</h2>
            <h3 className={styles.price}>
            { variantSelected && variantSelected?.price !== 0 ?
                `$/ ${formatPrice(variantSelected?.price) }` :
                `$/ ${formatPrice(price)}`
                }
            </h3>
            <h3 className={styles.variant}>
                {kind ==="simple" && kind.toLocaleLowerCase()}
                {variantSelected && variantSelected.size.toLocaleLowerCase()}
                {variantSelected?.size && variantSelected?.color ? " / " : ""}
                {variantSelected?.color && `${colors.find((color) => color.value == variantSelected.color)?.name}`}
            </h3>
            <div className={styles.quantity}>
                {/* <div className={styles.quantity_opcions}>
                <button 
                className={styles.quantity_opcions__button}
                onClick={() => decreaseQuantity(product)}
                >-</button>
                {quantity}
                <button 
                className={styles.quantity_opcions__button}
                onClick={() => increaseQuantity(product)}
                >+</button>
                </div> */}
                <QuantityOptions 
                quantity={quantity}
                increaseAction={() => increaseQuantity(product)}
                decreaseAction={() => decreaseQuantity(product)}/>
                <button 
                className={styles.remove}
                onClick={() => removeProduct(product)}>Quitar</button>
            </div>
        </div>
    </div>
  )
}

export default ProductCardCartMini