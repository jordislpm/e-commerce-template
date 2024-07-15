"use client";
import React from 'react';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, FreeMode } from 'swiper/modules';
import 'swiper/css';
import styles from "./SwiperCategories.module.css";
import { categorieType } from '@/types';
import CategorieCard from '../CategorieCard';

interface SwiperCategories {
    categories: categorieType[];
}

function SwiperCategories({ categories }: SwiperCategories) {
    return (
        <SwiperComponent
        grabCursor={true}
        slidesPerView={"auto"}
        spaceBetween={50}
        freeMode={true}
        className={styles.swiper}
        modules={[Navigation, Pagination, EffectCoverflow, FreeMode]}
        >
            {categories.map((categorie, index) => (
                <SwiperSlide key={index} className={styles.slice}>
                    <CategorieCard categorie={categorie} />
                </SwiperSlide>
            ))}
        </SwiperComponent>
    );
}

export default SwiperCategories;