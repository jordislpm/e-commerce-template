import React from 'react'
import styles from "./Hero.module.css"
import Image from 'next/image'
import ButtonPrimary from '../Share/ButtonPrimary'

function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.button}>
                <ButtonPrimary title='¡LO QUIERO!' />
            </div>
        </div>
    )
}

export default Hero