export default function VynilListPage() {
  const { VITE_BACKEND_API_URL } = import.meta.env;

  return (
    <>
      <div className="container">
        <h1>VynilListPage</h1>
        <p>{VITE_BACKEND_API_URL}</p>
      </div>
    </>
  );
}
