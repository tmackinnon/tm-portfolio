import Button from "./Button";
// import { Shrikhand } from 'next/font/google';
// const shrikhand = Shrikhand({ subsets: ['latin'], weight: '400' });

export default function About() {
  return (
    <div>
      <h1 className='text-5xl font-bold font-sans'>About Me</h1>
      <div className='text-xl'>
        <h2>Hi there! I&apos;m Tara, a full-stack web developer based in Vancouver, BC.</h2>
        <p>
          With a background in fundraising and not-for-profits, my desire to make a meaningful difference has been a constant driving force.
          As I transition into a career in tech, that motivation persists and I am inspired by the industry&apos;s potential to address the social and environmental challenges of today.
          I firmly believe that the power of tech can be harnessed to create innovative solutions and I am excited to play a role in driving that positive change.
        </p>
      </div>
      <Button title='Learn More'/>
    </div>
  );
}