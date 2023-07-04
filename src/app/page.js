import About from '@/components/About';
import Nav from '@/components/Nav';
import Projects from '@/components/Projects';

//className="flex flex-col m-0 w-3/4 p-4 items-center justify-center"
export default function Home() {
  return (
    <div className='flex flex-col w-screen items-center'>
      <Nav/>
      <div className="flex flex-col w-3/4">
        <About/>
        <Projects/>
      </div>
    </div>
  );
}
