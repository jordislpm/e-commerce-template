import React from 'react'
import styles from "./Footer.module.css"
import { PROJECT_EMAIL, PROJECT_NAME, PROJECT_NUMBER, PROJECT_SOCIAL } from '@/contast'
import Link from 'next/link'
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { VscBook } from "react-icons/vsc";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_section}>
        <h2>
          {PROJECT_NAME.toLocaleUpperCase()}
        </h2>
        <p>
          Disfruta de nuestra ropa de cama 100% algodón con diseños únicos donde encontrarás sábanas, plumones, cubrecamas, protectores de colchón y mucho más para tu hogar.
        </p>
      </div>
      <div className={styles.footer_section}>
        <h2>
          LEGAL
        </h2>
        <p>
          <Link href="">
            Términos y Condiciones
          </Link>
        </p>
        <p>
          <Link href="">
            Política de Privacidad
          </Link>
        </p>
        <p>
          <Link className={styles.book} href="">
          <VscBook size={40} /> <span>Libro de Reclamaciones</span>
          </Link>
        </p>
      </div>
      <div className={styles.footer_section}>
        <h2>
          ENLACES
        </h2>
        <p>
          <Link href="">
            Nuestras Tiendas
          </Link>
        </p>
        <p>
          <Link href="">
            Legales de Promociones
          </Link>
        </p>
        <p>
          <Link href="">
            Nosotros
          </Link>
        </p>
        <p>
          <Link href="">
            Pedidos Corporativos
          </Link>
        </p>
        <p>
          <Link href="">
            Cambios y Devoluciones
          </Link>
        </p>
      </div>
      <div className={styles.footer_section}>
        <h2>
          ATENCION AL CLIENTE
        </h2>
        <p>
          Contacto: {PROJECT_EMAIL}
        </p>
        <p>
          Celular: <span>{PROJECT_NUMBER}</span>
        </p>
      </div>
      <div className={styles.social_media}>
        <a href={PROJECT_SOCIAL.facebook} target='_blank'>
          <FaFacebookF size={20} />
        </a>
        <a href={PROJECT_SOCIAL.instagram} target='_blank'>
          <CiInstagram size={20} />
        </a>
      </div>
      <div className={styles.rights_reserved}>
        © 2024 - {PROJECT_NAME.toLocaleUpperCase()} ®
      </div>
    </footer>
  )
}

export default Footer