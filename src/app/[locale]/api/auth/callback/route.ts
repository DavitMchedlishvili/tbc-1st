import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";



export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const locale = url.pathname.split('/')[1];  
  const code = url.searchParams.get("code");

  if (code) {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient({
      cookies: () => cookieStore,
    });

    try {
      const { data, error } = await supabase.auth.exchangeCodeForSession(code);

      if (error) {
        console.error("Error during code exchange:", error.message);
        return NextResponse.redirect(`${url.origin}/${locale}/auth/error`); 
      }

      return NextResponse.redirect(`${url.origin}/${locale}`); 
    } catch (error) {
      console.error("Unexpected error during code exchange:", error);
      return NextResponse.redirect(`${url.origin}/${locale}/auth/error`); 
    }
  }

  return NextResponse.redirect(`${url.origin}/${locale}/auth/error`);
}