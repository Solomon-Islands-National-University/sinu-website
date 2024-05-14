import Container from "@/ui/container";
import Image from "next/image";
import img from "@/assets/imgs/events/event1.jpg";


function NewsHeader() {
    return ( 
        // bg-[#295c6d] 
        <section className=" text-white relative">
            <Container>
            
            <div className=" py-32 pt-16 px-52 ">
                <h1 className="py-4  lg:text-6xl font-bold leading-relaxed tracking-wider xl:text-5xl capitalize">
                    News and Updates
                </h1>

                <p className="text-2xl py-2">Read all the latest news and updates in and around the university.</p>
            </div>
            </Container>

            <div className="absolute min-h-14 bg-slate-500 top-0 -z-10 w-full ">
                <Image src={img} alt="" className=" object-cover w-full h-full" />
            </div>
            <div className="absolute min-h-14 bg-sinu-dark-green top-0 -z-10 w-full h-full opacity-85">
                
            </div>
        </section>
     );
}

export default NewsHeader;