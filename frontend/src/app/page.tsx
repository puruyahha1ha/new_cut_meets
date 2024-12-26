export default async function Home() {

  // const response = await fetch('http://backend/api/sample');
  // const data = await response.json();

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-gray-800 text-white p-4">Navigation</nav>
      <div className="flex-1 grid grid-cols-12 gap-4">
        <aside className="bg-gray-200 p-4 col-span-2">Left Sidebar</aside>
        <main className="bg-white p-4 col-span-8">Main Content</main>
        <aside className="bg-gray-200 p-4 col-span-2">Right Sidebar</aside>
      </div>
      <footer className="bg-gray-800 text-white p-4">Footer</footer>
    </div>
  );
}
