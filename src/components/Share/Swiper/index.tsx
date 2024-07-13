"use client"
import React from 'react'
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import styles from "./Swiper.module.css"

interface SwiperCatalogProps {
    children: React.ReactNode[];
}

function SwiperCatalog({ children }: SwiperCatalogProps) {
    return (
        <SwiperComponent
            effect={"coverflow"}
            grabCursor={true}
            slidesPerView={"auto"}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 50,
                modifier: 1,
                slideShadows: true,
            }}
            className={styles.swiper}
            spaceBetween={30}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination, EffectCoverflow]}
        >
            {children}
        </SwiperComponent>
    );
}

export default SwiperCatalog;