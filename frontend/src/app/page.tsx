import Sidebar from "@/components/Sidebar";

export default async function Home() {

  // const response = await fetch('http://backend/api/sample');
  // const data = await response.json();

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-gray-800 text-white p-4">Navigation</nav>
        <Sidebar />
      <footer className="bg-gray-800 text-white p-4">Footer</footer>
    </div>
  );
}
