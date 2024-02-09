"use server";

import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
export async function addUser(data) {
	"use server";
	const prisma = new PrismaClient();
	// const user = await prisma.user.create({
	// 	data: {
	// 		username: data.get("name"),
	// 		aadhaar: data.get("aadhaar"),
	// 	},
	// });
	// now check if the user aaadhar is already present in the database
	const user = await prisma.user.findUnique({
		where: {
			aadhaar: data.get("aadhaar"),
		},
	});

	if (user) {
		redirect("/dashboard");
	} else {
		redirect("/register");
	}
}
