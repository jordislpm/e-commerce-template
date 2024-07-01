"use client"
import React, {useState} from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "./NavMenu.module.css";
import Link from 'next/link';
import { RoutesNav } from '@/contast';
import { RoutesListType } from '@/types';

function NavMenu() {
  const [subMenu, setSubMenu] = useState<{ route: String, state: boolean, subRoute: RoutesListType[] | undefined }>(
    {
        state: false,
        subRoute: [],
        route: ""
    }
);

const toggleSubMenuState = () => {
    setSubMenu(prevState => ({
        ...prevState,
        state: !prevState.state
    }));
};

const navListClick = (actualRoute: RoutesListType) => {

    setSubMenu({
        state: true,
        subRoute: actualRoute.subRoutes,
        route: actualRoute.name
    });
}

  return (
    <div className={styles.navMenu}>
     <div className={styles.list}>
                {RoutesNav.map((route, index) => (
                    !route.subRoutes ? (
                        <Link
                            key={route.name}
                            href={route.route}
                            className={`${styles.link} ${index > 0 ? styles.link_middle : ""}`}
                        >
                            {route.name}
                        </Link>
                    ) : (
                        <div
                            key={route.name}
                            onClick={() => navListClick(route)}
                            className={`${styles.link} ${index > 0 ? styles.link_middle : ""}`}
                        >
                            {route.name}
                            <IoIosArrowForward />
                        </div>
                    )
                ))}
            </div>
            {subMenu.state &&
                <div className={`${styles.sub_list} ${subMenu ? styles.sub_list__active : ""}`}>
                    <div
                    className={styles.close_submenu}
                     onClick={toggleSubMenuState}>
                        <IoIosArrowBack />
                        {subMenu.route}
                    </div>
                    {subMenu && subMenu?.subRoute?.map((route, index) => (

                        <Link
                            key={route.name}
                            href={`${route.subRoutes ? "" : route.route}`}
                            className={`${styles.link} ${styles.link_middle}`}
                        >
                            {route.name}
                            {route.subRoutes &&
                                <IoIosArrowForward />}
                        </Link>
                    ))}
                </div>
            }

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