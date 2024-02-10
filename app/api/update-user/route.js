// @ts-check
import { PrismaClient } from "@prisma/client";

export async function POST(req) {
	const data = await req.json();
	console.log(data);
	const prisma = new PrismaClient();
	const user = await prisma.user.update({
		where: {
			aadhaar: data.aadhaar,
		},
		data: {
			records: {
				create: {
					bloodPressure: +data.bloodPressure,
					heartRate: +data.heartRate,
					weight: +data.weight,
					temperature: +data.temperature,
					symptoms: data.symptoms,
					diagnosis: data.diagnosis,
					prescription: data.prescription,
				},
			},
		},
	});
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
