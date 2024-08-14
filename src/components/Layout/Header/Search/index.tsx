"use client";
import React, { useState, FormEvent, useEffect } from "react";
import { IoSearchOutline, IoCloseSharp } from "react-icons/io5";
import styles from "./Search.module.css";
import useGlobalStores from "@/hooks/global-state/useGlobalStates";
import { normalizeString } from "@/services/format";
import SearchCard from "@/components/Share/SearchCard";
import ButtonPrimary from "@/components/Share/ButtonPrimary";
import useSearchStore from "@/hooks/global-state/useSearchGlobal";
import OverlayComponent from "@/components/Share/OverlayComponent";
import { useRouter} from 'next/navigation'


function Search() {

  const router = useRouter();
  const [searchParams, setSearchParams] = useState<URLSearchParams>(new URLSearchParams(global.location.search));
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

  const [isSearching, setIsSearching]= useState<boolean>(false);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setProductSearchedTitle(newQuery)
    if (localAllProductsList) {
      filterProductsListSearch(newQuery, localAllProductsList)
    }
  };

  useEffect(()=>{
    if (productSearchedTitle !== ""){
      setIsSearching(true)
    }
  },[productSearchedTitle])


  const toggleModal = () => {
    toggleSearch();
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

  };

  const handleSeeAllResults = ()=>{
    toggleSearch();
    searchParams.set("search", productSearchedTitle);
    router.push(`/search?${searchParams}`);
  }

  const displayedProducts = productsListSearch?.slice(0, 5) || [];

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
        ${productSearchedTitle !== "" && isSearchOpen ? styles.search_result_active : styles.search_result_desactive}
        `}>
          {productsListSearch &&
            displayedProducts.map(product => (
              <React.Fragment key={product.name}>
                <SearchCard product={product} />
              </React.Fragment>
            ))}
          {productsListSearch && productsListSearch.length < 1 ?

            <div className={styles.search_result_empty}>No se encontraron resultados</div>
            :
            ""
          }

          {productsListSearch && productsListSearch.length > 3 ?
// tiene que ser > 5, esta en otro numero solo para pruebas
            <div>
              <ButtonPrimary
                title="ver todos los resultados"
                className={styles.button}
                styleType="secondary" 
                type="button"
                buttonClick={handleSeeAllResults}
                />
            </div>
            :
            ""
          }
        </div>
      </div>
      <OverlayComponent isOpen={isSearchOpen} onClickOverlay={toggleModal}/>
    </div>
  );
}

export default Search;
