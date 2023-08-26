import prisma from "@/prisma";
import { NextResponse } from "next/server";
import { main } from "../route";

export async function GET(req: Request, res: NextResponse) {
  const id = req.url.split("fullstack-blog/")[1];
  try {
    await main();
    const post = await prisma.post.findFirst({ where: { id } });
    if (!post) {
      return NextResponse.json({ message: "Not Found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Success", post });
  } catch (error) {
    return NextResponse.json({ message: "Error", error });
  }
  finally{
    await prisma.$disconnect();
  }
}
export async function PUT(req: Request, res: NextResponse) {
    const id = req.url.split("fullstack-blog/")[1];
    const {title, description} = await req.json();
    try {
      await main();
      const updatedPost = await prisma.post.update({data:{title, description}, where:{id}});
      if (!updatedPost) {
        return NextResponse.json({ message: "Not Found" }, { status: 404 });
      }
      return NextResponse.json({ message: "Success", updatedPost });
    } catch (error) {
      return NextResponse.json({ message: "Error", error });
    }
    finally{
      await prisma.$disconnect();
    }
}
export async function DELETE(req: Request, res: NextResponse) {
    const id = req.url.split("fullstack-blog/")[1];
    try {
      await main();
      await prisma.post.delete({where:{id}})
      return NextResponse.json({ message: "Delete Success", id });
    } catch (error) {
      return NextResponse.json({ message: "Error", error });
    }
    finally{
      await prisma.$disconnect();
    }
}
