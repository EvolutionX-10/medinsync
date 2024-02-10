"use client";
import { useRef } from "react";
import { useHospitalDetails } from "@/store";

export default function RegisterHospital() {
	const formRef = useRef(null);
	const { setHospitalDetails } = useHospitalDetails();

	async function updateHospital(data) {
		console.log(data.get("name"));
		const user = await fetch("/api/set-hospital", {
			method: "POST",
			body: JSON.stringify({
				name: data.get("name"),
				location: data.get("location"),
				email: data.get("email"),
				phone: data.get("phone"),
				gstNo: data.get("gstNo"),
			}),
		});
		console.log(user);
		if (user.status === 200) {
			// redirect("/dashboard");
			console.log("User registered successfully");
			// get the form data from formRef and update the store useLoginDetails
			setHospitalDetails(data.get("name"), data.get("gstNo"));
		} else {
			// redirect("/register");
			console.log("User does not exist");
		}
	}

	return (
		<>
			<section className="bg-gray-50 dark:bg-gray-900">
				<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
					<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
						<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
							<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
								Sign in to your account
							</h1>
							<form className="space-y-4 md:space-y-6" action={updateHospital} ref={formRef}>
								<div>
									<label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Hospital Name
									</label>
									<input
										type="text"
										name="name"
										id="name"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="Hospital Name"
										required
									/>
								</div>
								<div>
									<label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Location
									</label>
									<input
										type="text"
										name="location"
										id="location"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="Location"
										required
									/>
								</div>
								<div>
									<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Email
									</label>
									<input
										type="text"
										name="email"
										id="email"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="Email"
										required
									/>
								</div>
								<div>
									<label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Phone Number
									</label>
									<input
										type="text"
										name="phone"
										id="phone"
										placeholder="Phone Number"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										required
									/>
								</div>
								<div>
									<label htmlFor="gstNo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										GST Number
									</label>
									<input
										type="text"
										name="gstNo"
										id="gstNo"
										placeholder="GST Number"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										required
									/>
								</div>
								<button
									type="submit"
									className="w-full bg-blue-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
								>
									Sign in
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
