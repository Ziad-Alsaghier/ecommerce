"use server";

import { cookies } from "next/headers";
export default async function LoginAction(values) {
  const cookie = await cookies();

  try {
    const response = await fetch(
      "https://ecommerce.routemisr.com/api/v1/auth/signin",
      {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const data = await response.json();
        console.log('test');
        
    console.log(response);

    if (response.ok) {
      console.log("token : "+  data.token);
      
      cookie.set("token", data.token, {
        httpOnly: true,
        secure: true,
      });
      return response.ok;
    }

    return { success: false, data };
  } catch (error) {
    console.error("Some Error In Registration:", error);

    return { success: false, data: null };
  }
}
