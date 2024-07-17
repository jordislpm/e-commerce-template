import React from 'react'
import { MdOutlineCloud } from 'react-icons/md'
import styles from "./ProductsSection.module.css"
import { helebba } from '@/apiContast';
import { filterItemsByCategory } from '@/services/filters';
import Catalog from '../Catalog';
import ProductCard from '../ProductCard';
import ButtonPrimary from '../ButtonPrimary';


interface ProductsSectionProps {
    title: string;
    filter: "all" | "bed" | "bath" | "decor"| "setup";
    cloud?: boolean;
    
}


async function ProductsSection({title, filter = "all", cloud = false}:ProductsSectionProps) {
    const products = await helebba.listProducts();
    const { items, count, pageInfo } = products;
    console.log(products);
    console.log(typeof products.items);

    const productFilter = filterItemsByCategory(items, filter);
  return (
    <section className={styles.section}>
    <h2 className={`title_section ${styles.h2}`}>
    {cloud && <MdOutlineCloud />} {title.toLocaleUpperCase()} {cloud && <MdOutlineCloud />}
  </h2>
  {productFilter.length > 0 ?
  <Catalog>
      {productFilter.map((product) => (
          <React.Fragment key={product.id}>
            <ProductCard product={product} />
          </React.Fragment>
        ))}
      </Catalog>
      :
      <div className={styles.empty}>
        <h3 className={styles.h3}>{title.toLocaleUpperCase()}</h3>
        <span>Esta coleccion esta vacia:</span>
        <ButtonPrimary title='SEGUIR COMPRANDO' type='link' href='/all'/>
      </div>
       }
    </section>
  )
}

export default ProductsSection