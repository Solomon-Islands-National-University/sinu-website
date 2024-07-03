import Image from "next/image";
import img from "@/assets/imgs/students-studying.webp";
import Link from "next/link";

function NewsItem({item}: any) {
    
   
    return ( 
        <Link href={`news/${item.slug}`} className="flex gap-x-4 p-2 ">
        <div className="">
            <Image 
                src={img} alt='' 
                width={230}
                height={250}
                className="hover:scale-110"
            />
        </div>    
        
        <div className="flex-1 border-b">
            <div className=" text-gray-400">
                <span className=" font-bold capitalize">press release</span> {item.date}
            </div>
            <h6 className="mt-2 font-bold text-xl text-sinu-blue hover:opacity-80">
                {item.title}
            </h6>
            <p className="py-4 text-gray-600">
            Sample body text.
            </p>
        </div>
    </Link>
     );
}

export default NewsItem;