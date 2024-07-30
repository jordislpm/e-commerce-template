import React from 'react'
import styles from "./HomeCategories.module.css"
import SwiperCatalog from '@/components/Share/SwiperProducts'
import SwiperCategories from '@/components/Share/SwiperCategories';
import { useGetCategoriesList } from '@/hooks/getData/useGetCategories';
import { categories } from '@/contast';





function HomeCategories() {
    
    return (
        <section className={styles.section}>
            <h2 className={`title_section ${styles.title}`}>CATEGORIAS</h2>
      <SwiperCategories categories={categories} />
        </section>
    )
}

export default HomeCategories