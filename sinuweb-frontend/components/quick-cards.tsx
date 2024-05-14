import Image from "next/image";
import img1 from "@/assets/advice.jpeg"
import img2 from "@/assets/calendar.jpg";
import img3 from "@/assets/imgs/smiling-students-studying.webp"
import temaBg from '@/assets/tema-bg.svg';
import Link from "next/link";

const boxes = [
   {
    key: 1,
    name: 'I want some advice',
    about: 'get in touch with a counsellor.',
    img: img1,
   },
   {
    key: 1,
    name: 'Key dates',
    about: 'get in touch with a lecturer.',
    img: img2,
   },
   {
    key: 1,
    name: 'I want to apply',
    about: 'get in touch with a lecturer.',
    img: img3,
   }
]

function QuickCards() {
    return ( 
        <section className="relative" >
            <div className=" m-auto  z-30 absolute w-full xl:px-28">
                <div className="p-6  m-auto -translate-y-20  text-center font-bold leading-tight tracking-tight sm:leading-none">
                    
                    <div className="flex justify-evenly text-white gap-20">
                        {boxes.map(box => (
                            <div key={box.key} className=" border-t-2 border-white relative flex flex-col text-slate-800 flex-1 text-start border-b shadow-lg bg-white">
                                
                                <Image
                                    className="absolute bottom-0  right-0 bg-contain z-30 translate-y-5"
                                    src={temaBg}
                                    alt="tema"
                                    height={250}
                                />

                                <Image className="min-h-96 max-h-96 object-cover" src={box.img} alt="Card Image"/>
                                <div className="bg-white py-16 pl-6 -translate-x-6 -translate-y-12 text-slate-700">
                                    
                                    <h3 className=" md:text-3xl ">
                                        <Link className="hover:border-b hover:border-b-sinu-yellow hover:text-slate-500" href={""}>
                                        {box.name}
                                        </Link>
                                    </h3>
                                    
                                    <p className=" font-light mt-4 pl-2">{box.about}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
     );
}

export default QuickCards;