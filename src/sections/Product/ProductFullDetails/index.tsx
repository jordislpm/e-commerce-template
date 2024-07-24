"use client"
import useGlobalStores from '@/hooks/global-state/useGlobalStates';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import styles from "./ProductFullDetails.module.css"
import useShoppingCart from '@/hooks/global-state/useShoppingCart';
import useVariantsSelected from '@/hooks/global-state/useVariantsSelected';
import { ProductVariant } from 'helebba-sdk';
import { CartProductType } from '@/types';
import { formatPrice } from '@/services/format';
import ProductVariants from '@/components/Share/ProductVariants';
import QuantityOptions from '@/components/Share/QuantityOptions';
import ButtonPrimary from '@/components/Share/ButtonPrimary';




function ProductFullDetails() {

  const { addProductToCart, cart } = useShoppingCart();
  const { isCartOpen, toggleCart, setProductForShowDetails, productForShowDetails} = useGlobalStores();
  const { isVariantAvailable, theVariantSelected } = useVariantsSelected();

  const [newProduct, setNewProduct] = useState<CartProductType | null>();


  useEffect(() => {
    let pickedVariant: ProductVariant | undefined = undefined
    if (productForShowDetails) {
      for (const variant of productForShowDetails.variants) {
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
        ...productForShowDetails,
        variantSelected: pickedVariant
      }));
    }

  }, [theVariantSelected, productForShowDetails])


  // const addToCart = () => {
  //   if (newProduct){
  //     addProductToCart(newProduct);
  //   }
  //   toggleCart()
  // }

  const productoAgotado = () => {
    alert("Elige otra de nuestras opciones, este producto esta agotado temporalmente, disculpa los inconvenientes")
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



  console.log("productForShowDetails :", productForShowDetails);
  console.log("newProduct :", newProduct);

  return (
    <>
      {productForShowDetails && newProduct ?
        <div className={styles.main}>
          <div className={styles.image_container}>
            <Image
              className={styles.image}
              width={20}
              height={20}
              layout="responsive"
              src={productForShowDetails.images[0]}
              alt={productForShowDetails.name}
            />
          </div>
          <section className={styles.section}>
            <h2 className={styles.name}>{productForShowDetails.name}</h2>
            <p className={styles.price}>
              {newProduct?.variantSelected && newProduct.variantSelected.price !== 0 ?
                `$/  ${formatPrice(newProduct.variantSelected.price)}`
                :
                `$/ ${formatPrice(productForShowDetails.price)}`
              }
            </p>
            <ProductVariants variants={productForShowDetails.variants} />
            <p className={styles.desc}>
              {productForShowDetails.desc}
            </p>
            <QuantityOptions
              quantity={newProduct?.quantity}
              increaseAction={increaseQuantity}
              decreaseAction={decreaseQuantity}
            />

            {newProduct.variants.length > 0 
            ?
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
  )
}

export default ProductFullDetails;