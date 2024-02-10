"use client";

import Navbar from "@/components/Navbar2";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

function Page() {
	const currentDate = new Date();
	const Day = currentDate.getDay();
	const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const dayOfWeekString = days[Day];
	const date = currentDate.getDate();
	return (
		<>
			<Navbar />
			<div className="bg-[#edf6f5] py-20">
				{/* Navbar */}

				<div className="flex flex-col lg:flex-row items-center justify-between lg:items-start  ml-4 lg:ml-20 mt-40 ">
					<div>
						<p className="text-6xl font-bold">{dayOfWeekString}</p>
						<p className="text-7xl font-semibold">{date}</p>
					</div>
					<div className="w-[10vw] -ml-20 flex flex-col gap-8">
						<div className="w-[30rem] h-16 rounded-full bg-[#66CDCC] flex justify-center items-center text-4xl font-semibold">
							<p>Your Doctor</p>
						</div>
						<div className="w-[30rem] bg-white h-40 rounded-3xl flex items-center justify-around ">
						<Avatar className="h-20 w-20">
								<AvatarImage src="https://github.com/shadcn.png" />
								<AvatarFallback>CN</AvatarFallback>
								</Avatar>
								<div className="flex flex-col items-start">
						<p className="-ml-20 text-3xl font-medium">Doctor's Name</p>
						<p className="text-sm text-left">Last Visited </p>		
						</div></div>
					</div>
					<div>
						<div className="w-[30rem] h-64 rounded-3xl border-[#797885] border-2 mr-20">
							<p className="block font-medium mx-auto text-center mt-3 text-3xl">Prescription</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default Page;
