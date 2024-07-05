import styles from "./Header.module.css"
import Nav from './Nav'
import { PROJECT_NAME } from '@/contast'
import Search from './Search'
import ShoppingCart from './ShoppingCart'
import Link from "next/link"
import BannerCarousel from "./BannerCarousel"

function Header() {


  return (
    <header className={styles.header}>
    <BannerCarousel/>
      <div className={styles.principal}>
      <Nav/>
        <Link className={styles.link}  href="/">
        <h1 className={styles.title}>
        {PROJECT_NAME.toLocaleUpperCase()}
        </h1>
        </Link>
        <div className={styles.right}>
           <Search/>
           <ShoppingCart/> 
        </div>
      </div>
    </header>
  )
}

export default Header