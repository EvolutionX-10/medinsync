"use client";
import { useState, useEffect } from "react";
import Lottie from "@/components/ui/lottie";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { figtree } from "@/app/fonts";
import Image from "next/image";

export default function Page() {
	const [showAnimation, setShowAnimation] = useState(true);

	useEffect(() => {
		// Hide animation after 3 seconds
		const timer = setTimeout(() => {
			setShowAnimation(false);
		}, 3000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="ml-6 lg mr-6 lg">
			{/* Conditional rendering of animation */}
			{showAnimation && <Lottie />}

			{/* Navigation */}
			<Navbar />

			{/* Text1 */}
			<div className="flex flex-col lg:flex-row items-center gap-20 justify-between mt-40 lg:mx-[4rem] ">
				<div className="flex flex-col justify-start gap-4">
						<p className="lg:text-6xl text-4xl lg:text-left text-center font-bold text-black">Your</p>
						<p className="lg:text-6xl text-4xl lg:text-left text-center font-bold text-[#273339]">Personalised</p>
						<p className="lg:text-6xl text-4xl lg:text-left text-center font-bold text-black">Medical</p>
						<p className="lg:text-6xl text-4xl lg:text-left text-center font-bold text-[#273339]">Dashboard</p>
					<div className="">
						<Link href="/about">
							<button className={"rounded-full ml-0 bg-[#0075FF] px-20 py-2 text-white text-xl " + figtree.className}>
								About
							</button>
						</Link>
						</div>
						<Link href="/hospital/register">
							<button className={" ml-2 px-10 py-3	 bg-[#0075FF] text-white rounded-full text-xl " + figtree.className}>
								Hospital Signup
							</button>
						</Link>

				</div>


				<div className="flex lg:justify-end">
					<Image src="/illustration.svg" alt="" className="lg:w-[50vw] w-[80vw]" width={100} height={100} />
				</div>
			</div>
			<div className="mt-20"></div>
			<Footer />
		</div>
	);
}