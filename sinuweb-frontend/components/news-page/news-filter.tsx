import Link from "next/link";

function NewsFilter() {
    return ( 
        <div className="h-fit bg-[#f6f7f9] p-8 sticky top-0 z-10">
            <h6 className="font-bold text-lg text-slate-800">News Room</h6>
            <ul className="mt-7 flex flex-col gap-y-2">
                <li><Link className="text-slate-800" href="#">Press Release</Link></li>
                <li><Link className="text-slate-800" href="#">News</Link></li>
                <li><Link className="text-slate-800" href="#">VC&apos;s speech</Link></li>
                <li><Link className="text-slate-800" href="#">Journals</Link></li>
            </ul>
        </div>
     );
}

export default NewsFilter;