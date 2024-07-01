import React from 'react'
import styles from "./Hero.module.css"
import ButtonPrimary from '../../../components/Share/ButtonPrimary'

function HeroHome() {
    return (
        <div className={styles.hero}>
            <div className={styles.button}>
                <ButtonPrimary title='¡LO QUIERO!' />
            </div>
        </div>
    )
}

export default HeroHome