// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";
import { MyPage } from "@/features/common/myPage";

export default async function Home() {

  // const cookieStore = await cookies();
  // const token = cookieStore.get("token");
  // if (!token) {
  //   return redirect("/auth/signin");
  // }

  // const response = await fetch("http://backend/api/my-page", {
  //   method: "POST",
  //   body: JSON.stringify({ token: token }),
  //   headers: {
  //     "Content-Type": "application/json",
  //   }
  // })
  // const data = await response.json();
  // const {username, email, area} = data;

  return (
    <MyPage />
  );
}
