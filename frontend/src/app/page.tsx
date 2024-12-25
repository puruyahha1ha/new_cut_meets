export default async function Home() {

  const response = await fetch('http://sample_backend/api/sample');
  const data = await response.json();

  return (
    <div>
      <h1>Sample Frontend</h1>
      <p>{ data.message }</p>
    </div>
  );
}
