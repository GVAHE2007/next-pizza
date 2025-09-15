import { Header } from "@/components";
import type { Metadata } from "next";



export const metadata: Metadata = {
    title: "Next Pizza",
    description: "лутие в мире",
};

export default function RootLayout({
    children,
    modal
}: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            <main>
                {children}
                {modal}

            </main>
        </>
    );
}
