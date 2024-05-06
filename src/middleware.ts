import { NextResponse } from "next/server";
import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: ["/sign-in", "/sign-up", "/forgot-password", "/reset-password"],

  afterAuth(auth, req) {
    if (!auth.userId && !auth.isPublicRoute) {
      return NextResponse.redirect(new URL("/sign-in", req.url));
    }

    const isAdmin = auth.sessionClaims?.metadata.isAdmin;

    //only allow admins to access the dashboard
    if (req.nextUrl.pathname === "/dashboard" && !isAdmin) {
      return NextResponse.redirect(new URL("/tickets", req.url));
    }

    if (req.nextUrl.pathname === "/") {
      if (isAdmin) {
        return NextResponse.redirect(new URL("/dashboard", req.url));
      }
      return NextResponse.redirect(new URL("/tickets", req.url));
    }

    // If the user is signed in and trying to access a protected route, allow them to access route
    if (auth.userId && !auth.isPublicRoute) {
      return NextResponse.next();
    }
    // Allow users visiting public routes to access them
    return NextResponse.next();
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
