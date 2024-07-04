
import HomeCatalog from "@/sections/Home/HomeCatalog";
import styles from "./page.module.css";
import HeroHome from "@/sections/Home/HeroHome";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroHome/>
      <HomeCatalog/>
    </main>
  );
}
