"use client";
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from "./ProductCard.module.css";
import Image from 'next/image';
import { Product } from "helebba-sdk";
import { FaPlus } from "react-icons/fa";
import { formatPrice } from '@/services/format';

import useGlobalStores from '@/hooks/useGlobalStates';
import useShoppingCart from '@/hooks/useShoppingCart';
import { IoCloseSharp } from 'react-icons/io5';
import ProductVariants from '../ProductVariants';
import ButtonPrimary from '../ButtonPrimary';

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {

  const [showDetails, setShowDetails] = useState<boolean>(false);
  const { addProductToCart, cart } = useShoppingCart();
  const { isCartOpen, toggleCart } = useGlobalStores();

  const [newProduct, setNewProduct] = useState({
    ...product,
    quantity: 1,
  });

  const toggleModal = () => {
    console.log("click details");
    setShowDetails(!showDetails);
  };


  const { images, name, price, variants } = product;

  const addToCart = () => {
    if (variants.length > 0) {
      toggleModal();
      return;
    }
    addProductToCart(newProduct);
    toggleCart()

  }

  const addToCartVariant = () => {
    addProductToCart(newProduct)
    toggleModal();
    toggleCart();
  }

  console.log("variants size: " + variants.some((variant) => (variant.size)));
  console.log("variants color: " + variants.some((variant) => (variant.color)))

  return (
    <>
      <div className={styles.card}>
        <div className={styles.image_container}>
          <Image
            className={styles.image}
            width={20}
            height={20}
            layout="responsive"
            src={images[0]}
            alt={name}
          />
          <button
            onClick={addToCart}
            className={styles.button_details}>
            <FaPlus />
          </button>
        </div>
        <div className={styles.info_container}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.price}>Desde $/ {formatPrice(price)}</p>
        </div>
      </div>
      {/* Renderiza el overlay y los detalles fuera del contenedor */}
      {showDetails && ReactDOM.createPortal(
        <>
          <div
            className={`${styles.overlay} ${showDetails ? styles.overlayActive : ''}`}
            onClick={toggleModal}>
          </div>
          <div className={`${styles.show_details} ${showDetails ? styles.show_details__active : styles.show_details__desactive}`}>
            <div className={`${styles.details_header} ${styles.details_section}`}>
              ELIGE OPCIONES
              <IoCloseSharp className={styles.close_modal} onClick={toggleModal} size={25} />
            </div>

            <div className={`${styles.details_body} ${styles.details_section}`}>
              <div className={styles.details_image_container}>
                <Image
                  className={styles.details_image}
                  width={20}
                  height={20}
                  layout="responsive"
                  src={images[0]}
                  alt={name}
                />
              </div>
              <h3 className={styles.details_name}>{name}</h3>
              <p className={styles.details_price}>$/ {formatPrice(price)}</p>
            </div>
            <div className={styles.details_footer}>
              <ProductVariants variants={variants} />
              <div className={styles.details_button_container}>
                <ButtonPrimary 
                title='AÑADIR AL CARRITO' 
                className={styles.details_button}
                buttonClick={addToCartVariant}/>
              </div>
            </div>
          </div>
          {variants.map((variant) => (
            <div>
              {variant.purchasePrice}
            </div>
          ))}
        </>,
        document.body
      )}
    </>
  );
}

export default ProductCard;