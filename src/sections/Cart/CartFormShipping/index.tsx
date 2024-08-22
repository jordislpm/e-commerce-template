import React from 'react'
import styles from "./CartFormShipping.module.css"
import { LiaTruckMovingSolid } from "react-icons/lia";
import { CiShop } from "react-icons/ci";


function CartFormShipping() {
    return (
        <div className={styles.body}>
            <h2 className={styles.title}>ELIGE TU METODO DE ENVIO</h2>
            <div className={styles.shipping_options}>
                <div className={styles.shipping_option}>
                    <LiaTruckMovingSolid className={styles.icon} size={60}/>
                    Envio Regular
                </div>
                <div className={styles.shipping_option}>
                    <CiShop className={styles.icon} size={60}/>
                    Retiro en Tienda
                </div>
            </div>
        </div>
    )
}

export default CartFormShipping