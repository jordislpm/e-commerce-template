"use client";
import React, { useState, FormEvent } from "react";
import { IoSearchOutline, IoCloseSharp } from "react-icons/io5";
import styles from "./Search.module.css";
import useGlobalStores from "@/hooks/global-state/useGlobalStates";
import { normalizeString } from "@/services/format";
import SearchCard from "@/components/Share/SearchCard";
import ButtonPrimary from "@/components/Share/ButtonPrimary";
import useSearchStore from "@/hooks/global-state/useSearchGlobal";


function Search() {


  const {
    localAllProductsList,
    isSearchOpen,
    toggleSearch }
    = useGlobalStores();

  const {
    filterProductsListSearch,
    productsListSearch,
    setProductSearchedTitle,
    productSearchedTitle
  } = useSearchStore()


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    if (localAllProductsList) {
      filterProductsListSearch(newQuery, localAllProductsList)
    }
  };

  const toggleModal = () => {
    toggleSearch();
    setProductSearchedTitle("")
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

  };

  // const productsSearched = localAllProductsList?.filter((product) => {
  //   const normalizedSearchTerm = searchTerm.split(" ").map(word => normalizeString(word))
  //   const normalizedProductName = product.name.split(" ").map(word => normalizeString(word))
  //   return normalizedSearchTerm.every( normalizedSearchTermWord => 
  //     normalizedProductName.some(normalizedProductNameWord =>
  //       normalizedProductNameWord.includes(normalizedSearchTermWord)
  //     )
  //   )
  // })


  return (
    <div className={styles.main}>
      <IoSearchOutline size={25} onClick={toggleModal} />
      <div
        className={`${styles.search} 
        ${isSearchOpen ? styles.searchActive : styles.searchDesactive}`
        }
      >
        <div className={styles.search_menu}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <button className={styles.button_search} type="submit">
              <IoSearchOutline size={25} />
            </button>
            <input
              className={styles.buscar}
              type="text"
              placeholder="Buscar..."
              value={productSearchedTitle}
              onChange={handleInputChange}
            />
          </form>
          <div className={styles.close}>
            <IoCloseSharp onClick={toggleModal} size={30} />
          </div>
        </div>
        <div className={`${styles.search_result} 
        ${productSearchedTitle !== "" ? styles.search_result_active : styles.search_result_desactive}
        `}>
          {productsListSearch &&
            productsListSearch.map(product => (
              <React.Fragment key={product.name}>
                <SearchCard product={product} />
              </React.Fragment>
            ))}
          {productsListSearch && productsListSearch.length < 1 ?

            <div className={styles.search_result_empty}>No se encontraron resultados</div>
            :
            <div>
              <ButtonPrimary
                title="ver todos los resultados"
                className={styles.button}
                styleType="secondary" />
            </div>
          }
        </div>
      </div>
      <div
        className={`${styles.overlay} ${isSearchOpen ? styles.overlayActive : ""}`}
        onClick={toggleModal}
      ></div>
    </div>
  );
}

export default Search;
