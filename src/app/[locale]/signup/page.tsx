"use client";

import { useState } from "react";
import React from "react";
import { useLocale } from "next-intl";

export default function SignUp() {
  const locale = useLocale();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [data, setData] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { email, password } = data;

    const response = await fetch(`/${locale}/api/auth/signup`, {
      method: "POST",
      body: new URLSearchParams({
        email,
        password,
      }),
    });

    if (!response.ok) {
      const result = await response.json();
      setErrorMessage(result.error);
    } else {
      window.location.href = `/${locale}/login`;
    }
  };

  return (
    <div className="m-10 max-w-sm mx-auto p-6 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          data-cy="register-email-input"
          type="email"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
        />
        <input
          data-cy="register-password-input"
          type="password"
          name="password"
          placeholder="Password"
          value={data.password}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
        />
        {errorMessage && (
          <div data-cy="register-error" className="text-red-500 text-sm">{errorMessage}</div>
        )}
        <button
          data-cy="signup-button"
          type="submit"
          className="w-full py-2 bg-blue-500 dark:bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 dark:hover:bg-blue-700 transition duration-200"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

