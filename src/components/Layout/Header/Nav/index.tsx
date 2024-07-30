"use client"
import React, { useEffect, useState } from 'react'
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "./Nav.module.css"
import Link from 'next/link';
import { RouteProps, RoutesListType, SubRoutesProps } from '@/types';
import { Product, Category } from "helebba-sdk";
import useRoutesStore from '@/hooks/route/useProjectRoutes';
import { RoutesNav } from '@/contast';
import { useRouter } from 'next/navigation'
import useGlobalStores from '@/hooks/global-state/useGlobalStates';
import { normalizeString } from '@/services/format';
import { useGetCategoriesList } from '@/hooks/getData/useGetCategories';
import { useGetProductsList } from '@/hooks/getData/useGetProductsList';


interface NavProps{
    categories: Category[];
    products: Product[]
}

function Nav() {
    const {categoriesList}=useGetCategoriesList()
    const {productsList}=useGetProductsList()

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [subMenu, setSubMenu] = useState<{ route: String, state: boolean, subRoute: SubRoutesProps[] | undefined }>(
        {
            state: false,
            subRoute: [],
            route: ""
        }
    );
    const {setSlugForGetProduct} = useGlobalStores()
    const [slug, setSlug]= useState<string>("");
    const [searchParams, setSearchParams] = useState<URLSearchParams | null>(null);
    // const{oneProduct} = useGetProduct(slug);


    // new productsList


    // end new productsList
    const router = useRouter()

    const {routes, setRoutes}= useRoutesStore();

    useEffect(()=>{

        if (categoriesList && productsList){

        const categorieNames: string[] = categoriesList?.items.map((categorie)=>{
                    return categorie.name
        });


        const newRoutes: RouteProps[] = categoriesList?.items.map((categorie)=>{
         const index = RoutesNav.findIndex(item => normalizeString(categorie.name).includes(normalizeString(item?.route)));
         return RoutesNav[index]
        })

   
        productsList.items.forEach((product)=>{
            product.categories.forEach((productCategorie)=>{
            
                    if(categorieNames.includes(productCategorie.name)){
                     const index=  newRoutes.findIndex(item => normalizeString(item?.name).includes(normalizeString(productCategorie.name)))
                     const subRouteExist = newRoutes[index]?.subRoutes?.some(item => item.name === product.name)
                     if(newRoutes[index]?.subRoutes?.length === 0){
                        newRoutes[index]?.subRoutes.push({
                            name: "VER TODO",
                            route: newRoutes[index]?.route,
                            slug: ""
                        })
                     }
                     if (!subRouteExist){
                     newRoutes[index]?.subRoutes?.push(
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

        console.log("newRoutes",newRoutes)
        setRoutes(newRoutes)
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            setSearchParams(params);
          }
        }
    },[categoriesList, setRoutes, productsList])

    const toggleSubMenuState = () => {
        setSubMenu(prevState => ({
            ...prevState,
            state: !prevState.state
        }));
    };


    const navListClick = (actualRoute: RouteProps) => {

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

    const openProduct = (route: SubRoutesProps) => {

        if (route.name !== "VER TODO") {
            if (searchParams) {
                searchParams.set("product", route.slug);
                setSlugForGetProduct(route.slug)
                router.push(`/product?${searchParams}`);
                console.log("route.slug",route.slug)
              }
        } else {
            router.push(`${route.route}`);
        }
        toggleModal();
    }

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
                            route?.subRoutes.length < 1 ? (
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
                                    key={route?.name}
                                    onClick={() => navListClick(route)}
                                    className={`${styles.link} ${index > 0 ? styles.link_middle : ""}`}
                                >
                                    {route?.name}
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

                                <div
                                    onClick={()=>openProduct(route)}
                                    key={route.name}
                                    className={`${styles.link} ${styles.link_middle}`}
                                >
                                    {route.name}
                                        <IoIosArrowForward />
                                </div>
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