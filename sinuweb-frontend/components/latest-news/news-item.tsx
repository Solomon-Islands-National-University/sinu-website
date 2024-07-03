import Link from "next/link";
import { Raleway, Roboto } from "next/font/google";
const raleway = Raleway({ subsets: ["latin"], weight: ["400","800"]});
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"]});
import newsImage1 from "@/assets/imgs/ocean.png";
import Image from "next/image";

function NewsItem({item}: {item: any}) {
    return ( 
        <Link href={`/news/${item.slug}`}>
            <div className=" max-w-96 pb-4 border-b border-b-slate-400">
                <Image className="" src={newsImage1} alt="some-alt" ></Image>
                <div className={`${raleway.className} text-white py-4 px-1 flex flex-col gap-y-8`}>
                    <h3 className="mt-4 text-2xl leading-snug font-bold capitalize underline underline-offset-8">{item.customTitle}</h3>
                    <span className="inline-block text-md font-light">{item.date}</span>
                    <p>Transform Aqorau has expressed utter disapointement towards Staff of the ICT Deparment at SINU. Speaking to </p>
                </div>
            </div>
        </Link>
     );
}

export default NewsItem;