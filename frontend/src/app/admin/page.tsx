import { cookies } from "next/headers";

export default async function Admin() {
  const cookieStore = await cookies();

  return (
    <div>
      <h1>Admin</h1>
      {cookieStore.getAll().map((cookie) => (
        <div key={cookie.name}>
          <span>{cookie.name}</span>: <span>{cookie.value}</span>
        </div>
      ))}
    </div>
  );
}
