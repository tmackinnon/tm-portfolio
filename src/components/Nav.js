import Link from "next/link";

export default function Nav() {


  return (
    <div className="flex justify-between m-0 bg-gray-200 w-screen p-4 items-center">
      <h1 className={`text-5xl font-sans`}>Tara MacKinnon</h1>
      <div className="flex">
        <Link href="#About" className="p-4 text-2xl font-semibold">About</Link>
        <Link href="#Projects" className="p-4 text-2xl font-semibold">Projects</Link>
        <h3 className="p-4 text-2xl font-semibold">Contact</h3>
      </div>
    </div>
  );
}