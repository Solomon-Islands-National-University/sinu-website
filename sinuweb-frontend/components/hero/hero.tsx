import { Suspense } from "react";
import HeroBackground from "./hero-background";
import HeroContent from "./hero-content";

async function Hero() {

    return ( 

        <section 
            className="flex relative bg-hero-image bg-contain bg-no-repeat bg-right
                       mix-blend-hard-light text-white " 
            >
            <HeroBackground/>
            <div className="flex flex-col lg:gap-24 py-16 lg:py-28 lg:w-1/2 lg:px-24 p-6 gap-14 z-10 
                            text-left"
            >
                
                <Suspense fallback={<p>loading hero..</p>}>
                    <HeroContent/>
                </Suspense>

            </div>           
        </section>
     );
}

export default Hero;