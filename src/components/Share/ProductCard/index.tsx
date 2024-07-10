import React from 'react'
import styles from "./ProductCard.module.css"
import Image from 'next/image'
import { Product } from "helebba-sdk"
import { FaPlus } from "react-icons/fa";
import { formatPrice } from '@/services/format';

interface ProductCardProps {
  product: Product;
}




function ProductCard({ product }: ProductCardProps) {


  const { images, name , price} = product;
  console.log(images[0]);
  return (
    <div className={styles.card}>
      <div className={styles.image_container}>
        <Image
          className={styles.image}
          width={20}
          height={20}
          layout="responsive"
          src={images[0]}
          alt={name} />
          <button className={styles.button_details}>
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