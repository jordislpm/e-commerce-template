
import HomeSection from "@/sections/Home";
import styles from "./page.module.css";
import HeroHome from "@/sections/Home/HeroHome";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroHome/>
      <HomeSection/>
    </main>
  );
}
