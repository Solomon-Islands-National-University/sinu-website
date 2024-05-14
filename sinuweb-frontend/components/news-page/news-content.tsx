import Container from "@/ui/container";
import Image from "next/image";
import bgImg from "@/assets/bg/news-page-bg.svg"

function NewsContent({children}: any) {
    return ( 
        // 
        <section className="relative bg-[#e7e8eb] min-h-96 py-16 ">
            <Container>
                <div className="flex px-52 gap-4 z-20">
                    
                    {children}

                </div>
            </Container>
            <div className="absolute top-0  h-full ">
                <Image  src={bgImg} alt="bg-img"/>
            </div>
           
        </section>
     );
}

export default NewsContent;