import transparentImage from '@/assets/transparent-img.svg';
import siMap from '@/assets/si-map.svg';
import Image from "next/image";


function HeroBackground() {
    
    return (  
        <>
            <Image 
                className="absolute bg-cover h-full  w-full object-cover"  
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