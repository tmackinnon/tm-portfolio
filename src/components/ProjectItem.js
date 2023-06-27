import Image from 'next/image';

export default function ProjectItem(props) {

  return (
    <div className='flex flex-col items-center w-2/5 shadow-lg m-6'>
      <div className='flex flex-col items-center p-6 w-full bg-blue-50 rounded'>
        <Image
          src={props.image}
          alt="Petal Profits Homepage Screenshot"
          width={500}
          height={400}
        />
      </div>
      <div className='flex flex-col w-full mt-1 p-4'>
        <h3 className='text-xl font-bold'>{props.title}</h3>
        <p className='mt-2'>{props.description}<br></br><b>Tech Stack:</b> NodeJS, Express, ReactJS, PostgreSQL, SASS</p>
      </div>
    </div>
  );
}