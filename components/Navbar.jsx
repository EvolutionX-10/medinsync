"use client";
import React, { useState } from "react";
// import { Link } from "react-scroll";
import Link from "next/link";

const Navb = ({ isSticky, toggleMenu, isMenuOpen }) => {
	return (
		<header className="mx-auto lg:w-1/2 w-[80vw] bg-[#ececec] md-bg-transparent rounded-full fixed top-4 left-0 right-0 z-10 overflow-x-hidden">
			<nav
				className={`py-4 lg:px-14 px-4 ${
					isSticky ? "sticky top-0 left-0 right-0 border-b bg-white shadow-md" : "bg-transparent"
				}`}
			>
				<div className="flex justify-between item-center text-base gap-10 lg:md-40">
					<Link href="/" className="text-2xl font-semibold flex items-center space-x-3">
						<img src="/logo.svg" alt="" className="ml-4 w-10 initial-block items-center" />
					</Link>
					<ul className="md:flex   items-center font-semibold">
						<Link href="/hospital/register">
							<button className="rounded-3xl ml-0 bg-[#0075FF] px-16 md:w-40 py-2 text-white">Login</button>
						</Link>
					</ul>

				</div>
				<div
					className={`space-y-4 px-4 mt-16 py-7 bg-primary ${
						isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
					}`}
				>
					{/* No About or FAQ links */}
				</div>
			</nav>
		</header>
	);
};

const Navbar = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);
	const [isSticky, setIsSticky] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	return (
		<div className="bg-cover bg-center overflow-x-hidden">
			<Navb isSticky={isSticky} toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
		</div>
	);
};

export default Navbar;
