import Container from "@/ui/container";
import Link from "next/link";


function CourseSearch() {
    return ( 
 
        <section className="py-32">
            <Container>

                <div className="flex flex-col gap-y-16 items-center ">

                    <h1 className="font-bold text-title text-center text-sinu-dark-green">
                        Discover the right degree for you
                    </h1>

                    <div className="   xl:p-16 p-4  bg-sinu-dark-green w-2/3 rounded-lg">
                        
                        <div className="flex flex-col lg:flex-row gap-6">

                            <select className="p-4 text-white bg-sinu-light-dark-green " name="" id="">
                                <option value="">
                                    select course type
                                </option>
                            </select>
                            
                            <input className="p-4 flex-grow rounded-2xl" type="text" placeholder="Enter course, subject, or keyword" />
                            
                            <button className="px-10 p-4 bg-bright-blue text-white rounded-2xl">
                                <span>Search</span>
                            </button>

                        </div>

                        <div className="text-end mt-8">
                            <Link href={'/'} className="text-slate-300 font-extralight underline">View all courses</Link>
                        </div>
                        
                    </div>

                </div>
               
               

            </Container>
        </section>

     );
}

export default CourseSearch;