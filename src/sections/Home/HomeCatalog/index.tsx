
import React from 'react'
import Catalog from '@/components/Share/Catalog'
import { MdOutlineCloud } from "react-icons/md";
import styles from "./HomeCatalog.module.css"
import { helebba } from '@/apiContast';
import ProductCard from '@/components/Share/ProductCard';
import ButtonPrimary from '@/components/Share/ButtonPrimary';

async function HomeCatalog() {



  const products = await helebba.listProducts();
  const { items, count, pageInfo } = products;
  console.log(products);
  console.log(typeof products.items);
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        <MdOutlineCloud /> DESCUBRE EL DESCANSO PERFECTO <MdOutlineCloud />
      </h2>
      <Catalog>
        {items.map((product) => (
          <React.Fragment key={product.id}>
            <ProductCard product={product} />
          </React.Fragment>
        ))}
      </Catalog>
      <div className={styles.separate}/>
      <ButtonPrimary title='COMPRAR AHORA'/>
    </section>
  )
}

export default HomeCatalog