import PlaceListGrid from "@/components/NextUi/PlaceListGrid/App";

export default async function Home() {

  // const response = await fetch('http://backend/api/sample');
  // const data = await response.json();
  // console.log(data);

  return (
    <div className="flex flex-col min-h-full">
      <PlaceListGrid />
    </div>
  );
}
