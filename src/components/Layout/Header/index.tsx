import styles from "./Header.module.css"
import Nav from './Nav'
import { PROJECT_NAME } from '@/contast'
import Search from './Search'
import ShoppingCart from './ShoppingCart'
import Link from "next/link"

function Header() { 
  return (
    <header className={styles.header}>
        <Nav/>
        <Link className={styles.link}  href="/">
        {PROJECT_NAME.toLocaleUpperCase()}
        </Link>
        <div className={styles.right}>
           <Search/>
           <ShoppingCart/> 
        </div>
    </header>
  )
}

export default Header