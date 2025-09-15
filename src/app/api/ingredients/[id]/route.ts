import { prisma } from "@/prisma/prizma-client";
import { NextRequest, NextResponse } from "next/server";
import { PageProps } from "@/@types/params"

export async function GET(req: NextRequest, { params }: PageProps) {
    const id = +((await params).id)
    const ingredient = await prisma.ingredient.findFirst({
        where: {
            id
        }
    })

    return NextResponse.json(ingredient)
}