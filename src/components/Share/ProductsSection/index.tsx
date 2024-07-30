"use client"
import React, { useEffect, useState } from 'react'
import { MdOutlineCloud } from 'react-icons/md'
import styles from "./ProductsSection.module.css"
import { helebba } from '@/apiContast';
import { filterItemsByCategory } from '@/services/filters';
import Catalog from '../Catalog';
import ProductCard from '../ProductCard';
import ButtonPrimary from '../ButtonPrimary';
import { useGetProductsList } from '@/hooks/getData/useGetProductsList';
import { Product, ProductVariant } from "helebba-sdk";


interface ProductsSectionProps {
    title: string;
    filter: "all" | "cama" | "bano" | "decoracion"| "organizacion" | "pack";
    cloud?: boolean;
    
}


function ProductsSection({title, filter = "all", cloud = false}:ProductsSectionProps) {

    const {productsList, loading, error}= useGetProductsList()
    //const productFilter = productsList ? filterItemsByCategory(productsList?.items, filter) : [];
   
    const [productFilter, setProductFilter]= useState<Product[] | null>()

    useEffect(()=>{


      if (productsList){
        console.log("productsList", productsList)
        const filtered = filterItemsByCategory(productsList?.items, filter)
        setProductFilter(filtered)
        console.log("filtered", filtered)
      }
    },[filter, productsList])

    
  return (
    <section className={styles.section}>
    <h2 className={`title_section ${styles.h2}`}>
    {cloud && <MdOutlineCloud />} {title.toLocaleUpperCase()} {cloud && <MdOutlineCloud />}
  </h2>
{productFilter &&
  <Catalog>
      {productFilter.map((product) => (
          <React.Fragment key={product.id}>
            <ProductCard product={product} />
          </React.Fragment>
        ))}
      </Catalog>
    }

 {!productFilter || productFilter.length < 1 &&  <div className={styles.empty}>
        <h3 className={styles.h3}>{title.toLocaleUpperCase()}</h3>
        <span>Esta coleccion esta vacia:</span>
        <ButtonPrimary title='SEGUIR COMPRANDO' type='link' href='/all'/>
      </div>}
 
    
    </section>
  )
}

export default ProductsSection