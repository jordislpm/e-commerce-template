"use client";
import React from 'react';
import styles from "./ButtonPrimary.module.css";
import { ButtonPrimaryType } from '@/types';
import Link from 'next/link';

function ButtonPrimary({
    title,
    buttonClick,
    type = 'button',
    styleType = 'primary',
    href,
    className
}: ButtonPrimaryType) {
    const onClick = () => {
        if (buttonClick) {
            buttonClick();
        }
    };

    const classNameAll = `${styles.button} ${className || ''} ${styleType === 'primary' ? styles.primary : styles.secondary}`;

    if (type === 'link' && href) {
        return (
            <Link href={href} passHref>
                <div className={classNameAll} onClick={onClick}>
                    {title?.toLocaleUpperCase()}
                </div>
            </Link>
        );
    }

    return (
        <button className={classNameAll} onClick={onClick}>
            {title?.toLocaleUpperCase()}
        </button>
    );
}

export default ButtonPrimary;