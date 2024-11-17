"use client";


import "./index.css";
import { useUser } from "@auth0/nextjs-auth0/client";


export default function ProfileClient() {
  const { user, error, isLoading } = useUser();
 

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div className=" border bg-green-600 border-red-500 flex flex-col items-center justify-center py-5 my-12 ">
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );



};
