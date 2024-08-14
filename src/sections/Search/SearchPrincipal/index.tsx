"use client"
import React, { useEffect, useState } from 'react'
import styles from "./SearchPrincipal.module.css"
import ProductCard from '@/components/Share/ProductCard'
import Catalog from '@/components/Share/Catalog'
import ButtonPrimary from '@/components/Share/ButtonPrimary'
import useSearchStore from '@/hooks/global-state/useSearchGlobal'
import CatalogWithFilter from '@/components/Share/CatalogWithFilter'
import SlidePanelLeft from '@/components/Share/SlidePanelLeft'


interface FiltersStateType {
    isOverlayOpen: boolean;
    isFilterOpen: boolean;
    IsOrderOpen: boolean;
};



function SearchPrincipal() {
    console.log("render search")
    const {
        filterProductsListSearch,
        productsListSearch,
        setProductSearchedTitle,
        productSearchedTitle
    } = useSearchStore()

    const [filterState, setFilterState] = useState<FiltersStateType>(
        {
            isOverlayOpen: false,
            isFilterOpen: false,
            IsOrderOpen: false

        }
    )

    useEffect(() => {
        const searchParams = new URLSearchParams(global.location.search);
        if (searchParams.has('product')) {
          searchParams.delete('product');
          const newUrl = `${global.location.pathname}?${searchParams.toString()}`;
          global.history.replaceState(null, '', newUrl);
        }
      }, []);

    const updateFeature = (featureName: keyof FiltersStateType, value: boolean) => {
        setFilterState(prevState => ({
            ...prevState,
            [featureName]: value
        }));
    };

    const toggleOverlay = () => {
        updateFeature("isOverlayOpen", false)
    }

    const updateTwoFeatures = (stateOne: boolean, stateTwo: boolean) => {
        setFilterState(prevState => ({
            ...prevState,
            stateOne,
            stateTwo
        }));
    };

    return (
        <section className={styles.section}>

            <h2 className={`title_section ${styles.h2}`}>
                BUSCAR
            </h2>
            {productsListSearch && productSearchedTitle !== ""?

                <span className={styles.subTitle_results}>
                    {productsListSearch.length} resultados para  &laquo;{productSearchedTitle}&raquo;
                </span>
                :""
            }
            {productsListSearch &&

                <CatalogWithFilter productList={productsListSearch} />
            }
            {!productsListSearch || productsListSearch.length < 1 && <div className={styles.empty}>
                <h3 className={styles.h3}>BUSCAR</h3>
                <span>Esta coleccion esta vacia:</span>
                <ButtonPrimary title='SEGUIR COMPRANDO' type='link' href='/all' />
            </div>}
            {/* filter start*/}

            {/* filter end*/}

            {/* order start*/}

            {/* order end*/}
        </section>
    )
}

export default SearchPrincipal