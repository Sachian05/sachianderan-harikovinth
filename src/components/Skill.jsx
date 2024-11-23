/**
 * @copyright 2024 Sachianderan Hari Kovinth
 * @license Apache-2.0
 */


/**
 * Components
 */
import SkillCard from "./SkillCard";
import img1 from '/images/figma.svg';
import img2 from '/images/css3.svg';
import img3 from '/images/javascript.svg';
import img4 from '/images/nodejs.svg';
import img5 from '/images/expressjs.svg';
import img6 from '/images/mongodb.svg';
import img7 from '/images/react.svg';
import img8 from '/images/tailwindcss.svg';

const skillItem = [
  {
    imgSrc: img1,
    label: 'Figma',
    desc: 'Design tool'
  },
  {
    imgSrc: img2,
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: img3,
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: img4,
    label: 'NodeJS',
    desc: 'Web Server'
  },
  {
    imgSrc: img5,
    label: 'ExpressJS',
    desc: 'Node Framework'
  },
  {
    imgSrc: img6,
    label: 'MongoDB',
    desc: 'Database'
  },
  {
    imgSrc: img7,
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: img8,
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
];


const Skill = () => {
  return (
    <section className="section">
      <div className="container">

        <h2 className="headline-2 reveal-up">
          Essential Tools I use
        </h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {
            skillItem.map(({ imgSrc, label, desc }, key) => (
              <SkillCard
                key={key}
                imgSrc={imgSrc}
                label={label}
                desc={desc}
                classes="reveal-up"
              />
            ))
          }
        </div>

      </div>
    </section>
  )
}

export default Skill