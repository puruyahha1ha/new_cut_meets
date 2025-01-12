import { cookies } from "next/headers";

export default async function MyPage() {
  const cookieStore = await cookies();

  return (
    <div>
      <h1>my page</h1>
      {cookieStore.getAll().map((cookie) => (
        <div key={cookie.name}>
          <span>{cookie.name}</span>: <span>{cookie.value}</span>
        </div>
      ))}
    </div>
  );
}
