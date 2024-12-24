"use client";
import React, { useState } from "react";
import { useLocale } from "next-intl";
// import PasswordInput from "@/src/components/Inputs/PasswordInput";
import { supabase } from "../../../utils/supabase/supabase";
import { Link } from "../../../i18n/routing";

export default function Login() {
  const locale = useLocale(); // Get current locale (either "en" or "ka")
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const response = await fetch(`/${locale}/api/auth/login`, {
      method: "POST",
      body: new URLSearchParams({
        email,
        password,
      }),
    });

    if (!response.ok) {
      const result = await response.json();
      setErrorMessage(result.error);
      console.log(locale);
    } else {
      window.location.href = `/${locale}`; 
      
    }
  };

  const handleGithubLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${window.location.origin}/${locale}/api/auth/callback`, 
      },
    });

    if (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="m-10 max-w-sm mx-auto p-6 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md space-y-4">
  <form onSubmit={handleSubmit} className="space-y-4">
    <input
      type="email"
      name="email"
      placeholder="Email"
      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
    />
    <input
      type="password"
      name="password"
      placeholder="Password"
      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
    />
    {errorMessage && (
      <p className="text-red-500 dark:text-red-400 text-sm">{errorMessage}</p>
    )}
    <button
      type="submit"
      className="w-full p-2 bg-blue-500 dark:bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-600 dark:hover:bg-blue-700"
    >
      Login
    </button>
  </form>
  <button
    onClick={handleGithubLogin}
    className="w-full p-2 bg-gray-800 dark:bg-gray-900 text-white rounded-md shadow-sm hover:bg-gray-900 dark:hover:bg-gray-700"
  >
    Login with Github
  </button>
  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
    Don't have an account?{" "}
    <Link href={`/signup`} className="text-blue-500 dark:text-blue-400 hover:underline">
      Register here
    </Link>
  </p>
</div>

  

  );
}


