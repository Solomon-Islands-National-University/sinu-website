import NewsItem from "./news-item";
import NewsPaginator from "./news-paginator";


async function fetchNews(pageParams: any=1) {

    
    let pageNumber = 1;
    let itemsPerPage = 1;
    
    if(pageParams.page){
        pageNumber = Number(pageParams.page);
        if(!isNaN(pageNumber)){
            pageNumber = pageNumber;
        } else {
            pageNumber = 1;
        }
    }
    
    let query = `
       query PagedNewsItems {
    pagedNewsItems(page: ${pageNumber}, itemsPerPage: ${itemsPerPage}) {
        page
        pages
        hasNext
        hasPrev
        objects {
            title
            slug
            body
            date
        }
    }
}


    `


    const response = await fetch("http://backend:8000/api/graphql/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: query,
      }),
      cache: 'no-store',
    });
    
    const { data } = await response.json();
    console.log(JSON.stringify(data))
    return data.pagedNewsItems;

}

async function NewsList({pageParams}: {pageParams: any}) {

    const nodes = await fetchNews(pageParams);
    const edges = nodes.objects;
    const pageInfo = {
        hasNext: nodes.hasNext,
        hasPrevious: nodes.hasPrev,
        currentPage: nodes.page,
    }
    
    return ( 
        <div 
            className=" min-h-20 flex-1 p-4 bg-white flex flex-col gap-y-10 z-10"
        >
        
           {
           edges.map((newsItem: any) => (
                <NewsItem item={newsItem} key={newsItem.slug}/>
            ))
            }

            <NewsPaginator pageInfo={pageInfo} />

        </div>
     );
}

export default NewsList;