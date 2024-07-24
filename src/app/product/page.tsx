
import React from 'react'
import ProductFullDetails from '@/sections/Product/ProductFullDetails';
import styles from "./product.module.css"
import ProductAsyncFullDetails from '@/sections/Product/ProductAsyncFullDetails';


function Product() {

  return (
    <div className={styles.product}>
      <ProductFullDetails/>
      <ProductAsyncFullDetails/>
    </div>
  )
}

export default Product