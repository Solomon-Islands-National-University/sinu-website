import { Raleway } from "next/font/google";
const railway = Raleway({ subsets: ["latin"], weight: ["400","800"]});

function HeroText(text: any) {
    return ( 
        <h1 className={`${railway.className} px-4 3xl:-mt-2 text-4xl text-center sm:text-start sm:text-6xl md:text-huge 2lg:text-massive font-bold capitalize leading-relaxed tracking-tighter mb-2`}>
            your future is our commitment           
        </h1>
     );
}

export default HeroText;