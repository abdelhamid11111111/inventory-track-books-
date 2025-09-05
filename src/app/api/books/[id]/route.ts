import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        await prisma.book.delete({
            where: { id: Number(id) }
        });
        return NextResponse.json({ status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'server error from DELETE' }, { status: 500 });
    }
}

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const books = await prisma.book.findUnique({
            where: { id: Number(id) }
        });
        if (!books) {
            return NextResponse.json({ error: 'Book not found' }, { status: 404 });
        }
        return NextResponse.json(books, { status: 200 });
    } catch (error) {
        console.error('server error', error);
        return NextResponse.json({ error: 'server error from GET' }, { status: 500 });
    }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const { book } = await req.json();

        if (!book || !book.title?.trim() || !book.author?.trim() || !book.ISBN?.trim() || 
           !book.category?.trim() || !book.quantity || !book.price || !book.image) {
            return NextResponse.json({ error: 'Inputs are empty' }, { status: 400 });
        }

        const bookUpdated = await prisma.book.update({
            where: { id: Number(id) },
            data: {
                title: book.title.trim(),
                author: book.author.trim(),
                ISBN: book.ISBN.trim(),
                category: book.category.trim().toUpperCase(),
                quantity: Number(book.quantity),
                price: Number(book.price),
                image: book.image.trim()
            }
        });
        return NextResponse.json(bookUpdated, { status: 200 });
    } catch (error) {
        console.error('server error', error);
        return NextResponse.json({ error: 'server error from PUT' }, { status: 500 });
    }
}