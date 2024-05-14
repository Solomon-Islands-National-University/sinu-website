import Image from "next/image";
import MainHeader from "@/components/header/header";
import Hero from "@/components/hero/hero";
import { useRef, useEffect } from "react";
import CourseSearch from "@/components/course-search";
import News from "@/components/latest-news/news";
import Events from 	"@/components/events";
import Footer from "@/components/footer/footer";
import QuickCards from "@/components/quick-cards";
import Discover from "@/components/discover";
import FeesKeydates from "@/components/fees-keydates";


export default function Home() {


  return (
    <>
      
      <Hero/>
      <QuickCards/>
      <CourseSearch/>
      <Discover/>
      <FeesKeydates/>
      <Events/>
      <News/>  
      
    </>
  );
}
