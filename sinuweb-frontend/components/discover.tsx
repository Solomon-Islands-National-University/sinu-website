import Image from "next/image";
import img1 from "@/assets/imgs/girl-smiling.jpg"
import img2 from "@/assets/students.jpg"
import img3 from "@/assets/research.jpg"
import temaBg from '@/assets/tema-bg.svg';
import Link from "next/link";


const boxes = [
    {
     key: 1,
     name: 'Learn about us',
     about: 'get in touch with a counsellor.',
     img: img1,
    },
    {
     key: 1,
     name: 'SINUSA',
     about: 'get in touch with a lecturer.',
     img: img2,
    },
    {
     key: 1,
     name: 'Research',
     about: 'get in touch with a lecturer.',
     img: img3,
    }
 ]

function Discover() {
    return ( 
        <section className="px-28 py-12">
             <h3 className="text-center text-4xl font-extrabold xl:text-start  pb-12">Discover SINU</h3>
             <div className="flex gap-24">
             {boxes.map(box => (
                <div key={box.key} className="  relative flex flex-col text-slate-800 flex-1 text-start ">
                    
                    

                    <Image className="min-h-96 max-h-96 object-cover" src={box.img} alt="Card Image"/>
                    <div className=" py-8   text-slate-700">
                        
                        <h3 className=" md:text-3xl font-extrabold">
                            <Link className="hover:border-b hover:border-b-sinu-yellow hover:text-slate-500" href={""}>
                            {box.name}
                            </Link>
                        </h3>
                        
                        
                    </div>
                </div>
                        ))}
             </div>
        </section>
     );
}

export default Discover;