import newsImage1 from "@/assets/imgs/ocean.png";
import Container from "@/ui/container";
import { Raleway } from "next/font/google";
import NewsContent from "./news-content";
const raleway = Raleway({ subsets: ["latin"], weight: ["400","800"]});

function News() {

    return ( 
        <div className={`${raleway.className} bg-sinu-dark-green py-16`}>
            <Container>
                
                <h1 className="mb-10 text-2xl text-center xl:text-left text-white text-title font-bold border-b border-b-gray-600 pb-8">
                    Latest News
                </h1>

              <NewsContent/>

            </Container>
        </div>
     );
}

export default News;









// import { FetchLatestNews } from "@/lib/news";
// import { getFirst20Words, formatDate } from "@/utils/utils";

// async function getLatestNews(){
    
//     const data = await FetchLatestNews();

//     // Check if data is an empty object or if data.items is not an array
//     if (!data || !Array.isArray(data.items) || data.items.length === 0) {
//         return <p>No News</p>;
//     }

//     const newsItemLatest = data.items[0];
//     const newsItemRecent1 = data.items[1];
//     const newsItemRecent2 = data.items[2];
//     const newsItemRecent3 = data.items[3];
// }
