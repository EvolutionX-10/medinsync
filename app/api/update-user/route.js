// @ts-check
import { PrismaClient } from "@prisma/client";

export async function POST(req) {
	const data = await req.json();
	console.log(data);
	const prisma = new PrismaClient();
	const hospital = await prisma.hospital.findUnique({
		where: {
			gstNo: data.gstNo,
		},
	});
	const updatedUser = await prisma.user.update({
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
					hospital: {
						connectOrCreate: {
							create: {
								name: hospital.name,
								gstNo: hospital.gstNo,
								email: hospital.email,
								phone: hospital.phone,
								location: hospital.location,
							},
							where: {
								gstNo: hospital.gstNo,
							},
						},
					},
				},
			},
		},
	});

	if (updatedUser) {
		return Response.json({
			status: 200,
			body: JSON.stringify(updatedUser),
		});
	} else {
		return Response.json({
			status: 404,
			body: JSON.stringify({ message: "User not found" }),
		});
	}
}
