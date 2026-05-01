import { prisma } from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET() {
  const members = await prisma.member.findMany({
    include: {
      payments: {
        orderBy: {
          createdAt: "desc",
        },
        take: 1,
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const payload = members.map((member) => ({
    id: member.id,
    name: member.name,
    email: member.email,
    membershipType: member.membershipType,
    status: member.status,
    dietPlan: member.dietPlan,
    lastPayment: member.payments[0]?.createdAt.toISOString() ?? null,
    paymentsCount: member.payments.length,
  }));

  return NextResponse.json(payload);
}
