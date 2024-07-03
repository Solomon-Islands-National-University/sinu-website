import chevronIcon from '@/assets/icons/chevron-right.svg';
import Image from 'next/image';
import Link from 'next/link';
import NewsButton from './news-button';


function NewsPaginator({pageInfo}: {pageInfo: any}) {

    // @todo these values should be handed down through props, along with API urls.
    let hasNext = false;
    let hasPrevious = false;
    
    console.log(pageInfo)
    if(pageInfo.hasNext){
        console.log(`HAS NEXT PAGE: ${pageInfo.hasNextPage}`)
        hasNext = true;
    }
    if(pageInfo.hasPrevious){
        console.log(`HAS PREVIOUS PAGE: ${pageInfo.hasPreviousPage}`)
        hasPrevious = true;
    }
    
    return ( 
        <div className=" flex justify-center mb-6 gap-x-2">
    
               { hasPrevious && <NewsButton toPage={pageInfo.currentPage - 1} title={'previous'} />}
               { hasNext && <NewsButton toPage={pageInfo.currentPage + 1} title={'next'}  />}
                
        </div>
     );
}

export default NewsPaginator;