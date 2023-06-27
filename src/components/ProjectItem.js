import Image from 'next/image';
import Link from 'next/link';

export default function ProjectItem(props) {

  return (
    <div className='flex flex-col items-center w-2/5 shadow-lg m-6 h-700px'>
      <Link  href={props.link} className='flex flex-col items-center p-6 w-full bg-blue-50 rounded justify-center' style={{width: '100%', height: '500px'}}>
        <Image
          src={props.image}
          alt="Petal Profits Homepage Screenshot"
          width={600}
          height={400}
        />
      </Link>
      <div className='flex flex-col w-full mt-1 p-4 items-start'>
        <h3 className='text-xl font-bold'>{props.title}</h3>
        <p className='mt-2'>{props.description}<br></br><b>Tech Stack:</b> NodeJS, Express, ReactJS, PostgreSQL, SASS</p>
      </div>
    </div>
  );
}