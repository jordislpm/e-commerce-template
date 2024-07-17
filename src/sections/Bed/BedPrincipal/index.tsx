import React from 'react'
import styles from  "./BedPrincipal.module.css"
import { MdOutlineCloud } from 'react-icons/md'
import Catalog from '@/components/Share/Catalog'
import ProductCard from '@/components/Share/ProductCard'
import { helebba } from '@/apiContast'
import { filterItemsByCategory } from '@/services/filters'

async function BedPrincipal() {


    const products = await helebba.listProducts();
    const { items, count, pageInfo } = products;
    console.log(products);
    console.log(typeof products.items);

    const productFilter = filterItemsByCategory(items, "bed");

    


  return (
    <section className={styles.section}>
        <h2 className={`title_section ${styles.h2}`}>
        <MdOutlineCloud /> CAMA <MdOutlineCloud />
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
      <div>
        
      </div>
       }
    </section>
  )
}

export default BedPrincipal