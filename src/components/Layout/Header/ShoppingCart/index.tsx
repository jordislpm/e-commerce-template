"use client"
import React, { useEffect, useState } from 'react'
import { RiShoppingCartLine } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import styles from "./ShoppingCart.module.css"
import ProductCardCart from '@/components/Share/ProductCardCartMini';
import ButtonPrimary from '@/components/Share/ButtonPrimary';
import useShoppingCart from '@/hooks/global-state/useShoppingCart';
import useGlobalStores from '@/hooks/global-state/useGlobalStates';
import SlidePanelLeft from '@/components/Share/SlidePanelLeft';
import OverlayComponent from '@/components/Share/OverlayComponent';
import ProductCardCartMini from '@/components/Share/ProductCardCartMini';
import { usePathname } from 'next/navigation';




function ShoppingCart() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { isCartOpen, toggleCart } = useGlobalStores()
  const { cart } = useShoppingCart();
  const pathname = usePathname();


  useEffect(() => {
    if (isCartOpen) {
      // Desactiva el scroll en el body
      document.body.style.position = 'fixed';
      document.body.style.top = '0';
      document.body.style.left = '0';
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // Restaura el scroll en el body
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    }

    // Limpia los estilos al desmontar el componente
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [isCartOpen]);

  const clickInShoppingCart = ()=>{
    if (pathname === "/cart"){
      return
    }
    toggleCart()
  }
  
  return (
    <div className={styles.body_cart}>
      {cart.length > 0 && <div className={styles.ball} />}
      <OverlayComponent isOpen={isCartOpen} onClickOverlay={toggleCart}/>
      <SlidePanelLeft isOpen={isCartOpen}>

      <div className={`${styles.header} ${styles.section}`}>
        CARRITO
        <IoCloseSharp onClick={toggleCart} size={25} />
      </div>
      <div className={styles.body}>
        {cart.length === 0 ?
          <div className={styles.empty}>
            EL CARRITO ESTA VACIO
          </div>
          :
          <section className={styles.with_products}>
            <div className={styles.scroll_list}>
              <div className={`${styles.products_list} ${styles.section}`}>
                {cart.map((product) => (
                  <React.Fragment key={
                    product.variantSelected ?
                      `${product.id}-${product.variantSelected.variantId}`
                      :
                      product.id
                  }>
                    <ProductCardCartMini product={product} />
                  </React.Fragment>
                ))}
              </div>
              <div className={`${styles.offer} ${styles.section}`}>

              </div>
            </div>
            <div className={styles.see_cart}>
              <ButtonPrimary title='VER CARRITO' type='link' href='/cart' buttonClick={toggleCart} />
            </div>
          </section>
        }
      </div>
      </SlidePanelLeft>
      <RiShoppingCartLine size={25} onClick={clickInShoppingCart} />
    </div>
  )
}

export default ShoppingCart