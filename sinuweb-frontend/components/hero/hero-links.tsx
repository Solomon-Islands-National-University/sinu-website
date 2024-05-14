import Link from "next/link";

function HeroLinks() {
    return ( 
        <div className="gap-4 flex flex-col lg:flex-row p-4">
            <Link className="shadow-cyan-500/50 bg-cyan-300 p-3 text-center text-lg text-black flex-grow rounded-md" href={""}>
                Study with us in 2025
            </Link>
            <Link className="shadow-cyan-500/50 bg-cyan-800 text-white p-3 text-center text-lg flex-grow rounded-md" href={""}>
                Get Advice
            </Link>
        </div>
     );
}

export default HeroLinks;