
import React from 'react'
import ProductFullDetails from '@/sections/Product/ProductFullDetails';
import styles from "./product.module.css"


function Product() {

  return (
    <div className={styles.product}>
      <ProductFullDetails/>
    </div>
  )
}

export default Product