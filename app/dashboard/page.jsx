'use client'

import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { IoNotificationsCircleSharp } from "react-icons/io5";

function Page() {
	const currentDate = new Date();
	const Day = currentDate.getDay();
	const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const dayOfWeekString = days[Day];
	const date = currentDate.getDate();

	return (
		<div className="bg-[#EDF6F5]">	
				<div className=" rounded-3xl ">
                    <div className="flex mt-14 justify-between">
                        <div className="flex flex-col lg:ml-20 ml-6 max-w-fit ">
                            <p className="text-5xl">{dayOfWeekString}</p>
                            <p className="text-6xl">{date}</    p>
                        </div>

                        <div className="flex flex-col ">
                            <span className="bg-[#66CDCC] text-4xl h-16 w-72 rounded-3xl flex items-center justify-center "><p className="w-fit">Your Patient</p></span>
                            
                            <span className="bg-[#66CDCC] text-4xl mt-10 h-24 w-72 rounded-3xl flex items-center justify-center "><p className="w-fit">Your Patient</p></span>
                        </div>
                        <div className="flex flex-col lg:mr-72 ">
                            <span className="bg-[#66CDCC] max-w-fit">Your Patient</span>
                        </div>
                        
                    </div>

				</div>
			</div>
		
	);
}
export default Page;
