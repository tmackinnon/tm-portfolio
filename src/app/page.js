import About from '@/components/About';
import Nav from '@/components/Nav';

export default function Home() {
  return (
    <div className="w-screen">
      <Nav/>
      <h1>My Homepage</h1>
      <About/>
    </div>
  );
}
