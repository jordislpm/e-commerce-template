import styles from "./Header.module.css"
import Nav from './Nav'
import { PROJECT_NAME } from '@/contast'
import Search from './Search'
import ShoppingCart from './ShoppingCart'

function Header() { 
  return (
    <header className={styles.header}>
        <Nav/>
        {PROJECT_NAME.toLocaleUpperCase()}
        <div className={styles.right}>
           <Search/>
           <ShoppingCart/> 
        </div>
    </header>
  )
}

export default Header