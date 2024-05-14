import Link from "next/link";

function BreadCrumb() {
    return ( 
        <section className="lg:px-28 bg-[#224d5b]">
            <ul className="flex gap-3 px-8 py-3">
                <li className="text-white flex align-center gap-x-2"> 
                    <Link href={'/'} className=" text-sm"> Home</Link>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={3} 
                        stroke="currentColor" 
                        className="w-4 h-full opacity-50"
                        >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="m8.25 4.5 7.5 7.5-7.5 7.5" 
                        />
                    </svg>

                </li>
                <li className="text-white flex align-center gap-x-2"> <Link href={'/'} className=" text-sm"> News</Link></li>
            </ul>
        </section> 
    );
}

export default BreadCrumb;