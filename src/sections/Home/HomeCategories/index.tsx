import React from 'react'
import styles from "./HomeCategories.module.css"
import SwiperCatalog from '@/components/Share/Swiper'
import { helebba } from '@/apiContast';
import ProductCard from '@/components/Share/ProductCard';
import { SwiperSlide } from 'swiper/react';
import { GetProductsServer } from '@/services/products';




async function HomeCategories() {

    const products = await helebba.listProducts();
    const { items, count, pageInfo } = products;
    console.log(products);
    console.log(typeof products.items);
    
    return (
        <section className={styles.section}>
            <h2 className={`title_section ${styles.title}`}>CATEGORIAS</h2>
            {/* <SwiperCatalog
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index} >
                        <ProductCard product={item} />
                    </SwiperSlide>
                ))}

            </SwiperCatalog>     */}
        </section>
    )
}

export default HomeCategories