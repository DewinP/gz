import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/sign-in", "/sign-up", "/forgot-password"],
  // ignoredRoutes: ["/((?!api|trpc))(_next.*|.+.[w]+$)", "/sig-in"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
