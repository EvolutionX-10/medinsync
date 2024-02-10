import { PrismaClient } from "@prisma/client";

export async function POST(req) {
	const data = await req.json();
	const prisma = new PrismaClient();
	const user = await prisma.user.update({
		data: {
			bloodPressure: data.bloodPressure,
			heartRate: data.heartRate,
			temperature: data.temperature,
			cholesterol: data.cholesterol,
			glucoseLevel: data.glucoseLevel,
			bmi: data.bmi,
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
