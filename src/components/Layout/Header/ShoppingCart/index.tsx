"use client"
import React, { useState } from 'react'
import { RiShoppingCartLine } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import styles from "./ShoppingCart.module.css"
import { useGlobalStore } from '@/store/globalStore';
import { useCartStore } from '@/store/cart';
import ProductCardCart from '@/components/Share/ProductCardCart';
import ButtonPrimary from '@/components/Share/ButtonPrimary';



function ShoppingCart() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isCartOpen = useGlobalStore((state) => state.isCartOpen);
  const toggleCart = useGlobalStore((state) => state.toggleCart);
  const cart = useCartStore((state) => state.cart);

  return (
    <div>
      <div
        className={`${styles.overlay} ${isCartOpen ? styles.overlayActive : ''}`}
        onClick={toggleCart}>
      </div>
      <div className={`${styles.cart} ${isCartOpen ? styles.cartActive : styles.cartDesactive}`}>
        <div className={`${styles.header} ${styles.section}`}>
          CARRITO
          <IoCloseSharp onClick={toggleCart} size={25} />
        </div>
        <div className={styles.body}>
          {cart.length === 0 ?
            <div className={styles.vacio}>
              EL CARRITO ESTA VACIO
            </div>
            :
            <section className={styles.with_products}>
                <div className={`${styles.products_list} ${styles.section}`}>
                {cart.map((product) => (
                <ProductCardCart product={product} />
              ))}
                </div>
                <div className={`${styles.offer} ${styles.section}`}>

                </div>
                <div className={styles.see_cart}>
              <ButtonPrimary title='VER CARRITO'/>
              </div>
            </section>
          }

        </div>
      </div>

      <RiShoppingCartLine size={25} onClick={toggleCart} />
    </div>
  )
}

export default ShoppingCart