import { gql } from '@apollo/client';
import createApolloClient from '@/lib/apollo/client'
import { Suspense } from 'react';
import NewsItem from './news-item';

// const fetchLatestNews = async() => {
    
//     const count = 4;

//     const QUERY = gql`
//       query News {
//         news(count: ${count}) {
//             id
//             customTitle
//             date
//             slug
//             body
//         }
//      }
//     `;
  
//     const client = createApolloClient();
//     const{ data, loading, networkStatus } = await client.query({
//         query: QUERY,
//         context: {
//             fetchOptions: {
//                 next: {
//                     revalidate: 5,
//                 }
//             }
//         }
//         // fetchPolicy: 'no-cache', // Ensure fresh data on each request // does not work as expected.
//     });

//     return data.news;
// }


// START TEST
async function fetchLatestNews() {

    const response = await fetch("http://backend:8000/api/graphql/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query News {
        news(count: 4) {
            id
            customTitle
            date
            slug
            body
            paragraph
        }
     }
        `,
      }),
      cache: 'no-store',
    });
    
    const { data } = await response.json();
    return data.news;

}

// END TEST

async function LatestNews(){

    let hasNews = false;
    const news = await fetchLatestNews();
    if (news.length > 0){
        hasNews = true;
    }

    return (
        <>
        {!hasNews && <p className="text-white">There are no news.</p>}
            
            
            {hasNews && news.map((newsItem: any) => {
                return <NewsItem key={newsItem.id} item={newsItem}/>
            })}
        </>
    )
}


// const fetchObjects = async() => {
    
//     const res = await fetch(`http://backend:8000/api/v2/pages/?${new URLSearchParams({
//             type: "news.NewsPostPage",
//             fields: ["date", "body"].join(),
//             limit: '4',
//             order: '-first_published_at',
//         })}`, 
//         { cache: 'no-store' },
//     )

//     if (!res.ok){
//         throw new Error('Failed to fetch objects');
//     }

//     const data = await res.json();
//     return data.items;
// }



// const MyObjects = async() => {
//     const objects = await fetchObjects();
    
//     return (
//        <>
//        {objects.map((obj: any) => {
//         return <div key={obj.title} className=' text-white font-bold bold p-5 border h-fit'>Im an item</div>
//        })}
//        </>
//     )
// }


function NewsContent() {

    return ( 
        <section className="flex gap-x-10 w-full">

            <Suspense fallback={<p> retrieving latest news </p>} >
                <LatestNews />
            </Suspense>
            
        </section>
     );
}

export default NewsContent;