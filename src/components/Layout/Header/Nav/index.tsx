"use client"
import React, { useEffect, useState } from 'react'
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "./Nav.module.css"
import Link from 'next/link';
import { RouteProps, RoutesListType } from '@/types';
import { Product, Category } from "helebba-sdk";
import useRoutesStore from '@/hooks/route/useProjectRoutes';
import { RoutesNav } from '@/contast';




interface NavProps{
    categories: Category[];
    products: Product[]
}

function Nav({categories, products}:NavProps) {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [subMenu, setSubMenu] = useState<{ route: String, state: boolean, subRoute: RoutesListType[] | undefined }>(
        {
            state: false,
            subRoute: [],
            route: ""
        }
    );

    const {routes, setRoutes}= useRoutesStore();

    useEffect(()=>{

        const categorieNames: string[] = categories.map((categorie)=>{
                    return categorie.name
        });


        const newRoutes: RouteProps[] = categories.map((categorie)=>{
         const index = RoutesNav.findIndex(item => item.route.includes(categorie.name));
         return RoutesNav[index]
        })
        products.forEach((product)=>{
            product.categories.forEach((productCategorie)=>{
                    if(categorieNames.includes(productCategorie.name)){
                     const index=  newRoutes.findIndex(item => item.route.includes(productCategorie.name))
                     const subRouteExist = newRoutes[index].subRoutes?.some(item => item.name === product.name)
                     if(newRoutes[index].subRoutes?.length === 0){
                        newRoutes[index].subRoutes.push({
                            name: "VER TODO",
                            route: "/bed",
                            slug: ""
                        })
                     }
                     if (!subRouteExist){
                     newRoutes[index].subRoutes?.push(
                        {
                        name: product.name,
                        route: productCategorie.name,
                        slug: product.slug
                     }
                    )
                    }
                    }
            })
        })
        setRoutes(newRoutes)

    },[categories, setRoutes, products])

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

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };
    const closeModal = () => {
        setIsOpen(!isOpen);
        setSubMenu(prevState => ({
            ...prevState,
            menu: [],
            state: false
        }));
    };

    return (
        <nav className={styles.nav}>
            <IoMenuSharp onClick={toggleModal} size={25} />
            <div
                className={`${styles.overlay} ${isOpen ? styles.overlayActive : ''}`}
                onClick={toggleModal}>

            </div>
            <div
                className={`${styles.menu} ${isOpen ? styles.menuActive : styles.menuDesactive}`}
            >
                <IoCloseSharp onClick={closeModal} size={30} />
                <div className={styles.navMenu}>
                    {!subMenu.state &&
                    <div className={styles.list}>
                        {routes.map((route, index) => (
                            route.subRoutes.length < 1 ? (
                                <Link
                                    onClick={toggleModal}
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
                         <Link
                                    onClick={toggleModal}
                                    href="stores"
                                    className={`${styles.link}`}
                                >
                                  📍NUESTRAS TIENDAS📍
                                </Link>

                    </div>}
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
                                    onClick={toggleModal}
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
            </div>
        </nav>
    )
}

export default Nav