import { getUser } from "@/lib/get-user"
import { notFound } from "next/navigation"
import { FormProfile } from "@/components/form"
import { prisma } from "@/prisma/prizma-client"
import { ProfileError } from "@/components/profile-error"

export default async function ProfilePage() {
    const user = await getUser()

    console.dir(user)
    const userData = await prisma.user.findUnique({
        where: {
            email: user?.email || "",
        },
    })



    return (
        <>
            {userData ? <FormProfile user={userData || undefined} /> : <ProfileError />}
        </>
    )
}