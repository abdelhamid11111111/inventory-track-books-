import { NextResponse } from "next/server";
import prisma from '../../../../lib/prisma'


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

export async function POST(req: Request){
    try{
        const book = await req.json()
        
        console.log("Received book:", book)
        
        // Check for empty/missing fields
        if(!book || !book.title?.trim() || !book.author?.trim() || !book.ISBN?.trim() || 
           !book.category?.trim() || !book.quantity || !book.price || !book.image){
            return NextResponse.json({error: 'All fields are required'}, {status: 400})
        }
        
        console.log("Validation passed, creating book...")
        
        const bookCreated = await prisma.book.create({
            data: {
                title: book.title.trim(),
                author: book.author.trim(),
                ISBN: book.ISBN.trim(),
                category: book.category.trim().toUpperCase(),
                quantity: Number(book.quantity),
                price: Number(book.price),
                image: book.image.trim()
            }
        })
        
        console.log("Book created:", bookCreated)
        
        return NextResponse.json(bookCreated, {status: 201})
        
    } catch(error){
        console.error('Server error details:', error)
        return NextResponse.json({
            error: 'Server error from POST',
            // details: error.message
        }, {status: 500})
    }
}