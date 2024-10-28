"use server";
import { cookies } from "next/headers";

export async function authenticate(formData) {
  try {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: formData.username,
        password: formData.password,
      }),
      credentials: "include",
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    const cookieStore = cookies();
    cookieStore.set("accessToken", data.accessToken, {
      httpOnly: true,
    });
    cookieStore.set("refreshToken", data.refreshToken, {
      httpOnly: true,
    });
    console.log("cookies", cookieStore);
    return { success: true, message: "authentication successfull", data };
  } catch (error) {
    console.error(error, "Authentication failed");
    return { success: false, message: error.message || "Something went wrong" };
  }
}





export async function refreshAccessToken() {
  try {
    const cookieStore = cookies();
    const refreshToken = cookieStore.get("refreshToken");
    if (!refreshToken) {
      throw new Error("refreshToken missing");
    }
    const response = await fetch("https://dummyjson.com/auth/refresh", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        refreshToken: refreshToken.value,
      }),
      credentials: "include",
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Something went wrong with refreshToken");
    }
    cookieStore.set("accessToken", data.accessToken, {
      httpOnly: true,
    });
    cookieStore.set("refreshToken", data.refreshToken, {
      httpOnly: true,
    });

    return { success: true, message: "Token refreshed successfull", data };
  } catch (error) {
    console.error(error, "Token refresh failed");
    return { success: false, message: error.message || "Something went wrong while refreshing Token" };
  }
}



export async function LogOut() {
    try{
        const cookieStore = cookies();
    cookieStore.delete("accessToken");
    cookieStore.delete("refreshToken");
    const result = {
        success:true,
        message: "Log out successfull"
    }
    return result
    }catch{
        console.error(error, "Something went wrong")
        return {
            success: false,
            message: "Log out failed"
        }
    }
}