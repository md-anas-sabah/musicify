import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  //Token is exist if user is logged in.
  const token = await getToken({ req, secret: process.env.JWT_SECRET });
  const { pathname } = req.nextUrl;
  // const url = "http://localhost:3000/login";
  // Allow the requests if following are true..
  //1) Its a request for next-auth session and provider fetching..
  //2. the token exist..
  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }
  // Redirect them to login if they don't have token and are requesting a protected route
  if (!token && pathname !== "/login") {
    return NextResponse.redirect("/login");
  }
}
