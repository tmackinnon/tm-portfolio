import Image from 'next/image';
import js from '../../public/js.png'
import html from '../../public/html.png'
import css from '../../public/css.png'
import ruby from '../../public/ruby.png'
import nodejs from '../../public/nodejs.png'
import react from '../../public/react.png'
import express from '../../public/express.png'
import jquery from '../../public/jquery.png'
import sass from '../../public/sass.png'
import rails from '../../public/rails.png'
import jest from '../../public/jest.png'
import mocha from '../../public/mocha.png'
import chai from '../../public/chai.png'
import cypress from '../../public/cypress.png'
import storybook from '../../public/storybook.png'
import git from '../../public/git.png'
import postrgesql from '../../public/postgresql.png'

export default function Skills() {
  return (
    <div className="flex flex-col pb-48 bg-secondary items-center text-primary w-screen">
      <div className="waveB">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
      
      <div className="flex flex-col rounded-lg text-primary mt-20 items-center">
        <h1 className='text-7xl font-bold font-sans mb-8'>Skills</h1>
        <h2 className='text-4xl mb-4'>Languages</h2>
        <div className='flex mb-8'>
          <Image className='px-1' src={js} alt='javascript icon'/>
          <Image className='px-1' src={html} alt='html icon'/>
          <Image className='px-1' src={css} alt='css icon'/>
          <Image className='px-1' src={ruby} alt='ruby icon'/>
        </div>
        <h2 className='text-4xl mb-4'>Frameworks, Libraries and Environments</h2>
        <div className='flex mb-8'>
          <Image className='px-2' src={nodejs} alt='nodejs icon'/>
          <Image className='px-2' src={react} alt='react icon'/>
          <Image className='px-2' src={express} alt='express icon'/>
          <Image className='px-2' src={jquery} alt='jquery icon'/>
          <Image className='px-2' src={sass} alt='sass icon'/>
          <Image className='px-2' src={rails} alt='rails icon'/>
        </div>
        <h2 className='text-4xl mb-4'>Testing</h2>
        <div className='flex mb-8'>
          <Image className='px-2' src={jest} alt='jest icon'height={96} width={96}/>
          <Image className='px-2' src={mocha} alt='mocha icon'height={96} width={96}/>
          <Image className='px-2' src={chai} alt='chai icon' height={96} width={96}/>
          <Image src={storybook} alt='storybook icon'/>
          <Image src={cypress} alt='cypress icon'/>
        </div>
        <h2 className='text-4xl mb-4'>Systems, CMS, Databases</h2>
        <div className='flex mb-8'>
          <Image className='p-2' src={git} alt='git icon'/>
          <Image className='p-2' src={postrgesql} alt='postrgesql icon'/>
        </div>
      </div>
    </div>
  );
}