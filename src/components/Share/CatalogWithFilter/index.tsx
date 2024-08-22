"use client"
import React, { useEffect, useState } from 'react'
import styles from "./CatalogWithFilter.module.css"
import { Product } from "helebba-sdk";
import Catalog from '../Catalog';
import ProductCard from '../ProductCard';
import { IoIosArrowDown } from "react-icons/io";
import SlidePanelLeft from '../SlidePanelLeft';
import OverlayComponent from '../OverlayComponent';


interface CatalogWithFilterProps {
    productList: Product[];
}

interface FiltersStateType {
    isOverlayOpen: boolean;
    isFilterOpen: boolean;
    IsOrderOpen: boolean;
};

function CatalogWithFilter({ productList }: CatalogWithFilterProps) {
    const [filterState, setFilterState] = useState<FiltersStateType>(
        {
            isOverlayOpen: false,
            isFilterOpen: false,
            IsOrderOpen: false

        }
    )

    const updateFeature = (featureName: keyof FiltersStateType, value: boolean) => {
        setFilterState(prevState => ({
            ...prevState,
            [featureName]: value
        }));
    };

    const toggleOverlay = () => {
        setFilterState({
            isOverlayOpen: false,
            isFilterOpen: false,
            IsOrderOpen: false
        })
    }

    const updateTwoFeatures = (featureOne: keyof FiltersStateType, featureTwo: keyof FiltersStateType, valueOne: boolean, valueTwo: boolean) => {
        setFilterState(prevState => ({
          ...prevState,
          [featureOne]: valueOne,
          [featureTwo]: valueTwo
        }));
      };

    const openFilter = ()=>{
        updateTwoFeatures('isOverlayOpen', 'isFilterOpen', true, true)
    }

    return (
        <div>
            {productList.length > 0 &&
                <div className={styles.main}>
                    <div className={styles.filters}>
                        <div 
                        onClick={openFilter}
                        className={styles.filter}>
                            FILTRAR
                        </div>
                        <div className={styles.divider}></div>
                        <div className={styles.filter}>ORDENADO POR  <IoIosArrowDown size={20}/></div>
                    </div>
                    <Catalog>
                        {productList.map((product) => (
                            <React.Fragment key={product.id}>
                                <ProductCard product={product} />
                            </React.Fragment>
                        ))}
                    </Catalog>
                </div>
            }
            <SlidePanelLeft isOpen={filterState.isFilterOpen}>
filtros
            </SlidePanelLeft>
            <OverlayComponent 
            isOpen={filterState.isOverlayOpen} 
            onClickOverlay={toggleOverlay}/>
        </div>
    )
}

export default CatalogWithFilter