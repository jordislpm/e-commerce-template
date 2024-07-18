import React from 'react'
import styles from "./ProductCardCart.module.css"
import { CartProductType } from '@/types'
import Image from 'next/image'
import useShoppingCart from '@/hooks/useShoppingCart'

interface ProductCardCartType {
    product: CartProductType
}


function ProductCardCart({product}:ProductCardCartType) {
    const {images, name, price, quantity, id}= product;

    const {increaseQuantity, decreaseQuantity, removeProduct} = useShoppingCart();
  return (
    <div className={styles.body}>
        <Image className={styles.img} src={images[0]} alt={name} width={50} height={50}/>
        <div className={styles.main}>
            <h2 className={styles.name}>{name}</h2>
            <h3 className={styles.price}>$/ {price}</h3>
            <h3 className={styles.variant}>Medium / Blanco</h3>
            <div className={styles.quantity}>
                <div className={styles.quantity_opcions}>
                <button 
                className={styles.quantity_opcions__button}
                onClick={() => decreaseQuantity(id)}
                >-</button>
                {quantity}
                <button 
                className={styles.quantity_opcions__button}
                onClick={() => increaseQuantity(id)}
                >+</button>
                </div>
                <button 
                className={styles.remove}
                onClick={() => removeProduct(id)}>Quitar</button>
            </div>
        </div>
    </div>
  )
}

export default ProductCardCart