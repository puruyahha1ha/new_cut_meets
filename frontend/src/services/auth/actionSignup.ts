"use server";

import { redirect } from "next/navigation";


export async function actionSignup(formData: FormData) {
  console.log(formData)

// const username = formData.get("username") as string;
  // const email = formData.get("email") as string;
  // const password = formData.get("password") as string;
  // const confirmPassword = formData.get("confirmPassword") as string;

  // console.log(username, email, password, confirmPassword);

  // try {
  //   const response = await fetch("http://backend/api/auth/signup", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       username: username,
  //       email: email,
  //       password: password,
  //       confirmPassword: confirmPassword
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     }
  //   });

  //   if (!response.ok) {
  //     throw new Error("Signup failed");
  //   }

  //   redirect("/auth/signin");
  // } catch (error) {
  //   console.error(error);
  // }

  redirect("/auth/signin");
}
