import { PrismaClient } from "@prisma/client";

export async function POST(req) {
	const data = await req.json();
	const prisma = new PrismaClient();
	const user = await prisma.user.create({
		data: {
			username: data.username,
			dob: new Date(data.dob),
			weight: +data.weight,
			phoneNumber: data.phoneNumber,
			relativeNumber: data.relativeNumber,
			aadhaar: data.aadhaar,
		},
	});
	console.log(user);
	if (user) {
		return Response.json({
			status: 200,
			body: JSON.stringify(user),
		});
	} else {
		return Response.json({
			status: 404,
			body: JSON.stringify({ message: "User not found" }),
		});
	}
}
