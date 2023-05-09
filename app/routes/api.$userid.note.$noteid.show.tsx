import { PrismaClient } from "@prisma/client";
import { json, LoaderArgs } from "@remix-run/server-runtime";

const prisma = new PrismaClient();

export const loader = async ({ request, params }: LoaderArgs) => {
  // Get all Notes
  // const url = new URL(request.url);
  // const field = url.searchParams.get("id")
  console.log('field:', params["id"]);
  
  if (params["noteid"]=='all'){
    const notes = await prisma.note.findMany({where: {userId: params["userid"]}})
    console.log('notes:', notes);
    console.log(`Loading...`);
    await prisma.$disconnect();
    return json(notes, 200);
  }else{
    const notes = await prisma.note.findMany({where: {userId: params["userid"], id: params["noteid"]}})
    console.log('notes:', notes);
    console.log(`Loading...`);
    await prisma.$disconnect();
    return json(notes, 200);
  }
  
}
// await prisma.$disconnect();

