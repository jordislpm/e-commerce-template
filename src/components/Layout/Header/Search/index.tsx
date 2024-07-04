"use client";
import React, { useState, FormEvent } from "react";
import { IoSearchOutline, IoCloseSharp } from "react-icons/io5";
import styles from "./Search.module.css";


function Search() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(`Buscando: ${searchTerm}`);
  };

  return (
    <div className={styles.main}>
      <IoSearchOutline size={25} onClick={toggleModal} />
      <div
        className={`${styles.search} ${isOpen ? styles.searchActive : styles.searchDesactive
          }`}
      >
         <form className={styles.form} onSubmit={handleSubmit}>
      <button className={styles.button_search} type="submit">
        <IoSearchOutline size={25} />
      </button>
      <input
        className={styles.buscar}
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </form>
        <div className={styles.close}>
        <IoCloseSharp onClick={toggleModal} size={30}/>
        </div>
      </div>
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayActive : ""}`}
        onClick={toggleModal}
      ></div>
    </div>
  );
}

export default Search;
