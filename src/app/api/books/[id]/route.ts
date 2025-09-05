import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";



export async function DELETE(_:Request, { params }: {params: { id: string }}){
    try{
        await prisma.book.delete({
            where: { id: Number(params.id)}
        })
        return NextResponse.json({status: 200})
    } catch(error){
        return NextResponse.json({error: 'server error from DELETE'}, {status: 500})
    }
}

export async function GET(_:Request, { params }: {params: { id: string }}){
    try{
        const books = await prisma.book.findUnique({
            where: { id: Number(params.id)}
        })
        if (!books) {
            return NextResponse.json({ error: 'Book not found' }, { status: 404 });
        }
        return NextResponse.json(books, {status: 200})
    } catch(error){
        console.error('server error', error);
        return NextResponse.json({error:'server error form GET'}, {status: 500})
    }
}

export async function PUT(req:Request, { params }: {params: { id: string }}){
    try{
        const {book} = await req.json()

        if(!book || !book.title?.trim() || !book.author?.trim() || !book.ISBN?.trim() || 
           !book.category?.trim() || !book.quantity || !book.price || !book.image){
            return NextResponse.json({error: 'Inputs are empty'}, {status: 400})
        }

        const bookUpdated = await prisma.book.update({
            where: { id: Number(params.id)},
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
        return NextResponse.json(bookUpdated, {status: 200})
    } catch(error){
        console.error('server error', error);
        return NextResponse.json({error:'server error form PUT'}, {status: 500})
    }
}