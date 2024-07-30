import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import styles from "./page.module.css"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "algodonia",
  description: "algodonia E-commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <div className={styles.content}>
        {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
