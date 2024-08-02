"use client"
import React, { useEffect, useState } from 'react'
import Catalog from '@/components/Share/Catalog'
import { MdOutlineCloud } from "react-icons/md";
import styles from "./HomeCatalog.module.css"
import { helebba } from '@/apiContast';
import ProductCard from '@/components/Share/ProductCard';
import ButtonPrimary from '@/components/Share/ButtonPrimary';
import useGlobalStores from '@/hooks/global-state/useGlobalStates';
import { Result, Product } from "helebba-sdk";
import { useGetProductsList } from '@/hooks/getData/useGetProductsList';
import Loading from '@/components/Share/Loading';
import { useGetProductsListQuery } from '@/hooks/getDataQuery/useGetProductsListQuery';






function HomeCatalog() {
  const{loading}=useGetProductsListQuery()
  const {localAllProductsList}=useGlobalStores();
  const [productsInStorage, setProductsInStorage]= useState<boolean>(false);

//   useEffect(() => {
//     const savedData = localStorage.getItem('algodina-store');
//     if (savedData) {
//  setProductsInStorage(true);
//     }
//   }, []);

  return (
    <section className={styles.section}>
      <h2 className={`title_section`}>
        <MdOutlineCloud /> DESCUBRE EL DESCANSO PERFECTO <MdOutlineCloud />
      </h2>
      {localAllProductsList && 
            <Catalog>
            {localAllProductsList.map((product) => (
              <React.Fragment key={product.id}>
                <ProductCard product={product} />
              </React.Fragment>
            ))}
          </Catalog>
      }
      {
        loading
        ? 
        <Loading message='Cargando productos'/>
        :
        ""
      }
      <div className={styles.separate}/>
      <ButtonPrimary title='COMPRAR AHORA'/>
    </section>
  )
}

export default HomeCatalog