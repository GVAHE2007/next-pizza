// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { notFound } from "next/navigation";

export const config = {
  matcher: ["/dashboard/:path*"],
};

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token) {
    return notFound();
    // return NextResponse.redirect(new URL("/", req.url));
  }
  console.log("token jan", token);

  if (token.role !== "ADMIN") {
    return notFound();
    // return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}
