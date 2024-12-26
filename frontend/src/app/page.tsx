import Sidebar from "@/components/Sidebar";

export default async function Home() {

  // const response = await fetch('http://backend/api/sample');
  // const data = await response.json();

  return (
    <div className="flex flex-col min-h-full">
      <nav className="bg-gray-800 text-white p-4 md:hidden">Navigation</nav>
      <div className="grid grid-cols-4">
        <Sidebar />
      </div>
      <footer className="bg-gray-800 text-white p-4 md:hidden absolute bottom-0 w-screen">Footer</footer>
    </div>
  );
}
