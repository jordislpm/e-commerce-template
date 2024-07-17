"use client"
import React from 'react'
import styles from "./ButtonPrimary.module.css"
import { ButtonPrimaryType } from '@/types'
import Link from 'next/link'

function ButtonPrimary({ title, buttonClick, type = 'button', styleType = 'primary', href }: ButtonPrimaryType) {
    const onClick = () => {
        if (buttonClick) {
            buttonClick()
        }
    }

    const className = `${styles.button} ${styleType === 'primary' ? styles.primary : styles.secondary}`;


    if (type === 'link' && href) {
        return (
            <Link href={href} className={className}>
                    {title?.toLocaleUpperCase()}
            </Link>
        );
    }

    return (
        <button className={className} onClick={onClick}>
            {title?.toLocaleUpperCase()}
        </button>
    );
};

export default ButtonPrimary