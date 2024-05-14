import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import News from "@/components/latest-news/news";


const railway = Raleway({ subsets: ["latin"], weight: ["400","800"]});

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
      <body className={railway.className}>
        
        <Header/>
        {children}
        <Footer/>  
      </body>
    </html>

  );

}
