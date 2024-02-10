"use client";
// import { addUser } from '@/app/login/actions';

import { useRef } from "react";
import { useLoginDetails } from "@/store";

export default function Login() {
	const formRef = useRef(null);
	const { setLoginDetails } = useLoginDetails();

	async function addUser(data) {
		const user = await (
			await fetch("/api/get-user", {
				method: "POST",
				body: JSON.stringify({
					name: data.get("name"),
					aadhaar: data.get("aadhaar"),
				}),
			})
		).json();
		if (user.status === 200) {
			// redirect("/dashboard");
			console.log("User already exists");
			// get the form data from formRef and update the store useLoginDetails
			setLoginDetails(data.get("name"), data.get("aadhaar"));
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
							<form className="space-y-4 md:space-y-6" action={addUser} ref={formRef}>
								<div>
									<label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Your Name
									</label>
									<input
										type="name"
										name="name"
										id="name"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="John Smith"
										required
									/>
								</div>
								<div>
									<label htmlFor="aadhaar" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Aadhaar Number
									</label>
									<input
										type="number"
										name="aadhaar"
										id="aadhaar"
										placeholder="123456789"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										required
									/>
								</div>
								<div className="flex items-center justify-between">
									<div className="flex items-start"></div>
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
