import { Suspense } from "react";
import HeroBackground from "./hero-background";
import HeroContent from "./hero-content";
import Container from "@/ui/container";



async function Hero() {

    return ( 

        <section 
            className="flex relative bg-sinu-dark-green bg-cover 
                       mix-blend-hard-light text-white h-screen-minus-6rem lg:h-screen-minus-11rem" 
            >
            
                <HeroBackground/>

           
            <div className="z-10 ">
                <Suspense fallback={<p>loading hero..</p>}>
                    <HeroContent/>
                </Suspense>
            </div>

        </section>
     );
}

export default Hero;