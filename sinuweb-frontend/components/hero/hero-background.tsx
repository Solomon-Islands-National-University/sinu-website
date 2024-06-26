import Image from "next/image";
import heroImage from '@/assets/hero-bg.jpg';
import transparentImage from '@/assets/transparent-img.svg';
import siMap from '@/assets/si-map.svg';


function HeroBackground() {
    
    return (  
        <>
           <Image 
                className="absolute hidden md:block bg-cover h-full  w-full object-cover"  
                src={heroImage}
                alt=""
            />

            <Image 
                className="hidden md:block absolute bg-cover h-full  w-full object-cover"  
                src={transparentImage}
                alt=""
            />

            <Image 
                className="absolute  -translate-y-18 bg-center w-full h-full object-contain"  
                src={siMap}
                alt=""
            />
        </>
    );
}
    
export default HeroBackground;