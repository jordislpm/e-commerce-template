"use client"
import React, { useState } from 'react'
import styles from "./CartPrincipal.module.css"
import { MdOutlineCloud } from 'react-icons/md'

import useShoppingCart from '@/hooks/global-state/useShoppingCart';
import ProductCardCart from '@/components/Share/ProductCardCart';
import { formatPrice } from '@/services/format';
import Link from 'next/link';

function CartPrincipal() {
    const { cart, getTotalValueItems } = useShoppingCart();
 
      
        const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
            console.log(event.target.value)
 
        };

    return (
        <div className={styles.body}>
            <h3 className={styles.p_hero}>
                <MdOutlineCloud /> ENVIO REGULAR: LIMA (2 - 4 DIAS) Y PROVINCIA (5-8 HABILES) <MdOutlineCloud />
            </h3>
            <h3 className={styles.p_hero}>
                <MdOutlineCloud /> RETIRO EN TIENDA: 5-7 HABILES (RECIBIRAS CORREO PARA RECOJO) <MdOutlineCloud />
            </h3>
            <h2 className={`title_section ${styles.h2}`}>
                CARRITO
            </h2>
            <div className={`${styles.products_list} ${styles.section}`}>
            {cart.map((product) => (
                  <React.Fragment key={
                    product.variantSelected ?
                      `${product.id}-${product.variantSelected.variantId}`
                      :
                      product.id
                  }>
                    <ProductCardCart product={product} />
                  </React.Fragment>
                ))}
            </div>
            <p className={styles.add_note}>Añadir nota al pedido</p>
            <textarea
             className={styles.note_input}
             onChange={handleChange}
             placeholder='¿Como podemos ayudarte?'/>
            <h3 className={styles.total_price}>Total: S/ {formatPrice(getTotalValueItems())}</h3>
            <p className={styles.shipping_text}
            >Impuestos incluidos. Los <Link href="">gastos de envio</Link> se calculan en la pantalla de pago</p>
        </div>
    )
}

export default CartPrincipal