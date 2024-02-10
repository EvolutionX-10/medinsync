"use client";
import { useRef, useState } from "react";
import { useHospitalDetails, useLoginDetails } from "@/store";
import { useRouter } from "next/navigation";

export default function UpdateFields(props) {
	const { gstNo } = useHospitalDetails();
	async function updateUser(data) {
		const response = await fetch("/api/update-user", {
			method: "POST",
			body: JSON.stringify({
				bloodPressure: data.get("bloodPressure"),
				heartRate: data.get("heartRate"),
				weight: data.get("weight"),
				temperature: data.get("temperature"),
				symptoms: data.get("symptoms"),
				diagnosis: data.get("diagnosis"),
				prescription: data.get("prescription"),
				...props,
				gstNo,
			}),
		});
		if (response.status === 200) {
			console.log("User parameters updated successfully");
		} else {
			console.error("Failed to update user parameters");
		}
	}
	return (
        <section className="bg-gray-50 dark:bg-gray-900 m-12">
				<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
		<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
			<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
				<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
					Update User Parameters
				</h1>
				<form className="space-y-4 md:space-y-6" action={updateUser}>
					<div>
						<label htmlFor="bloodPressure" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
							Blood Pressure
						</label>
						<input
							type="text"
							name="bloodPressure"
							id="bloodPressure"
							className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Blood Pressure"
							required
						/>
					</div>
					<div>
						<label htmlFor="heartRate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
							Heart Rate
						</label>
						<input
							type="number"
							name="heartRate"
							id="heartRate"
							className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Heart Rate"
							required
						/>
					</div>
					<div>
						<label htmlFor="temperature" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
							Temperature
						</label>
						<input
							type="number"
							name="temperature"
							id="temperature"
							className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Temperature"
							required
						/>
					</div>
					<div>
						<label htmlFor="weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
							Weight
						</label>
						<input
							type="number"
							name="weight"
							id="weight"
							className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Weight"
							required
						/>
					</div>
					<div>
						<label htmlFor="symptoms" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
							Symptoms
						</label>
						<input
							type="text"
							name="symptoms"
							id="symptoms"
							className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Symptoms"
							required
						/>
					</div>
					<div>
						<label htmlFor="diagnosis" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
							Diagnosis
						</label>
						<input
							type="text"
							name="diagnosis"
							id="diagnosis"
							className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Diagnosis"
							required
						/>
					</div>
					<div>
						<label htmlFor="prescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
							Prescription
						</label>
						<input
							type="text"
							name="prescription"
							id="prescription"
							className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Prescription"
							required
						/>
					</div>
					<button
						type="submit"
						className="w-full bg-blue-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
					>
						Update
					</button>
				</form>
			</div>
		</div>

        </div>
        </section>
	);
}
