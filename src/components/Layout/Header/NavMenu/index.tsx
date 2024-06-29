import React from 'react'
import styles from "./NavMenu.module.css"
import Link from 'next/link'
import { RoutesNav } from '@/contast'

function NavMenu() {
  return (
    <div className={styles.navMenu}>
      <ul>
        {RoutesNav.map((route) => (
          <Link
            key={route.name}
            className={styles.link}
            href={route.route}
          >
            {route.name}
          </Link>
        ))}

      </ul>
      <Link href="">INICIAR SESION</Link>
    </div>
  )
}

export default NavMenu