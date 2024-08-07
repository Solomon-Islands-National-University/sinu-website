import NewsContent from "@/components/news-page/news-content";
import NewsList from "@/components/news-page/news-list";
import NewsFilter from "@/components/news-page/news-filter";
import Link from "next/link";
import Container from "@/ui/container";
import PageHeader from "@/components/page-header";
import { Suspense } from "react";


function NewsPage({searchParams}: {searchParams: any}) {
    
    return ( 
        <>
            <PageHeader 
                title="News & Updates" 
                subtitle="Read all the latest news and updates in and around the university" 
            />
            <div className=" min-h-4 py-8 bg-[#f6f7f9] border-b border-b-slate-300 shadow-lg">
                <Container>
                    <div className="flex justify-between px-44">
                        <div className=" font-bold capitalize text-xl">
                            <span>University </span> <span className="text-sinu-blue ml-1">news</span>
                        </div> 
                        <ul className=" flex gap-x-8">
                            <li><Link className="text-lg font-bold text-slate-600 border-b-4 rounded-sm border-sinu-blue py-3" href="#">News</Link></li>
                            <li><Link className="text-lg font-bold text-slate-500" href="#">Events</Link></li>
                            
                        </ul>
                    </div>
              
                </Container>
            </div>
            <NewsContent>
                <NewsFilter/>
                <Suspense fallback={<p>cant load news list</p>}>
                <NewsList pageParams={searchParams}/>
                </Suspense>
            </NewsContent>
            
        </>
     );
}

export default NewsPage;