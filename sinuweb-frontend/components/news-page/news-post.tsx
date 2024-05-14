import NewsDate from "@/ui/news-date";
import NewsTitle from "@/ui/news-title";
import Link from "next/link";
import facebookIcon from "@/assets/icons/facebook-color.svg";
import linkedInIcon from "@/assets/icons/linkedin.svg";
import XIcon from "@/assets/icons/x-social-media-round-icon.svg";
import newsImage from "@/assets/imgs/events/event1.jpg";
import Image from "next/image";

async function NewsPost({post}: any) {

    return ( 
        <div 
            className="min-h-20 flex-1 p-6 bg-white flex flex-col gap-y-10 "
        >

            <div className="border-b-2  border-b-gray-300   flex flex-col gap-y-6 py-6 relative">

                <NewsTitle>
                    {post.title}
                </NewsTitle>

                <span className="h-1 rounded-lg w-1/5 bg-slate-400"></span>

                <NewsDate>
                    {post.date}
                </NewsDate>

                <div className=" absolute right-0 bottom-5 p-2  flex gap-x-4">
                   
                    <Link 
                        href="" 
                        className="flex bg-[#1877f2] text-white  p-2 rounded-sm"
                    >
                        <Image
                            className="block" 
                            src={facebookIcon} alt=''
                            height={20}
                        />
                        <span className=" text-sm opacity-90 font-semibold" >share</span>
                    </Link>

                    <Link 
                        href="" 
                        className="flex bg-[#0073b1] text-white  p-2 rounded-sm gap-1"
                    >
                        <Image
                            className="block" 
                            src={linkedInIcon} alt=''
                            height={20}
                        />
                        <span className=" text-sm opacity-90 font-semibold" >share</span>
                    </Link>

                    <Link 
                        href="" 
                        className="flex bg-[#000000] text-white  p-2 rounded-sm gap-1"
                    >
                        <Image
                            className="block" 
                            src={XIcon} alt=''
                            height={20}
                        />
                        <span className=" text-sm opacity-90 font-semibold" >share</span>
                    </Link>

                </div>

            </div>
           
           
           <div> 
                <div className="float-end ms-10 mb-12 me-4">
                <Image 
                    src={newsImage} 
                    alt={'news image'}
                    className=" "
                    width={400} 
                />
                </div>
                <div 
                    className="text-gray-700 tracking-wide line-loose"  
                    dangerouslySetInnerHTML={{ __html: post.body }}
                >
                </div>
            </div>

        </div>
     );
}

export default NewsPost;