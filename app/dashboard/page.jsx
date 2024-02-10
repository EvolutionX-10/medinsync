"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar2";
function Page() {
	const currentDate = new Date();
	const Day = currentDate.getDay();
	const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const dayOfWeekString = days[Day];
	const date = currentDate.getDate();

	return (
		<>
			<Navbar />
			<div className="">
				{/* Navbar */}

				<div className="flex flex-col lg:flex-row items-center ml-4 lg:ml-20 mt-40 ">
					<div>
						<p className="text-5xl">{dayOfWeekString}</p>
						<p className="text-6xl">{date}</p>
					</div>
                    <div className="w-[10vw]">
                        <span className="w-[10vw] h-10 rounded-full bg-[#66CDCC]">Your Doctor</span>
                        <span></span>
                    </div>
				</div>
			</div>
		</>
	);
}
export default Page;
