import { GetServerSideProps } from 'next';
import HomeCatalog from "@/sections/Home/HomeCatalog";
import styles from "./page.module.css";
import HeroHome from "@/sections/Home/HeroHome";
import { helebba } from '@/apiContast';
import HomeCategories from '@/sections/Home/HomeCategories';



export default function Home() {
  return (
    <main className={styles.main}>
      <HeroHome/>
      <HomeCatalog/>
      <HomeCategories/>
    </main>
  );
}

