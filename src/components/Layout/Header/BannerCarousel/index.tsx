"use client"
import React, { useState, useEffect, useRef } from 'react';
import styles from "./BannerCarousel.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';

const items = [

  {title:"☁️ VISITANOS EN NUESTRAS TIENDAS ☁️",
    link: "/stores"
  },
  {title:"☁️ 2 ENVÍOS A LIMA (2-3 DÍAS HÁBILES) Y PROVINCIA (5-7 DÍAS HÁBILES) ☁️",
    link: "/"
  },
  {title:"☁️ BED TOPPER: ÚLTIMAS UNIDADES DISPONIBLES ☁️",
    link: "/"
  },

];



function BannerCarousel () {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
 
};

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    }, 6000);

    return () => clearInterval(interval); 
  }, [currentIndex]);


  return (
    <div className={styles.body}>
      <IoIosArrowBack size={35} onClick={prevItem} />
      <div className={styles.items_container}>
        <div className={styles.items}>
          {items.map((item, index) => (
            <Link 
            href={item.link}
            key={index} 
            className={
                `${styles.item} 
                ${index === currentIndex ? styles.active : styles.desactive}
                 ${item.link !== "/" ? styles.link : ""}
                `}
                >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <IoIosArrowForward onClick={nextItem} size={35} />
    </div>
  );
};

export default BannerCarousel;