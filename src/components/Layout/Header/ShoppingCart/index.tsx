"use client"
import React, { useState } from 'react'
import { RiShoppingCartLine } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import styles from "./ShoppingCart.module.css"
import { useShoppingCart } from '@/hooks/useShoppingCart';
import { useProducts } from '@/hooks/useProducts';

function ShoppingCart() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const shoppingCart = useShoppingCart();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div>
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayActive : ''}`}
        onClick={toggleModal}>
      </div>
      <div className={`${styles.cart} ${isOpen ? styles.cartActive : styles.cartDesactive}`}>
        <div className={styles.header}>
          CARRITO
          <IoCloseSharp onClick={toggleModal} size={25}  />
        </div>
        <div className={styles.body}> 
          {shoppingCart.cart.length === 0 ?
          <div className={styles.vacio}>
          EL CARRITO ESTA VACIO
        </div>
         :
         <div className={styles.vacio}>
         EL CARRITO no esta VACIO
       </div>
        }
           
        </div>
      </div>

      <RiShoppingCartLine size={25} onClick={toggleModal} />
    </div>
  )
}

export default ShoppingCart