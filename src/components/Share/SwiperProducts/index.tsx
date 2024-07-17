"use client";
import React from 'react';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from "./SwiperProducts.module.css";
import { Product } from "helebba-sdk";
import ProductCard from '../ProductCard';


interface SwiperCatalogProps {
    items: Product[];
}

function SwiperProducts({ items }: SwiperCatalogProps) {
    return (
        <SwiperComponent
        grabCursor={true}
        slidesPerView={"auto"}
        spaceBetween={20}  // Asegúrate de que este valor sea 0
        freeMode={true}
        className={styles.swiper}
        modules={[Navigation, Pagination, EffectCoverflow, FreeMode]}
        >
            {items.map((item, index) => (
                <SwiperSlide key={index} className={styles.slice}>
                    <ProductCard product={item} />
                </SwiperSlide>
            ))}
        </SwiperComponent>
    );
}

export default SwiperProducts;