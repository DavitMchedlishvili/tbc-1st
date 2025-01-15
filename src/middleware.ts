import { NextResponse, NextRequest } from "next/server";
import { createClient } from "./utils/supabase/server"; // Your custom createClient function
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const nextIntlMiddleware = createMiddleware(routing);

export async function middleware(req: NextRequest) {
  // First, handle internationalization (next-intl)
 nextIntlMiddleware(req)

  // Initialize Supabase client for session check
  const supabase = createClient();
  const { data, error } = await (await supabase).auth.getSession();

  // Log the request path and session data for debugging
  console.log("Request Pathname:", req.nextUrl.pathname);
  console.log("Session Data:", data); // Make sure data and session are correct

  const session = data?.session;
  console.log(data, session)
  const isLoginPage = req.nextUrl.pathname.includes("/login");
  const isRestrictedPage = [
    "/contact",
    "/profile",
    "/blog",
    "/about",
    "/products",
    "/create-product",
    "/posts",
    "/pricing",
    "/myproducts",
  ].some((path) => req.nextUrl.pathname.includes(path));

  // Add more logs to see if this condition is met
  console.log("Session:", session);
  console.log("Is Restricted Page:", isRestrictedPage);
  console.log("Is Login Page:", isLoginPage);

  // If there's no session and trying to access a restricted page
  if (!session && isRestrictedPage && !isLoginPage) {
    const locale = req.nextUrl.pathname.startsWith("/ka") ? "ka" : "en";
    const loginUrl = new URL(`/${locale}/login`, req.url);
    console.log("Redirecting to login:", loginUrl.toString()); // Log the redirection URL
    return NextResponse.redirect(loginUrl);
  }

  // Redirect to default locale if not in /en or /ka
  if (
    !req.nextUrl.pathname.startsWith("/en") &&
    !req.nextUrl.pathname.startsWith("/ka")
  ) {
    const defaultLocale = "en";
    const redirectUrl = new URL(
      `/${defaultLocale}${req.nextUrl.pathname}`,
      req.url
    );
    console.log("Redirecting to default locale:", redirectUrl.toString()); // Log redirection to default locale
    return NextResponse.redirect(redirectUrl); // Redirect to default locale
  }

  const intlResponse = await nextIntlMiddleware(req);
  if (intlResponse) {
  return intlResponse; // If next-intl processes the request, return its response
}

  return NextResponse.next();
}


export const config = {
  matcher: ["/", "/(ka|en)/:path*"], // Match all paths for both English and Georgian locales
};
