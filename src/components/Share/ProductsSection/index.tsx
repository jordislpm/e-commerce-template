"use client"
import React, { useEffect, useState } from 'react'
import { MdOutlineCloud } from 'react-icons/md'
import styles from "./ProductsSection.module.css"
import { filterItemsByCategory } from '@/services/filters';
import Catalog from '../Catalog';
import ProductCard from '../ProductCard';
import ButtonPrimary from '../ButtonPrimary';
import { useGetProductsList } from '@/hooks/getData/useGetProductsList';
import { Product } from "helebba-sdk";
import useGlobalStores from '@/hooks/global-state/useGlobalStates';
import CatalogWithFilter from '../CatalogWithFilter';


interface ProductsSectionProps {
  title: string;
  filter: "all" | "cama" | "bano" | "decoracion" | "organizacion" | "pack";
  cloud?: boolean;

  productListPersonalized?: Product[] | null;
}

function ProductsSection({ productListPersonalized, title, filter = "all", cloud = false }: ProductsSectionProps) {
  const [productFilter, setProductFilter] = useState<Product[] | null>()
  const { localAllProductsList } = useGlobalStores();

  useEffect(() => {


    const choiseList = () => {
      if (productListPersonalized) {
        const filtered = filterItemsByCategory(productListPersonalized, filter)
        setProductFilter(filtered)
        return
      }
      if (localAllProductsList) {
        const filtered = filterItemsByCategory(localAllProductsList, filter)
        setProductFilter(filtered)
      }
    }
    choiseList();

  }, [filter, localAllProductsList, productListPersonalized])


  return (
    <section className={styles.section}>
      <h2 className={`title_section ${styles.h2}`}>
        {cloud && <MdOutlineCloud />} {title.toLocaleUpperCase()} {cloud && <MdOutlineCloud />}
      </h2>
      {productFilter &&
        <CatalogWithFilter productList={productFilter} />
      }

      {!productFilter || productFilter.length < 1 && <div className={styles.empty}>
        <h3 className={styles.h3}>{title.toLocaleUpperCase()}</h3>
        <span>Esta coleccion esta vacia:</span>
        <ButtonPrimary title='SEGUIR COMPRANDO' type='link' href='/all' />
      </div>}
    </section>
  )
}

export default ProductsSection