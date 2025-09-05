import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";


export async function GET(req: Request){
    try{
        // GET URL 
        const url = new URL(req.url)
        
        // EXTRACT QUERY FORM URL
        const searchQuery = url.searchParams.get('query')

        if (!searchQuery) {
            return NextResponse.json({ error: 'Search query is required' }, { status: 400 });
        }

        const searchResults = await prisma.book.findMany({
            where: {
                title: { contains: searchQuery.toLowerCase() } 
            },
            orderBy: { title: "asc" }
        })

        return NextResponse.json(searchResults)
    }catch(error){
        console.error('server error', error);
        return NextResponse.json({error: 'faild to fetch results'}, {status: 500})
    }
}