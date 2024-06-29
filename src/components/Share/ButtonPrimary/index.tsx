import React from 'react'
import styles from "./ButtonPrimary.module.css"
import { ButtonPrimaryType } from '@/types'

function ButtonPrimary({ title, buttonClick }: ButtonPrimaryType) {
    const onClick = () => {
        if (buttonClick) {
            buttonClick()
        }
    }

    return (
        <button className={styles.button}>
            {title}
        </button>
    )
}

export default ButtonPrimary