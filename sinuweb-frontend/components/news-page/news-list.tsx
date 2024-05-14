import NewsItem from "./news-item";
import { getNewsList } from "@/lib/news";
import NewsPaginator from "./news-paginator";

async function NewsList() {

    const news = await getNewsList();
    
    if (!news || !Array.isArray(news)) {
        return;
    }

    return ( 
        <div 
            className=" min-h-20 flex-1 p-4 bg-white flex flex-col gap-y-10 z-10"
        >
        
           {
           news.map((newsItem: any) => (
                <NewsItem item={newsItem} key={newsItem.id}/>
            ))
            }

            <NewsPaginator/>

        </div>
     );
}

export default NewsList;