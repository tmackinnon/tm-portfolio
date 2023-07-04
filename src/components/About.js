import Image from "next/image";
import Button from "./Button";
import profile from '../../public/profile.png';

//className="flex justify-between m-0 w-3/4 min-w-min p-4 items-center"

export default function About() {
  return (
    <div id='About' className="flex py-20 mt-48 w-3/4">
      <div className="mr-20">
        <h1 className='text-6xl font-bold font-sans mb-4'>About Me</h1>
        <h2 className='text-4xl mb-4'>
          Hi there! I&apos;m Tara, a full-stack web developer based in Vancouver, BC.
        </h2>
        <p className='text-2xl mb-4'>
            With a background in fundraising and not-for-profits, my desire to make a meaningful difference has been a constant driving force.
            As I transition into a career in tech, that motivation persists and I am inspired by the industry&apos;s potential to address the social and environmental challenges of today.
            I firmly believe that the power of tech can be harnessed to create innovative solutions and I am excited to play a role in driving that positive change.
        </p>
        <Button title='Learn More'/>
      </div>
      <Image
        className='rounded-full w-2/5 h-2/5'
        src={profile}
        width={350}
        height={350}
        alt="Picture of the author"
      />
    </div>
  );
}