import { prisma } from "@/prisma/prizma-client"
import { notFound } from "next/navigation"

export default async function ProductUnicPage({ params }: { params: { id: string } }) {
    const id = Number(params.id)
    const product = await prisma.product.findFirst({
        where: {
            id
        }
    })

    if (!product) {
        return notFound()
    }

    return (
        <>
            <div>
                <h1>{product.name}</h1>
            </div>
        </>
    )
}