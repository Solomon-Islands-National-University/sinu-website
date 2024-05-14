import { DUMMY_NEWS } from "@/data/dummy";

/** If set to false, fetches will be made to the backend. */
const USE_DUMMY = true;

/** The backend domain */
const backendDomain = "http://localhost:8000";
const wagtailV2APIPagesPath = '/api/v2/pages';


async function getNewsList(){
    return fetchNews();
}


// this should take an argument called page
async function fetchNews(){
    
    const params = new URLSearchParams({
        type: "news.NewsIndexPage",
        fields: "posts"
    });

    try {
        const url = `${backendDomain}${wagtailV2APIPagesPath}/?${params}`;
        const response = await fetch(url);
        const data = await response.json();
        return data.items[0].posts;
    }
    catch(error){
        return {};
    }
}


async function FetchLatestNews(){
  
    try {
        const response = await fetch(`http://localhost:8000/api/v2/pages/?${new URLSearchParams({
            type: "news.NewsPage",
            fields: ["date", "body", "news_image"].join(),
            limit: '4',
            order: '-first_published_at',
        })}`);
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching latest news:", error);
        return {}; // Return empty object if there's an error
    }
}



async function getPost(slug: string){
    if(USE_DUMMY)
        return DUMMY_NEWS.find(item => item['slug'] === slug);
    return fetchPost(slug);
}


// const response = await fetch('http://localhost:8000/api/v2/pages/8/');
async function fetchPost(slug: string){

    const params = new URLSearchParams({
        type: "news.NewsPostPage",
        slug: slug,
        fields: ["date","body", "title"].join(), 
    });

    const url = `${backendDomain}${wagtailV2APIPagesPath}/?${params}`;

    const response = await fetch(url);

    const data = await response.json();
    return data.items[0];
}


async function fetchImage(url: string){
    const response = await fetch(url);
    const data = await response.blob();
    const imgUrl = URL.createObjectURL(data);
    return imgUrl;
  }
  

export { getNewsList, getPost, FetchLatestNews };