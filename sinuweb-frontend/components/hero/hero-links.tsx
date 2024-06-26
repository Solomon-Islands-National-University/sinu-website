import Link from "next/link";

function HeroLinks() {
    return ( 
        <div className="gap-4 flex flex-col lg:flex-row p-4">
            <Link className=" font-bold shadow-cyan-500/50 bg-white p-3 text-center text-lg text-cyan-500 border-2 border-cyan-500 flex-grow" href={""}>
                Learn More
            </Link>
        </div>
     );
}

export default HeroLinks;