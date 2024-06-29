import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import styles from "./NavMenu.module.css";
import Link from 'next/link';
import { RoutesNav } from '@/contast';

function NavMenu() {
  return (
    <div className={styles.navMenu}>
      <div className={styles.list}>
        {RoutesNav.map((route) => (
          
          <Link
            key={route.name}
            href={`${route.subroutes ? "": route.route}`}
            className={styles.link}
          >
            {route.name}
            {route.subroutes &&
            <IoIosArrowForward />}
          </Link>
        ))}
      </div>
      <Link
        href="/login"
        className={styles.link}
      >
        INICIAR SESION

      </Link>
    </div>
  );
}

export default NavMenu;