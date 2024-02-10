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







			
		</div>
		
	);
}
export default Page;
