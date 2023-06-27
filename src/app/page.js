import About from '@/components/About';
import Nav from '@/components/Nav';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <div className="w-screen">
      <Nav/>
      <About/>
      <Projects/>
    </div>
  );
}
