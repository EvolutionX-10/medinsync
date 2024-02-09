function Footer() {
	return (
		<div className="lg:h-fit h-auto w-full">
			<div className="text-md py-10 text-black flex flex-col lg:flex-row lg:justify-between lg:gap-16 px-4">
				{/* Main content */}
				<div className="lg:w-1/2 w-full lg:mr-10">
					<p className="lg:text-4xl text-2xl lg:ml-6 lg:pl-10">
						Lorem ipsum, dolor sit amet consectet assumenda sint dolor saniet ea possimus explicabo?
					</p>
				</div>
				{/* COMPANY and SUPPORT sections */}
				<div className="flex flex-col lg:flex-row lg:gap-20 mt-10 lg:mt-0 lg:ml-10">
					<div>
						<p className="pb-2 text-lg font-bold text-[#8E989C]">COMPANY</p>
						<p>About</p>
						<p>Privacy</p>
						<p>Terms</p>
					</div>
					<div>
						<p className="pb-2 text-lg lg:mt-0 mt-4 font-bold text-[#8E989C] mr-16">SUPPORT</p>
						<p>Help</p>
						<p>Status</p>
						<p>Contact Us</p>
					</div>
				</div>
			</div>
			{/* Divider */}
			<hr className="lg:block mt-8 lg:mt-12 h-[2px] bg-black w-full" />
			{/* Logo */}
			<div className="flex justify-center mt-8">
				{/* <img src="/" alt="MedInSync Logo" className="h-12" /> */}
			</div>
			{/* Copyright */}
			<div className="text-sm text-black block text-center mb-10">@2024, Skill-Issue. All rights reserved.</div>
		</div>
	);
}

export default Footer;
