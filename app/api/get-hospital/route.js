import { PrismaClient } from "@prisma/client";

export async function POST(req) {
	const data = await req.json();
	const prisma = new PrismaClient();
	const user = await prisma.hospital.findUnique({
		where: {
			gstNo: data.gstNo,
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
			body: JSON.stringify({ message: "hospital not found" }),
		});
	}
}
