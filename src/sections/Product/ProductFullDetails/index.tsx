"use client"
import useGlobalStores from '@/hooks/global-state/useGlobalStates';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from "./ProductFullDetails.module.css";
import useShoppingCart from '@/hooks/global-state/useShoppingCart';
import useVariantsSelected from '@/hooks/global-state/useVariantsSelected';
import { ProductVariant } from 'helebba-sdk';
import { CartProductType } from '@/types';
import { formatPrice } from '@/services/format';
import ProductVariants from '@/components/Share/ProductVariants';
import QuantityOptions from '@/components/Share/QuantityOptions';
import ButtonPrimary from '@/components/Share/ButtonPrimary';
import Loading from '@/components/Share/Loading';
import { useGetProduct } from '@/hooks/getData/useGetProduct';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

function ProductFullDetails() {
  const { toggleCart, setSlugForGetProduct } = useGlobalStores();
  const { isVariantAvailable, theVariantSelected } = useVariantsSelected();
  const { oneProduct, loading, error } = useGetProduct();
  const { addProductToCart,} = useShoppingCart();
  const [newProduct, setNewProduct] = useState<CartProductType | null>();
  const searchParams = useSearchParams();

const router = useRouter()
  useEffect(()=>{
    setNewProduct(oneProduct)
    console.log(oneProduct)
    const searchParams = new URLSearchParams(global.location.search);
    return () => {
      searchParams.delete('product');
    };
  },[oneProduct])



  useEffect(() => {
    let pickedVariant: ProductVariant | undefined = undefined;


    if (oneProduct) {

      for (const variant of oneProduct.variants) {
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
        ...oneProduct,
        variantSelected: pickedVariant
      }));
    } else{
      const slug = searchParams.get('product');
      if (slug){
        setSlugForGetProduct(slug)
      }
    }

  }, [oneProduct, theVariantSelected, searchParams,setSlugForGetProduct ]);

  const productoAgotado = () => {
    alert("Elige otra de nuestras opciones, este producto está agotado temporalmente, disculpa los inconvenientes");
  }

  const addToCartVariant = () => {
    if (newProduct) {
      addProductToCart(newProduct);
    }
    toggleCart();
  }

  const increaseQuantity = () => {
    setNewProduct(prevProduct => ({
      ...prevProduct!,
      quantity: prevProduct!.quantity + 1
    }));
  }

  const decreaseQuantity = () => {
    setNewProduct(prevProduct => ({
      ...prevProduct!,
      quantity: Math.max(prevProduct!.quantity - 1, 1)
    }));
  }

  return (
    <>
      {loading && <Loading message='Cargando producto'/>}
      {oneProduct &&
        <>
          {newProduct ?
            <div className={styles.main}>
              <div className={styles.image_container}>
                <Image
                  className={styles.image}
                  width={20}
                  height={20}
                  layout="responsive"
                  src={oneProduct.images[0]}
                  alt={oneProduct.name}
                />
              </div>
              <section className={styles.section}>
                <h2 className={styles.name}>{oneProduct.name}</h2>
                <p className={styles.price}>
                  {newProduct?.variantSelected && newProduct.variantSelected.price !== 0 ?
                    `$/  ${formatPrice(newProduct.variantSelected.price)}`
                    :
                    `$/ ${formatPrice(oneProduct.price)}`
                  }
                </p>
                <ProductVariants variants={newProduct.variants} />
                <p className={styles.desc}>
                  {oneProduct.desc}
                </p>
                <QuantityOptions
                  quantity={newProduct?.quantity}
                  increaseAction={increaseQuantity}
                  decreaseAction={decreaseQuantity}
                />

                {newProduct.variants.length > 0 ?
                  <>
                    {isVariantAvailable && newProduct.variants.length > 0 ?
                      <ButtonPrimary
                        title='AÑADIR AL CARRITO'
                        className={styles.details_button}
                        buttonClick={addToCartVariant} /> :
                      <ButtonPrimary
                        title='AGOTADO'
                        className={styles.details_button}
                        buttonClick={productoAgotado}
                      />}
                  </>
                  :
                  <>
                    <ButtonPrimary
                      title='AÑADIR AL CARRITO'
                      className={styles.details_button}
                      buttonClick={addToCartVariant} />
                  </>
                }

              </section>
            </div>
            :
            <div>
              sin producto
            </div>
          }
        </>
      }
    </>
  )
}

export default ProductFullDetails;