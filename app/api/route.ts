import { Fight, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET() {
  const data = {
    test: "test",
  };
  return Response.json(data);
}

export async function POST(request: Request) {
  const req = await request.json();
  const row = await createRow(req)
    .catch((e) => {
      throw e;
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
  console.log(row);
  return Response.json(row);
}

async function createRow(req: Fight) {
  const row = await prisma.fight.create({
    data: {
      round: req["round"],
      scoreA: req["scoreA"],
      scoreB: req["scoreB"],
    },
  });
  return row;
}
