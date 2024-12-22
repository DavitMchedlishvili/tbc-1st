"use client";

import { useState } from "react";
import React from "react";
import { supabase } from "../../utils/supabase/supabase";


export default function SignUp() {
  const [data, setData] = useState<{
    email: string;
    password: string;
  }>({
    email: '',
    password: '',
  });

  const signUp = async () => {
    try {
      const { data: authData, error } = await supabase
      .auth
      .signUp({
        email: data.email, // Use the state values
        password: data.password,
      });

      if (authData) {
        console.log(authData);
      }

      if (error) {
        console.error(error);
      }
    } catch (error) {
      console.error('Unexpected error:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="m-10 max-w-sm mx-auto p-6 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md space-y-4">
    <input
      type="email"
      name="email"
      placeholder="Email"
      value={data.email}
      onChange={handleChange}
      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
    />
    <input
      type="password"
      name="password"
      placeholder="Password"
      value={data.password}
      onChange={handleChange}
      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
    />
    <button
      onClick={signUp}
      className="w-full py-2 bg-blue-500 dark:bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 dark:hover:bg-blue-700 transition duration-200"
    >
      Sign Up
    </button>
  </div>
  

  );
}
