import React from 'react'
import styles from "./HomeCategories.module.css"
import SwiperCatalog from '@/components/Share/SwiperProducts'
import { helebba } from '@/apiContast';
import { categories } from '@/contast';
import SwiperCategories from '@/components/Share/SwiperCategories';





async function HomeCategories() {

    const products = await helebba.listProducts();
    const { items, count, pageInfo } = products;
    console.log(products);
    console.log(typeof products.items);
    
    return (
        <section className={styles.section}>
            <h2 className={`title_section ${styles.title}`}>CATEGORIAS</h2>
      <SwiperCategories categories={categories} />
        </section>
    )
}

export default HomeCategories