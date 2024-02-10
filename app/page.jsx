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
		<div className="ml-6 lg:ml-20 mr-6 lg:mr-20">
			{/* Conditional rendering of animation */}
			{showAnimation && <Lottie />}

			{/* Navigation */}
			<Navbar />

			{/* Text1 */}
			<div className="flex flex-col items-center justify-center lg:mt-40 gap-4">
				<p className="lg:text-6xl text-xl font-bold text-black">Your</p>
				<p className="lg:text-6xl text-xl font-bold text-[#66CDCC]">Personalised</p>
				<p className="lg:text-6xl text-xl font-bold text-black">Medical</p>
				<p className="lg:text-6xl text-xl font-bold text-[#0075FF]">Dashboard</p>
			</div>

			<div className="flex items-center justify-center mt-10">
				<Link href="/about">
					<button
						className={
							"rounded-full ml-0 bg-[#0075FF] px-16 py-3 text-white h-[5rem] w-[20rem] text-4xl " + figtree.className
						}
					>
						About
					</button>
				</Link>
			</div>

			<div className="flex items-center justify-center mt-20 mb-20">
				<a href="#" className="text-2xl font-semibold flex items-center space-x-3">
					<img src="/logo.svg" alt="" className="w-36 initial-block items-center" />
				</a>
			</div>

			{/* Footer */}
			<Footer />
		</div>
	);
}
