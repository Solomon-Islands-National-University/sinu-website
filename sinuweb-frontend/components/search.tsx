import Logo from "./header/logo";
import matImg from "@/assets/bg/mat.svg";
import Image from "next/image";

function Search({onClose}: any) {

    const handleOnClick = () => {
        onClose();
    }

    return ( 
        <div className="absolute lg:fixed flex flex-col gap-28 lg:px-28 z-50 start-0 top-0 end-0 bg-[#101921] h-full">
            
            <div
                className="px-8 flex mt-[84px] justify-between align-middle"
            >
                <Logo/>
                <button
                    onClick={handleOnClick} 
                    className=" w-6 xl:me-12 "
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke-width="5" 
                        stroke="currentColor" 
                        className=" w-full h-full font-extrabold"
                        >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <section className="flex px-8 xl:px-44  ">

                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={3} 
                    stroke="currentColor" 
                    className=" w-6 h-6 font-extrabold self-center"
                    >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" 
                    />
                </svg>

                <input 
                    type="text" 
                    className=" bg-transparent p-8 ps-4 text-3xl w-full outline-none placeholder:text-[#ffffff] placeholder:opacity-30 placeholder:font-bold" 
                    placeholder="Type to search..." 
                />
            </section>

            <section className="px-8 flex flex-wrap gap-x-20 gap-y-10 justify-start xl:justify-between xl:px-44">

                <div className=" text-left ">
                    <h6 className="uppercase text-sm opacity-40 py-4">Popular searches</h6>
                    <ul>
                        <li>
                            <a href="" className=" font-normal text-[16px] opacity-85">
                            Visits and open days
                            </a>
                        </li>
                        <li>
                            <a href="" className=" font-normal text-[16px] opacity-85">
                            Jobs and vacancies
                            </a>
                        </li>
                        <li>
                            <a href="" className=" font-normal text-[16px] opacity-85">
                            Accomodation
                            </a>
                        </li>
                    </ul>
                </div>

                <div className=" text-left ">
                    <h6 className="uppercase text-sm opacity-40 py-4">Study</h6>
                    <ul>
                        <li>
                            <a href="" className=" font-normal text-[16px] opacity-85">
                            Undergraduate
                            </a>
                        </li>
                        <li>
                            <a href="" className=" font-normal text-[16px] opacity-85">
                            Postgraduate
                            </a>
                        </li>
                        <li>
                            <a href="" className=" font-normal text-[16px] opacity-85">
                            International
                            </a>
                        </li>
                    </ul>
                </div>

                <div className=" text-left ">
                    <h6 className="uppercase text-sm opacity-40 py-4">Student life</h6>
                    <ul>
                        <li>
                            <a href="" className=" font-normal text-[16px] opacity-85">
                            Student Guide
                            </a>
                        </li>
                        <li>
                            <a href="" className=" font-normal text-[16px] opacity-85">
                            Library and IT
                            </a>
                        </li>
                        <li>
                            <a href="" className=" font-normal text-[16px] opacity-85">
                            Term dates
                            </a>
                        </li>
                    </ul>
                </div>

                <div className=" text-left ">
                    <h6 className="uppercase text-sm opacity-40 py-4">Research</h6>
                    <ul>
                        <li>
                            <a href="" className=" font-normal text-[16px] opacity-85">
                            Research Strengths
                            </a>
                        </li>
                        <li>
                            <a href="" className=" font-normal text-[16px] opacity-85">
                            Research Impacts
                            </a>
                        </li>
                        <li>
                            <a href="" className=" font-normal text-[16px] opacity-85">
                            REF 2021
                            </a>
                        </li>
                    </ul>
                </div>

                <div className=" text-left ">
                    <h6 className="uppercase text-sm opacity-40 py-4">Business</h6>
                    <ul>
                        <li>
                            <a href="" className=" font-normal text-[16px] opacity-85">
                            Partner with us
                            </a>
                        </li>
                        <li>
                            <a href="" className=" font-normal text-[16px] opacity-85">
                            employers
                            </a>
                        </li>
                        <li>
                            <a href="" className=" font-normal text-[16px] opacity-85">
                            Apprenticeships
                            </a>
                        </li>
                    </ul>
                </div>

            </section>

            <div className="hidden xl:block animate-move-up absolute start-0 bottom-0">
                <Image className=" opacity-5" src={matImg} alt="" />
            </div>

        </div>

    );
}

export default Search;