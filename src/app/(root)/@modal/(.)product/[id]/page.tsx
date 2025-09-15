import { Modal } from "@/components"
import { prisma } from "@/prisma/prizma-client"
import { PageProps } from "@/@types/params"

export default async function ProductUnicPage({ params }: PageProps) {
    const id = Number((await params).id)
    const product = await prisma.product.findFirst({
        where: {
            id
        },
        include: {
            variants: true,
            ingredients: true
        }
    })

    if (!product) {
        return <h1>not Found</h1>
    }

    return (
        <>
            <Modal product={product} />
        </>
    )
}