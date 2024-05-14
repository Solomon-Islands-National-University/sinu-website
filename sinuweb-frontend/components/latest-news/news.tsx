import Image from "next/image";

import { getFirst20Words, formatDate } from "@/utils/utils";
import NewsTitle from "./news-title";
import { FetchLatestNews } from "@/lib/news";


async function News() {

    const data = await FetchLatestNews();

    // Check if data is an empty object or if data.items is not an array
    if (!data || !Array.isArray(data.items) || data.items.length === 0) {
        return;
    }
    
    const newsItemLatest = data.items[0];
    const newsItemRecent1 = data.items[1];
    const newsItemRecent2 = data.items[2];
    const newsItemRecent3 = data.items[3];

    return ( 
        <section 
            className="px-6 xl:px-28 py-20 bg-sinu-dark-green "
            >
            
            <NewsTitle/>
            

            <div 
                className=" min-h-96 grid grid-cols-12 grid-rows-14  mt-16 py-1   border-b border-slate-500 gap-6 pb-12 ">
                
            

                <div className="   col-span-7 row-span-full  ">
                    
                    <div className="flex flex-col gap-6" >
                        
                        <div className="w-full" style={{height:"650px"}}>
                            <Image 
                                className="w-full h-full"
                                src={newsItemLatest.news_image.full_url}
                                alt={newsItemLatest.news_image.alt}
                                height={newsItemLatest.news_image.height}
                                width={newsItemLatest.news_image.width}
                                />
                        </div>
                        
                        <div className="pl-2 text-white">
                            <h3 className=" text-2xl mb-2"> {newsItemLatest.title} </h3>
                            
                            <div 
                                dangerouslySetInnerHTML={{ 
                                    __html: [getFirst20Words(newsItemLatest.body), '...'].join('') 
                                }} 
                            />
                            
                            <span className="font-light text-slate-300">{formatDate(newsItemLatest.date)}</span>
                        </div>

                    </div>

                </div>
                
                <div className="col-span-5 gap-1">
                    


                    <div className="  col-span-6 border-b border-slate-500  pb-5">


                        <div className="flex flex-col gap-8" >
                            
                            <div className="w-full " style={{height:"360px"}}>
                            <Image 
                                className="w-full h-full"
                                src={newsItemRecent1.news_image.full_url}
                                alt={newsItemRecent1.news_image.alt}
                                height={newsItemRecent1.news_image.height}
                                width={newsItemRecent1.news_image.width}
                                objectFit="cover"
                                />
                            </div>
                            
                            <div className="text-white">
                                <h3 className=" text-2xl mb-2">
                                    {newsItemRecent1.title}
                                </h3>
                                
                                <span className="font-light text-slate-300">
                                    {formatDate(newsItemLatest.date)}
                                </span>
                            </div>
                        </div>


                    </div>



                    <div className="   col-span-6 border-b border-slate-500  pb-5  pt-5 ">

                      
                        <div className="flex flex-col gap-8 " >
                            
                            
                            <div className="text-white">
                                <h3 className=" text-xl mb-2">
                                    {newsItemRecent2.title}    
                                </h3>
                                
                                <span className="font-light text-slate-300">
                                {formatDate(newsItemRecent2.date)}
                                </span>
                            </div>
                        </div>
                   

                    </div>

                 
                   <div className="   col-span-6  pb-5 pt-5 ">

                       
                        <div className="flex flex-col gap-8 " >
                            
                            <h3 className=" text-2xl mb-2 text-white">
                            {newsItemRecent3.title}
                            </h3>
                            
                            <span className="font-light text-slate-300">
                            {formatDate(newsItemRecent3.date)}
                            </span>                            

                        </div>
                       

                    </div>
                 
                </div>

            </div>

        </section>
     );
}

export default News;