"use client"
import React, { useState } from 'react'
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import styles from "./Nav.module.css"
import NavMenu from '../NavMenu';

function Nav() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const openModal = () => {
        setIsOpen(!isOpen);
    };
    const closeModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.nav}>
            <IoMenuSharp onClick={openModal} size={25} />
            <div
                className={`${styles.overlay} ${isOpen ? styles.overlayActive : ''}`}
                onClick={openModal}>

            </div>
            <div
                className={`${styles.menu} ${isOpen ? styles.menuActive : styles.menuDesactive}`}
            >
                <IoCloseSharp onClick={closeModal} size={30} />
                <NavMenu />
            </div>
        </nav>
    )
}

export default Nav