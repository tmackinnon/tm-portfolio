'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {

  //h-28 = 112px
  const [scroll, setScroll] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    changeBackground();
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  });
 

  return (
    <div className={`flex fixed top-0 left-0 right-0 m-0 w-screen h-28 items-center justify-center shadow-lg ${scroll ? 'bg-primary text-secondary border-secondary' : 'bg-secondary text-primary border-primary'}`}>
      <div className="flex justify-between m-0 w-3/4 min-w-min items-center">
        <h1 className='text-6xl font-sans'>Tara MacKinnon</h1>
        <div className="flex">
          <Link href="#About" className="m-4 text-2xl font-semibold hover:border-b-2">About</Link>
          <Link href="#Projects" className="m-4 text-2xl font-semibold hover:border-b-2">Projects</Link>
          <h3 className="m-4 text-2xl font-semibold hover:border-b-2">Contact</h3>
        </div>
      </div>
    </div>
  );
}