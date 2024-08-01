"use client";
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from "./ProductCard.module.css";
import Image from 'next/image';
import { Product, ProductVariant } from "helebba-sdk";
import { FaPlus } from "react-icons/fa";
import { formatPrice } from '@/services/format';
import useGlobalStores from '@/hooks/global-state/useGlobalStates';
import useShoppingCart from '@/hooks/global-state/useShoppingCart';
import { IoCloseSharp } from 'react-icons/io5';
import ProductVariants from '../ProductVariants';
import ButtonPrimary from '../ButtonPrimary';
import useVariantsSelected from '@/hooks/global-state/useVariantsSelected';
import { CartProductType } from '@/types';
import { useRouter, useSearchParams } from 'next/navigation'
import { useGetProduct } from '@/hooks/getData/useGetProduct';

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {

  const { images, name, price, variants } = product;

  const [showDetails, setShowDetails] = useState<boolean>(false);
  const { addProductToCart, cart } = useShoppingCart();
  const { isCartOpen, toggleCart, setSlugForGetProduct } = useGlobalStores();
  const { isVariantAvailable, theVariantSelected } = useVariantsSelected();
  const [slug, setSlug] = useState<string>("");
  // const{oneProduct} = useGetProduct(slug);

  const [newProduct, setNewProduct] = useState<CartProductType>({
    ...product,
    quantity: 1,
  });
  const router = useRouter();
  const [searchParams, setSearchParams] = useState<URLSearchParams | null>(null);

  useEffect(() => {
    let pickedVariant: ProductVariant | undefined = undefined
    for (const variant of variants) {
      if (variant.color) {
        if (variant.size === theVariantSelected.size && variant.color === theVariantSelected.color) {
          pickedVariant = variant;
        }
      } else {
        if (variant.size === theVariantSelected.size) {
          pickedVariant = variant;
        }
      }
    }

    setNewProduct(prevProduct => ({
      ...prevProduct,
      variantSelected: pickedVariant
    }));
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      setSearchParams(params);
    }
  }, [theVariantSelected, variants, product.slug])

  useEffect(() => {

  }, [
    // oneProduct
  ])

  const toggleModal = () => {
    setShowDetails(!showDetails);
  };

  const addToCart = () => {
    if (variants.length > 0) {
      toggleModal();
      return;
    }
    addProductToCart(newProduct);
    toggleCart()
  }

  const productoAgotado = () => {
    alert("Elige otra de nuestras opciones, este producto esta agotado temporalmente, disculpa los inconvenientes")
  }

  const addToCartVariant = () => {

    addProductToCart(newProduct);
    toggleModal();
    toggleCart();
  }

  const openProduct = () => {
    if (searchParams) {
      searchParams.set("product", newProduct.slug);
      setSlugForGetProduct(newProduct.slug)
      router.push(`/product?${searchParams}`);
    }
  }



  return (
    <>
      <div className={styles.card}>
        <div className={styles.image_container}>
          <Image
            className={styles.image}
            width={20}
            height={20}
            layout="responsive"
            src={images[0]}
            alt={name}
            onClick={openProduct}
          />
          <button
            onClick={addToCart}
            className={styles.button_details}>
            <FaPlus />
          </button>
        </div>
        <div className={styles.info_container}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.price}>Desde $/ {formatPrice(price)}</p>
        </div>
      </div>
      {/* inicia Renderiza el overlay y los detalles fuera del contenedor */}


      {showDetails && ReactDOM.createPortal(
        <>
          <div
            className={`${styles.overlay} ${showDetails ? styles.overlayActive : ''}`}
            onClick={toggleModal}>
          </div>
          <div className={`${styles.show_details} ${showDetails ? styles.show_details__active : styles.show_details__desactive}`}>
            <div className={`${styles.details_header} ${styles.details_section}`}>
              ELIGE OPCIONES
              <IoCloseSharp className={styles.close_modal} onClick={toggleModal} size={25} />
            </div>
            <div className={`${styles.details_body} ${styles.details_section}`}>
              <div className={styles.details_image_container}>
                <Image
                  className={styles.details_image}
                  width={20}
                  height={20}
                  layout="responsive"
                  src={images[0]}
                  alt={name}
                />
              </div>
              <h3 className={styles.details_name}>{name}</h3>
              <p className={styles.details_price}>
                {newProduct.variantSelected && newProduct.variantSelected.price !== 0 ?
                  `$/ ${formatPrice(newProduct.variantSelected.price)}`
                  :
                  `$/${formatPrice(price)}`
                }
              </p>
            </div>
            <div className={styles.details_footer}>
              <ProductVariants variants={variants} />
              <div className={styles.details_button_container}>
                {isVariantAvailable ?
                  <ButtonPrimary
                    title='AÑADIR AL CARRITO'
                    className={styles.details_button}
                    buttonClick={addToCartVariant} /> :
                  <ButtonPrimary
                    title='AGOTADO'
                    className={styles.details_button}
                    buttonClick={productoAgotado}
                  />}
              </div>
            </div>
          </div>
          {/* {variants.map((variant) => (
            <div key={variant.id}>
              {variant.purchasePrice}
            </div>
          ))} */}
        </>,
        document.body
      )}
      {/* termina Renderiza el overlay y los detalles fuera del contenedor */}
    </>
  );
}

export default ProductCard;