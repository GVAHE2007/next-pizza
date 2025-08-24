import { getUser } from "@/lib/get-user"
import { notFound } from "next/navigation"
import { FormProfile } from "@/components/form"
import { prisma } from "@/prisma/prizma-client"

export default async function ProfilePage() {
    const user = await getUser()
    if (!user) return notFound()
    console.dir(user)
    const userData = await prisma.user.findUnique({
        where: {
            email: user.email as string,
        },
    })
    if (!userData) return notFound()
    return (
        <FormProfile user={userData} />
    )
}