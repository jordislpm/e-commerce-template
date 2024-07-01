import Link from 'next/link'
import React, { useState } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import styles from "./NavList.module.css"
import { RoutesListType } from '@/types';

interface NavList {
    list: RoutesListType[]
}

function NavList({ list }: NavList) {
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
        <>
            <div className={styles.list}>
                {list.map((route, index) => (
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
        </>
    )
}

export default NavList