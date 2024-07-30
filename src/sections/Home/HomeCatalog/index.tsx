"use client"
import React from 'react'
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






function HomeCatalog() {
  const {productsList, loading, error}= useGetProductsList()
  return (
    <section className={styles.section}>
      <h2 className={`title_section`}>
        <MdOutlineCloud /> DESCUBRE EL DESCANSO PERFECTO <MdOutlineCloud />
      </h2>
      {productsList && 
            <Catalog>
            {productsList.items.map((product) => (
              <React.Fragment key={product.id}>
                <ProductCard product={product} />
              </React.Fragment>
            ))}
          </Catalog>
      }
      {
        loading && <Loading message='Cargando productos'/>
      }
      <div className={styles.separate}/>
      <ButtonPrimary title='COMPRAR AHORA'/>
    </section>
  )
}

export default HomeCatalog