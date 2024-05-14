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

function NewsButton({title, url}: {title: string, url: string}) {

    let isPrevious = false;
    let isNext = false;

    if(title === 'previous')
        isPrevious = true;

    if(title === 'next')
        isNext = true;

    return (
        <Link 
        href={url}
        className="rounded-lg border-2 p-4 hover:text-white hover:border-transparent hover:bg-sinu-dark-green capitalize border-black font-bold flex gap-4 px-6"
        >
        
        { isPrevious && <RightChevronIcon/> }

        <span>{title}</span>
        
        { isNext && <RightChevronIcon/> }

    </Link>
    );
}

export default NewsButton;