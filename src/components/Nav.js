import Link from "next/link";

export default function Nav() {

 

  return (
    <div className="flex fixed top-0 left-0 right-0 m-0 w-screen h-28 items-center justify-center">
      <div className="flex justify-between m-0 w-3/4 min-w-min items-center">
        <h1 className='text-6xl font-sans'>Tara MacKinnon</h1>
        <div className="flex">
          <Link href="#About" className="p-4 text-2xl font-semibold">About</Link>
          <Link href="#Projects" className="p-4 text-2xl font-semibold">Projects</Link>
          <h3 className="p-4 text-2xl font-semibold">Contact</h3>
        </div>
      </div>
    </div>
  );
}