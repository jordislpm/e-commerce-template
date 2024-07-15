import Image from 'next/image'
import React from 'react'
import { categorieType } from '@/types'
import styles from "./CategorieCard.module.css"
import Link from 'next/link';


interface CategorieCardProps {
    categorie: categorieType;
}





function CategorieCard({categorie}:CategorieCardProps) {
    const {image, route, name}= categorie;

  return (
    <Link href={route} className={styles.categorie}>
       <div className={styles.image_container}>
        <Image
          className={styles.image}
          width={20}
          height={20}
          layout="responsive"
          src={image}
          alt={name} />
      </div>
      <div className={styles.content}>
        <h2>{name}</h2>
        <h3>COMPRAR AHORA</h3>
      </div>
    </Link>
  )
}

export default CategorieCard