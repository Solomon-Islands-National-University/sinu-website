import Image from "next/image";
import temaBg from '@/assets/tema-bg.svg';
import matBg from '@/assets/mat-bg.svg';

function CourseSearch() {
    return ( 
        <>
        <section className="  relative flex flex-col justify-center  py-12 xl:py-20 z-10 xl:pt-[650px] xl:pb-36 ">
            
            {/* <Image
                className="absolute w-full h-full bottom-0  bg-contain"
                src={temaBg}
            /> */}

            <div className=" z-30 flex flex-col gap-16      xl:px-44 ">
                


                <h1 className="flex flex-col xl:flex-row text-3xl lg:text-5xl text-gradient bg-gradient-to-r from-[#22809E] via-[#1F4754] to-sinu-yellow xl:gap-x-4 xl:justify-start ">
                    <span className="inline-block mb-4 ">Find a program thats right for you.
                    </span> 
                    
                </h1>


                <div className="py-8 flex flex-col lg:flex-row xl:p-16 p-4  gap-6 bg-sinu-dark-green   ">
                    <select className="p-4 text-white bg-sinu-light-dark-green " name="" id="">
                        <option value="">
                            select course type
                        </option>
                    </select>
                    <input className="p-4 flex-grow" type="text" placeholder="Enter course, subject, or keyword" />
                    <button className="p-4 bg-bright-blue text-white">
                        <span>search for it</span>

                    </button>
                </div>
            </div>
            
            {/* Put this in another component */}

            {/* <div className="py-14 z-30 p-4 xl:py-8  xl:px-40 bg-white mb-8">
                <h1 className="text-2xl py-4  text-sinu-light-dark-green font-bold">What can I study?</h1>
                <p className="py-4 text-lg font-light text-black">
                In our institution, our student body embodies a tapestry of diversity,
                enriching our academic landscape. We proudly offer an extensive selection
                of degree programs, certificates, and diplomas to cater to diverse interests
                and aspirations. Our emphasis on smaller class sizes fosters personalized attention
                from faculty, cultivating an environment conducive to collaboration and growth.
                </p>

                <div className="mt-10 grid grid-cols-3 grid-rows-3 gap-x-16 gap-y-2 text-xl text-sinu-light-dark-green">
                    <div className="border-b p-8 pl-0 hover:pl-8 rounded-t  cursor-pointer hover:animate-pulse hover:bg-slate-100">
                        Arts
                    </div>
                    <div className="border-b  cursor-pointer hover:animate-pulse p-8 pl-0 hover:pl-8 hover:bg-slate-50">
                        Communication
                    </div>
                    <div className="border-b cursor-pointer hover:animate-pulse p-8 pl-0 hover:pl-8 hover:bg-slate-50">
                        Business Management
                    </div>
                    <div className="border-b  cursor-pointer hover:animate-pulse p-8 pl-0 hover:pl-8 hover:bg-slate-50">
                        Computer Science
                    </div>
                    <div className="border-b  cursor-pointer hover:animate-pulse p-8 pl-0 hover:pl-8 hover:bg-slate-50">
                        Engineering
                    </div>
                    <div className="border-b cursor-pointer hover:animate-pulse p-8 pl-0 hover:pl-8 hover:bg-slate-50">
                        Environment
                    </div>
                    <div className="border-b  cursor-pointer hover:animate-pulse p-8 pl-0 hover:pl-8 hover:bg-slate-50">
                        Education & Training
                    </div>
                    <div className="border-b cursor-pointer hover:animate-pulse p-8 pl-0 hover:pl-8 hover:bg-slate-50">
                        Health
                    </div>
                    <div className="border-b  cursor-pointer hover:animate-pulse p-8 pl-0 hover:pl-8 hover:bg-slate-50">
                        Nursing
                    </div>
                </div>

            </div> */}

        </section>
        </>
     );
}

export default CourseSearch;