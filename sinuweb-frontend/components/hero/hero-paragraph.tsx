import { Raleway } from "next/font/google";
const railway = Raleway({ subsets: ["latin"], weight: ["400"]});

function HeroParagraph(paragraph: any) {
    return ( 
        <p className={`${railway.className} lg:mb-10 2lg:mb-14 sm:ml-5 lg:ml-0 2xl:ml-4 font-extralight text-md sm:text-lg lg:text-xl opacity-4 sm:border-l-4 pl-4 text-slate-100`}>
            {paragraph.paragraph}
            Solomon Islands National University has reinforced its position as a leading institution in the Pacific region. This achievement confirms our commitment to progress and our dedication to building a better future for everyone.
        </p>
     );
}

export default HeroParagraph;