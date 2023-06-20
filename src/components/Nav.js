export default function Nav() {


  return (
    <div className="flex justify-between m-0 bg-gray-200 w-screen p-4 items-center">
      <h1 className={`text-5xl font-sans`}>Tara MacKinnon</h1>
      <div className="flex">
        <h3 className="p-4 text-2xl font-semibold">About</h3>
        <h3 className="p-4 text-2xl font-semibold">Projects</h3>
        <h3 className="p-4 text-2xl font-semibold">Contact</h3>
      </div>
    </div>
  );
}