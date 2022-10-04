import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  //Token is exist if user is logged in.
  const token = await getToken({ req, secret: process.env.JWT_SECRET });
  const { pathname } = req.nextUrl;
  // Allow the requests if following are true..
  //1) Its a request for next-auth session and provider fetching..
  //2. the token exist..
  if (pathname.include("/api/auth") || token) {
    return NextResponse.next();
  }
}
