import Image from 'next/image';
import js from '../../public/js.png'
import html from '../../public/html.png'

export default function Skills() {
  return (
    <div className="flex flex-col pb-48 bg-secondary items-center text-primary w-screen">
      <div className="waveB">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
      
      <div className="flex flex-col rounded-lg text-primary mt-20 items-center">
        <h1 className='text-6xl font-bold font-sans mb-8'>Skills</h1>
        <h2 className='text-4xl mb-4'>Languages</h2>
          <Image src={js} alt='javascript icon'/>
          <Image src={html} alt='html icon'/>
        <h2 className='text-4xl mb-4'>Frameworks, Libraries and Environments</h2>
        <h2 className='text-4xl mb-4'>Testing</h2>
        <h2 className='text-4xl mb-4'>Systems, CMS, Databases</h2>
      </div>
    </div>
  );
}