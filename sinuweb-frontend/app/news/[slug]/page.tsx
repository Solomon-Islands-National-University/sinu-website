import NewsContent from "@/components/news-page/news-content";
import NewsFilter from "@/components/news-page/news-filter";
import NewsPost from "@/components/news-page/news-post";
import { getPost } from "@/lib/news";

async function NewsPostPage({params}: {params: {slug: string}}) {
    
    const post = await getPost(params.slug);
    
    return ( 
        <>
            <NewsContent>
                <NewsFilter/>
                <NewsPost post={post}/>
            </NewsContent>
        </>
     );
}

export default NewsPostPage;