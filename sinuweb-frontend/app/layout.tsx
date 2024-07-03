import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

// Fonts
import { Raleway, Roboto } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"]});
const railway = Raleway({ subsets: ["latin"], weight: ["400","800"]});
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"]});
import { Anton } from "next/font/google";
const anton = Anton({ subsets: ["latin"], weight: ["400"]});


export const metadata: Metadata = {
  title: "SINU - Solomon Islands National University",
  description: "The official website of Solomon Islands National University.",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  
  const handleBodyClick = (e: React.MouseEvent<HTMLBodyElement>) => {
    
    const target = e.target;
    console.log(target);
  }

  return (
    <html lang="en">
      <body className={` ${bebas.className} ${railway.className}`}>
        <Header/>
        {children}
        <Footer/>  
      </body>
    </html>

  );

}

export { roboto };