"use client";

import Navbar from "@/components/Navbar2";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import "./dashboard.css";

function Page() {
	const currentDate = new Date();
	const Day = currentDate.getDay();
	const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const dayOfWeekString = days[Day];
	const date = currentDate.getDate();

	const [activeIndex, setActiveIndex] = useState(null);

	const togglePanel = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	const sections = [
		{ title: "Section 1", content: "Lorem ipsum..." },
		{ title: "Section 2", content: "Lorem ipsum..." },
		{ title: "Section 3", content: "Lorem ipsum..." },
	];

	return (
		<>
			<Navbar />
			<div className="bg-[#edf6f5]  py-20">
				{/* Navbar */}

				<div className="flex flex-col lg:flex-row items-center justify-between lg:items-start  ml-4 lg:ml-20 mt-20 ">
					<div className="">
						<p className="w-full text-6xl font-bold">{dayOfWeekString}</p>
						<p className="w-full lg:text-left text-center text-7xl font-semibold">{date}</p>
					</div>
					<div className="w-[10vw] -ml-20 flex flex-col lg:items-start items-center gap-8">
						<div className="lg:w-[30rem] ml-20 lg:ml-0 mt-8 lg:mt-0 w-72 h-16 rounded-full bg-[#66CDCC] flex justify-center items-center text-4xl font-semibold">
							<p className="text-center">Your Doctor</p>
						</div>
						<div className="lg:w-[30rem] w-72 ml-20 lg:ml-0 bg-white h-40 rounded-3xl	 flex flex-col lg:flex-row items-center justify-around ">
							<Avatar className="h-20 w-20">
								<AvatarImage src="https://github.com/shadcn.png" />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
							<div className="flex flex-col items-start ">
								<p className="lg:-ml-20 lg:text-3xl text-xl font-medium ">Doctor's Name</p>
								<p className="text-sm lg:text-left text-center w-full">Last Visited </p>
							</div>
						</div>
					</div>
					<div className="flex justify-center ml-20 lg:ml-0 mt-20 lg:mt-0">
						<div className="lg:w-[30rem] w-[90vw] h-64 rounded-3xl border-[#797885] border-2 mr-20">
							<p className="block font-medium mx-auto text-center mt-3 text-3xl">Prescription</p>
						</div>
					</div>
				</div>
				<div className="w-[80vw] border-red-400 mt-20 lg:ml-48 ml-10 ">
					<div className="flex">
						<p className="font-semibold px-1">Your Past Records</p>
						<hr className="mt-3 lg:ml-16 ml-4 mb-8 w-7/12 lg:w-10/12 h-3 border-black" />
					</div>
					{sections.map((section, index) => (
						<div key={index} className="accordion-container">
							<button
								className={`text-left px-4 accordion-button ${activeIndex === index ? "active" : ""}`}
								onClick={() => togglePanel(index)}
							>
								{section.title}
							</button>
							<div className={`accordion-panel ${activeIndex === index ? "active" : ""}`}>
								<p>{section.content}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
export default Page;
