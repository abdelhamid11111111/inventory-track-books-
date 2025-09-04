import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";


export async function GET(){
    try{
        const books = await prisma.book.findMany({
            orderBy: {
                id: 'desc'
            }
        })
        
        return NextResponse.json(books, {status: 200})
    } catch(error){
        console.error('server error', error);
        return NextResponse.json({error:'server error form GET'}, {status: 500})
    }
}