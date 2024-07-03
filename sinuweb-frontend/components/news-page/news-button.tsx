import Link from "next/link";

function RightChevronIcon(){
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className=""
    >
        <polyline points="9 18 15 12 9 6" />
    </svg>
    )
}

// async function getNextPage(){
//     const response = await fetch("http://backend:8000/api/graphql/", {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           query: `
//            query NewsNodes {
//       newsNodes(first: 2 after: "YXJyYXljb25uZWN0aW9uOjE=") {
//           edges {
//               node {
//                   title
//                   body
//                   date
//                   id
//                   slug
//               }
//           }
//           pageInfo {
//               hasNextPage
//               hasPreviousPage
//               startCursor
//               endCursor
//           }
//       }
//   }
//           `,
//         }),
//         cache: 'no-store',
//       });
      
//       const { data } = await response.json();
//       console.log(data.newsNodes.edges);
//       return data.newsNodes;  
// }

async function NewsButton({title, toPage}: {title: string, toPage: number}) {

    let isPrevious = false;
    let isNext = false;
    let href = '';

    if(title === 'previous'){
        isPrevious = true;
        href = `/news?page=${toPage}`
    }
        

    if(title === 'next'){
        isNext = true;
        href = `/news?page=${toPage}`
    }
        

    return (
        <Link 
        href={href}
        className="rounded-lg border-2 p-4 hover:text-white hover:border-transparent hover:bg-sinu-dark-green capitalize border-black font-bold flex gap-4 px-6"
        >
        
        { isPrevious && <RightChevronIcon/> }

        <span>{title}</span>
        
        { isNext && <RightChevronIcon/> }

    </Link>
    );
}

export default NewsButton;