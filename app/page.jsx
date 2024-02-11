"use client";
import { useState, useEffect } from "react";
import Lottie from "@/components/ui/lottie";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { figtree } from "@/app/fonts";

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
			<div className="flex justify-between mt-40 mx-[4rem]">
				<div className="flex flex-col justify-start gap-4">
						<p className="lg:text-6xl text-xl font-bold text-black">Your</p>
						<p className="lg:text-6xl text-xl font-bold text-[#273339]">Personalised</p>
						<p className="lg:text-6xl text-xl font-bold text-black">Medical</p>
						<p className="lg:text-6xl text-xl font-bold text-[#273339]">Dashboard</p>
					<div className="flex justify-start">
						<Link href="/about">
							<button className={"rounded-full ml-0 bg-[#0075FF] px-32 py-3 text-white text-2xl " + figtree.className}>
								About
							</button>
						</Link>
					</div>
				</div>


				<div className="flex justify-end">
					<img src="/illustration.svg" alt="" className="w-[50vw]" />
				</div>
			</div>
			<div className="mt-40"></div>
			<Footer />
		</div>
	);
}
