const fetchNation = async () => {
  const res = await fetch("https://localhost:3000/api/notion");
  const data = await res.json();
  return data;
};

export default async function Home() {
  const data = await fetchNation();
  return <h1>Hello</h1>;
}
