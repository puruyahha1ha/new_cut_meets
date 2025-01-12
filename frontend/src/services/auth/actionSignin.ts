"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";


export async function actionSignin(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const cookieStore = await cookies();
  cookieStore.set("email", email, { path: "/", maxAge: 60 * 60 * 24 });
  cookieStore.set("password", password, { path: "/", maxAge: 60 * 60 * 24 });

  // try {
  //   const response = await fetch("http://backend/api/auth/signin", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       email: email,
  //       password: password
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     }
  //   });

  //   if (!response.ok) {
  //     throw new Error("Signin failed");
  //   }

  //   redirect("/dashboard");
  // } catch (error) {
  //   console.error(error);
  // }

  redirect("/admin");
};
