import React, { ReactNode } from 'react'
import styles from "./SlidePanelLeft.module.css"

interface SlidePanelLeftProps {
    isOpen: boolean;
    children?: ReactNode;
}


function SlidePanelLeft({ isOpen, children }: SlidePanelLeftProps) {
    return (
        <div className={`${styles.cart} ${isOpen ? styles.cartActive : styles.cartDesactive}`}>
            {children}
        </div>
    )
}

export default SlidePanelLeft