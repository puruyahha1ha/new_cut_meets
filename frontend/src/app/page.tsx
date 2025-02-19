import Footer from "@/components/Footer";
import BasicnavigationHeader from "@/components/NextUi/BasicnavigationHeader/App";
import PlaceListGrid from "@/components/NextUi/PlaceListGrid/App";
import Sidebar from "@/components/Sidebar";

export default async function Home() {

  // const response = await fetch('http://backend/api/sample');
  // const data = await response.json();
  // console.log(data);

  return (
    <div className="flex flex-col min-h-full">
      {/* <nav className="bg-gray-800 text-white p-4 md:hidden">Navigation</nav> */}
      <BasicnavigationHeader />
      <div className="md:grid grid-cols-3 h-4/5">
        {/* PC */}
        <Sidebar />
        <div>
          <main className="md:min-w-[800px] mb-[60px]">
            <PlaceListGrid />
          </main>
          {/* PC */}

          <Footer />
        </div>
      </div>
      {/* SP */}
      <footer className="bg-gray-800 text-white p-4 md:hidden fixed z-10 bottom-0 w-screen h-[60px]">Footer</footer>
    </div>
  );
}
