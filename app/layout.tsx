import type { Metadata } from "next";
import {  Bebas_Neue, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const beba = Bebas_Neue({ subsets: ["latin"], weight: "400",variable:"--font_bebas" });
const lato = Lato({subsets:["latin"], weight:["100","300","400","700","900"],variable: "--font_lato"})

export const metadata: Metadata = {
  title: "Servicio de diseño y desarrollo web",
  description: "servicio de diseño y desarrollo web a costo accesible para grande y pequeñas empresas creacion landingpages, eccomerce, sistemas administrativo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${beba.variable} ${lato.variable}`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
