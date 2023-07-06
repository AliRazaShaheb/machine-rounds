import { deletePost, getPost, updatePost } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET(req:Request, res:Response){
  const id = req.url.split('blog/')[1]
  try {
    const post = getPost(id)
    if(!post){
        return NextResponse.json({msg:"not found"}, {status:404})
    }
    return NextResponse.json({msg:'ok', post}, {status:200})
  } catch (error) {
    return NextResponse.json({msg:"err", error}, {status:500})
  }
  
}

export async function PUT(req:Request, res:Response){
    const id = req.url.split('blog/')[1]
    const {title, desc} = await req.json()
    try {
      const updatedPost = updatePost(id, title, desc)
      return NextResponse.json({msg:'ok', updatedPost}, {status:200})
    } catch (error) {
      return NextResponse.json({msg:"err", error}, {status:500})
    }
    
 }

 export async function DELETE(req:Request, res:Response){
    const id = req.url.split('blog/')[1]
  try {
    const filteredPost = deletePost(id)
    return NextResponse.json({msg:'deleted', filteredPost}, {status:200})
  } catch (error) {
    return NextResponse.json({msg:"err", error}, {status:500})
  }
 }

