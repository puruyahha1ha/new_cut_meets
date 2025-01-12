"use client";

import { type FC } from "react";


export const MyPage: FC = () => {
  const username: string = "John Doe";
  const email: string = "";
  const area: string = "大阪府";

  return (
    <>
      <p>{username}</p>
      <p>{email}</p>
      <p>{area}</p>
    </>
  )
}
