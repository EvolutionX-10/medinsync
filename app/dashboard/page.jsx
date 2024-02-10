'use client'

import Image from "next/image";
import Navbar from "@/components/Navbar2";
function Page() {
    const currentDate = new Date();
    const Day = currentDate.getDay();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeekString = days[Day];
    const date = currentDate.getDate();

    return (
        <div className="">	
        
            {/* Navbar */}
            <Navbar />
            
            <div  className="flex flex-col lg:flex-row items-center ml-20 ">
                <div>
                    <p className="text-5xl">{dayOfWeekString}</p>
                    <p className="text-6xl">{date}</p>
                </div>
            </div><div  className="flex flex-col lg:flex-row items-center ml-20">
                <div>
                    <p className="text-5xl">{dayOfWeekString}</p>
                    <p className="text-6xl text-red-400">{date}</p>
                </div>
            </div>
            
        </div>
        
    );
}
export default Page;
