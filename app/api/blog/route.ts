import { createPost, getPosts } from "@/lib/data";
import { NextResponse } from "next/server";

export const GET = async (req:Request, res:Response)=>{
    try {
        const postList = getPosts()
        return NextResponse.json({msg:'ok', postList}, {status:200})
        
    } catch (error) {
        return NextResponse.json({msg:'err', error}, {status:500})
    }
}
export const POST = async (req:Request, res:Response)=>{
    const {title, desc } = await req.json();
    try {
        const newPost = {
            id: Date.now().toString(),
            title,
            desc,
            date:new Date()
        }
        createPost(newPost)
        return NextResponse.json({msg:'ok', newPost}, {status:201})
    } catch (error) {
        return NextResponse.json({msg:'err', error}, {status:500})
    }
    
}