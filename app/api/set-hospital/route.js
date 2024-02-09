import { PrismaClient } from "@prisma/client";

export async function POST(req) {
	const data = await req.json();
	const prisma = new PrismaClient();
	const hospital = await prisma.hospital.create({
		data: {
			name: data.name,
			location: data.location,
			email: data.email,
			phone: data.phone,
			gstNo: data.gstNo,
		},
	});
	console.log(hospital);
	if (hospital) {
		return Response.json({
			status: 200,
			body: JSON.stringify(hospital),
		});
	} else {
		return Response.json({
			status: 404,
			body: JSON.stringify({ message: "hospital not found" }),
		});
	}
}
