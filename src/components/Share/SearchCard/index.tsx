"use client"
import React, { useState } from 'react'
import styles from "./SearchCard.module.css"
import { Product, ProductVariant } from "helebba-sdk";
import Image from 'next/image';
import { formatPrice } from '@/services/format';
import useGlobalStores from '@/hooks/global-state/useGlobalStates';
import { useRouter } from 'next/navigation';

interface SearchCardProps {
    product: Product;
}



function SearchCard({ product }: SearchCardProps) {

    const [searchParams, setSearchParams] = useState<URLSearchParams>(new URLSearchParams(window.location.search));
    const router = useRouter()
    const {
        localAllProductsList,
        isSearchOpen,
        toggleSearch ,
        setSlugForGetProduct}
        = useGlobalStores();

    const { name, images, price } = product;



    const openProduct = (product: Product) => {
            searchParams.set("product", product.slug);
            setSlugForGetProduct(product.slug)
            router.push(`/product?${searchParams}`);
            toggleSearch();
    }
    
    return (
        <div className={styles.body} onClick={()=>openProduct(product)}>
            <div className={styles.image_container}>
                <Image
                    className={styles.image}
                    src={images[0]}
                    alt={name}
                    height={20}
                    width={20} />
            </div>
            <div className={styles.details}>
                <p>
                    {name.toLocaleUpperCase()}
                </p>
                <span>
                  ${formatPrice(price)}
                </span>
            </div>
        </div>
    )
}

export default SearchCard