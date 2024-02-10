import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
export default function Page() {
	return (
		<div className="ml-6 lg:ml-20 mr-6 lg:mr-20">
			<Navbar />

			{/* Text1 */}
			{/* <div className="flex flex-col lg:flex-col items-center lg:items-start gap-4">
				<p className="lg:w-1/4 w-[90vw] text-center lg:text-left mt-20 text-3xl font-medium">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
				</p>
				<p className="text-[#0075FF] text-6xl font-bold">
					Med<span className="text-[#7BEE8D]">In</span>Sync
				</p>
				<p className="w-4/5 text-xl text-center lg:text-left">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
					Pellentesque sit.{" "}
				</p>
			</div>

			<div className="flex flex-col items-center lg:flex-row lg:mt-24 lg:justify-between lg:mr-20 mt-24 ">
				<Image src="/graphic1.svg" alt="" height={250} width={250} className="lg:h-[40vh] lg:w-[40vw] w-[80vw] " />
				<div className="flex flex-col items-center lg:text-right text-center mt-10 ">
					<p className="text-4xl font-medium">How does MedInSync helps Hospitals and Patients ?</p>
					<p className="text-2xl lg:w-[50vw] mt-10 lg:text-right text-center w-4/5">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
						Pellentesque sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
						hendrerit urna. Pellentesque sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
						Aliquam in hendrerit urna. Pellentesque sit.
					</p>
				</div>
			</div>


      <div className="flex flex-col items-center lg:flex-row lg:mt-24 lg:justify-between lg:mr-20 mt-24 mb-36">
				<div className="flex flex-col items-center lg:text-left text-center mt-10 ">
					<p className="text-4xl font-medium">How does MedInSync helps Hospitals and Patients ?</p>
					<p className="text-2xl lg:w-[50vw] mt-10 lg:text-left text-center w-4/5">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
						Pellentesque sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
						hendrerit urna. Pellentesque sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
						Aliquam in hendrerit urna. Pellentesque sit.
					</p>
				</div>
        <Image src="/graphic1.svg" alt="" height={250} width={250} className="lg:h-[40vh] lg:w-[40vw] w-[80vw] mt-10 " />
			</div> */}

			<div className="flex flex-col items-center  justify-center lg:mt-40 gap-4">
				<p className="text-6xl font-bold text-black">Your</p>
				<p className="text-6xl font-bold text-[#66CDCC]">Personalised</p>
				<p className="text-6xl font-bold text-black">Medical</p>
				<p className="text-6xl font-bold text-[#0075FF]">Dashboard</p>
			</div>

			<div className="flex items-center justify-center mt-10">
				<Link href="/about">
					<button className="rounded-full ml-0 bg-[#0075FF] px-16 py-3 text-white h-[5rem] w-[20rem] text-4xl">
						about
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
