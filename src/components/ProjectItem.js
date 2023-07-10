import Image from 'next/image';
import Link from 'next/link';

export default function ProjectItem(props) {

  return (
    <div className='flex flex-col items-center w-2/5 shadow-lg rounded-lg my-20 h-700px bg-primary pt-2'>
      <div className='p-1 bg-gra w-4/5'>
        <Link  href={props.link} className='flex flex-col items-center w-full justify-center rounded-none' style={{width: '100%'}}>
          <Image
            src={props.image}
            alt="Homepage Screenshot"
            width={600}
            height={400}
          />
        </Link>
      </div>
      <div className='flex flex-col w-full mb-2 px-4 pt-4 pb-8 items-startd text-gray-700 w-4/5'>
        <h3 className='text-3xl text-center font-bold border-b-2'>{props.title}</h3>
        <p className='mt-6 text-xl text-center'>{props.description}<br></br><b>Tech Stack:</b> NodeJS, Express, ReactJS, PostgreSQL, SASS</p>
      </div>
    </div>
  );
}