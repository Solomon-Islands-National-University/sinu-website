import Image from "next/image";
import Link from "next/link";
import eventImg1 from "@/assets/imgs/events/event1.jpg";
import eventImg2 from "@/assets/imgs/events/event2.jpg";
import eventImg3 from "@/assets/imgs/events/event3.jpg";

const events = [
    {
        name: 'Academic advice online drop-in session',
        date: '10 jan 2024',
        location: 'lecture hall, kukum campus',
        image: eventImg1
    },
    {
        name: 'Physchology of Mathematics Education Conference',
        date: '14 jan 2024',
        location: 'lecture hall, kukum campus',
        image: eventImg2
    },
    {
        name: 'Panatina Campus Orientation',
        date: '17 jan 2024',
        location: 'lecture hall, panatina campus',
        image: eventImg3
    },
]

function Events() {
    return ( 
        <section className="px-2 py-28  xl:px-28 flex flex-col gap-16 border border-b-slate-100">
            <h3 className="text-center text-4xl font-extrabold xl:text-start  ">Upcoming events</h3>
            <ul className="flex flex-col xl:flex-row gap-5">
                {
                  events.map((event) => 
                    <li key={event.name}>
                        <div className=" flex-grow  rounded-md border border-t bg-slate-50">
                           
                            <div className="py-12 text-slate-800  flex gap-4 ">
                                
                                <div className="bg-sinu-blue text-white w-36 flex flex-col h-44 justify-evenly text-center">
                                    <span>Tue</span>
                                    <span className="text-4xl">14</span>
                                    <span className=" font-extrabold">Feb</span>
                                </div>
                                
                                
                                <div className="h-44 flex flex-col justify-evenly">
                                    <div><span>{event.location}</span></div>
                                    <h3 className="font-extrabold text-2xl ">{event.name}</h3>
                                    <Link href="">Learn more</Link>
                                </div>
                                
                            </div>
                            
                        </div>
                    </li>
                  )
                }
            </ul>
            <button className=" p-5 w-56 self-end border-2 border-slate-400 text-slate-600 -translate-x-40">
                Show more
            </button>
        </section>
    );
}

export default Events;