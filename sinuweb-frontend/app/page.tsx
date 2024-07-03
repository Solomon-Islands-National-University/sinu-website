import Hero from "@/components/hero/hero";
import CourseSearch from "@/components/course-search";
import News from "@/components/latest-news/news";
import Events from 	"@/components/events";
import QuickCards from "@/components/quick-cards";
import Discover from "@/components/discover";
import FeesKeydates from "@/components/fees-keydates";


export default function Home() {

  return (
    <>
      
      <Hero/>
      {/* <QuickCards/> */}
      <CourseSearch/>
      {/* <Discover/> */}
      {/* <FeesKeydates/> */}
      {/* <Events/> */}
      <News/>  
      
    </>
  );
}
