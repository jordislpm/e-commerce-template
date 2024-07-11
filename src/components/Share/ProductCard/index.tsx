"use client"
import React, { useState } from 'react'
import styles from "./ProductCard.module.css"
import Image from 'next/image'
import { Product } from "helebba-sdk"
import { FaPlus } from "react-icons/fa";
import { formatPrice } from '@/services/format';

interface ProductCardProps {
  product: Product;
}




function ProductCard({ product }: ProductCardProps) {

  const [showDetails, setShowDetails] = useState<boolean>(false);

  const toggleModal = () => {
    console.log("click details")
    setShowDetails(!showDetails);
  }


  const { images, name, price } = product;
  console.log(images[0]);
  return (
    <div className={styles.card}>
      {/* details modal start */}
      <div
        className={`${styles.overlay} ${showDetails ? styles.overlayActive : ''}`}
        onClick={toggleModal}>
      </div>
      <div className={`${styles.show_details} ${showDetails ? styles.show_details__active : styles.show_details__desactive}`}>
          PRODUCT DETAILS

      </div>
      {/* details modal end */}


      <div className={styles.image_container}>
        <Image
          className={styles.image}
          width={20}
          height={20}
          layout="responsive"
          src={images[0]}
          alt={name} />
        <button
          onClick={toggleModal}
          className={styles.button_details}>
          <FaPlus />
        </button>
      </div>
      <div className={styles.info_container}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.price}>Desde $/ {formatPrice(price)}</p>
      </div>
    </div>
  )
}

export default ProductCard