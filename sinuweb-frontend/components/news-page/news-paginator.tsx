import chevronIcon from '@/assets/icons/chevron-right.svg';
import Image from 'next/image';
import Link from 'next/link';
import NewsButton from './news-button';


function NewsPaginator() {

    // @todo these values should be handed down through props, along with API urls.
    const hasNext = true;
    const hasPrevious = true;

    return ( 
        <div className=" flex justify-center mb-6 gap-x-2">
    
               { hasPrevious && <NewsButton url={'/news/?page=2'} title={'previous'} />}
               { hasNext && <NewsButton url={'/news/?page=2'} title={'next'} />}
                
        </div>
     );
}

export default NewsPaginator;