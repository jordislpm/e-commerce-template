"use client"
import React, { useEffect, useRef, useState } from 'react';
import styles from "./BannerCarousel.module.css"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";



function BannerCarousel() {


  
    return (
      <div className={styles.carouselWrapper}>
        <IoIosArrowBack size={35} />
        <div className={styles.item}>
        ☁️ENVÍOS A LIMA(2-3 DÍAS HÁBILES) Y PROVINCIA(5-7 DÍAS HÁBILES)☁️
        </div>
        <IoIosArrowForward size={35}/>
      </div>
    );
  };

  export default BannerCarousel;