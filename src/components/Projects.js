import project1 from '../../public/PetalProfitsHome.png';
import project2 from '../../public/SchedulerHome.png';
import project3 from '../../public/TweeterHome.png';
import project4 from '../../public/DecisionMaker.png';
import ProjectItem from './ProjectItem';


const projects = [
  {image: project1, title: 'Petal Profits', description: 'A personal finance and budgeting application that uses the analogy of growing a garden to help users better understand their finances and increase their financial literacy', stack: 'NodeJS, Express, ReactJS, PostgreSQL, SASS', link:'https://github.com/tmackinnon/petal-profits'},
  {image: project4, title: 'Decision Maker', description: 'A web app that helps groups of friends to vote on a preferred choice (using ranked voting) to make a group decision.', stack: 'NodeJS, Express, EJS, PostgreSQL, SASS', link: 'https://github.com/tmackinnon/decision-maker'},
  {image: project2, title: 'Interview Scheduler', description: 'A scheduler app, where users can create, edit and delete interview appointments.', stack: 'React, HTML, CSS, NodeJS, Express, PostgreSQL, Jest, Storybook, Cypress', link: 'https://github.com/tmackinnon/scheduler'},
  {image: project3, title: 'Tweeter', description: 'A simplified single-page Twitter clone.', stack: 'HTML, CSS, JS, jQuery, Ajax, NodeJS, Express', link: 'https://github.com/tmackinnon/tweeter'}

];

export default function Projects() {

  const projectItems = projects.map((item, index) => {
    return (
      <ProjectItem
        key={index}
        image={item.image}
        title={item.title}
        description={item.description}
        stack={item.stack}
        link={item.link}
      />
    );
  });

  return (
    <div className="m-6 w-full flex flex-col">
      <h1 className='text-5xl font-bold font-sans'>My Projects</h1>
      <div className='flex flex-wrap w-full justify-around'>
        {projectItems}
      </div>
    </div>
  );
}