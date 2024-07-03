import NewsContent from "@/components/news-page/news-content";
import NewsFilter from "@/components/news-page/news-filter";
import NewsPost from "@/components/news-post/news-post";
import { getPost } from "@/lib/news";
import { Suspense } from "react";



function Page({params}: {params: {slug: string}}) {
    
    
    return ( 
        <>
            <NewsContent>
                <NewsFilter/>
                <NewsPost slug={params.slug}/>
            </NewsContent>
        </>
     );
}

export default Page;