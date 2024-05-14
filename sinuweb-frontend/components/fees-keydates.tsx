import Link from "next/link";

function FeesKeyDates() {
    return (  
        <section className="px-28 py-24 bg-slate-50 flex gap-5 justify-evenly">
            <Link href={""}>
                <div className="border px-20 py-5 text-2xl font-bold bg-sinu-light-dark-green text-white">
                    Fees & funding
                </div>
            </Link>
          
            <div className="border px-20 py-5 text-2xl font-bold bg-slate-400">
                Key dates
            </div>
            <div className="border px-20 py-5 text-2xl font-bold bg-sinu-yellow">
                Study counselling
            </div>
        </section>
    );
}

export default FeesKeyDates;  