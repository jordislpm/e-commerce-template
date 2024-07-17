"use client";
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from "./ProductCard.module.css";
import Image from 'next/image';
import { Product } from "helebba-sdk";
import { FaPlus } from "react-icons/fa";
import { formatPrice } from '@/services/format';
import { useCartStore } from '@/store/cart';

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {

  const [showDetails, setShowDetails] = useState<boolean>(false);
  const addProductToCart = useCartStore((state) => state.addProductToCart);
  const cart = useCartStore((state) => state.cart);
  const [newProduct, setNewProduct] = useState({
 ...product,
    quantity: 1,
  });

  const toggleModal = () => {
    console.log("click details");
    setShowDetails(!showDetails);
  };


  const { images, name, price, variants } = product;

  const addToCart = ()=>{
    if(variants.length > 0){
      toggleModal();
      return ;
    }
    addProductToCart(newProduct);
    console.log(cart);

  }

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
            PRODUCT DETAILS
          </div>
          {variants.map((variant)=>(
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