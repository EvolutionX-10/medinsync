"use client";
import { useLoginDetails } from "@/store";
import Navbar from "@/components/Navbar2";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import "./dashboard.css";
import { Record } from "./Record";
import { useEffect, useState } from "react";

function Page() {
	const { username, aadhaar } = useLoginDetails();
	const currentDate = new Date();
	const Day = currentDate.getDay();
	const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const dayOfWeekString = days[Day];
	const date = currentDate.getDate();

	const [userData, setUserData] = useState({});
	const [lastHospital, setLastHospital] = useState({});

	useEffect(() => {
		const getData = async () => {
			const usdData = JSON.parse(
				(
					await (
						await fetch("/api/get-user", {
							method: "POST",
							body: JSON.stringify({
								name: username,
								aadhaar,
							}),
						})
					).json()
				).body
			);
			setUserData(usdData);
			const getHos = async (i) => {
				const records = usdData?.records?.reverse();
				if (!records.length) return;
				const hospitalData = JSON.parse(
					(
						await (
							await fetch("/api/get-hospital", {
								method: "POST",
								body: JSON.stringify({
									gstNo: records[i].hospitalId,
								}),
							})
						).json()
					).body
				);
				console.log(hospitalData);
				if (i == 0) {
					setLastHospital(hospitalData);
				}
				records[i].hospitalName = hospitalData.name;
				setUserData({ ...userData, records });
			};
			usdData.records?.forEach((record, index) => {
				getHos(index);
			});
		};
		username.length && getData();
	}, [username, lastHospital.name]);

	return (
		<>
			<Navbar />
			<div className="bg-[#edf6f5] py-20">
				<div className="flex flex-col lg:flex-row items-center justify-between lg:items-start ml-4 lg:ml-20 mt-20">
					<div className="text-center lg:text-left">
						<p className="text-6xl font-bold">{dayOfWeekString}</p>
						<p className="text-7xl font-semibold">{date}</p>
					</div>
					<div className="flex flex-col items-center gap-8 ml-10 lg:ml-0 mt-8 lg:mt-0">
						<div className="w-72 h-16 rounded-full bg-[#66CDCC] flex justify-center items-center text-4xl font-semibold">
							<p>{lastHospital.name}</p>
						</div>
						<div className="w-72 bg-white h-40 rounded-3xl flex flex-col lg:flex-row items-center justify-around">
							<Avatar className="h-20 w-20">
								<AvatarImage src="https://github.com/shadcn.png" />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
							<div className="flex flex-col items-start lg:ml-4">
								<p className="text-xl font-medium">{lastHospital.name}</p>
								<p className="text-sm">Last Visited</p>
							</div>
						</div>
					</div>
					<div className="flex justify-center mt-20 lg:mt-0">
						<div className="w-[90vw] lg:w-[30rem] h-64 rounded-3xl border-[#797885] border-2 mr-10">
							<p className="text-3xl font-medium text-center mt-3">Prescription</p>
						</div>
					</div>
				</div>
				<div className="w-[80vw] mt-20 lg:ml-48 ml-10">
					<div className="flex items-center">
						<p className="font-semibold px-1">Your Past Records</p>
						<hr className="ml-4  w-7/12 h-3 border-black" />
					</div>
					<div className="mt-8">
						{userData.records?.map((record, index) => {
							return <Record key={index} hospitalName={record.hospitalName} prescription={record.prescription} />;
						})}
					</div>
				</div>
			</div>
		</>
	);
}
export default Page;
