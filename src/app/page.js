import About from '@/components/About';
import Nav from '@/components/Nav';
import Projects from '@/components/Projects';

//className="flex flex-col m-0 w-3/4 p-4 items-center justify-center"
export default function Home() {
  return (
    <div className='flex flex-col w-screen items-center bg-primary text-secondary'>
      <About/>
      <Projects/>
    </div>
  );
}
