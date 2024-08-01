import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import styles from "./page.module.css"
import TanstackProvider from "@/components/providers/TanstackProvider";



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
        <TanstackProvider>
        <Header/>
        <div className={styles.content}>
        {children}
        </div>
        <Footer/>
        </TanstackProvider>
      </body>
    </html>
  );
}
