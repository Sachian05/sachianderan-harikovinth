/**
 * @copyright 2024 Sachianderan Hari Kovinth
 * @license Apache-2.0
 */


/**
 * Components
 */
import ProjectCard from "./ProjectCard";
import img1 from '/images/project-1.jpg';
import img2 from '/images/project-2.jpg';
import img3 from '/images/project-3.jpg';
import img4 from '/images/project-4.jpg';
import img5 from '/images/project-5.jpg';
import img6 from '/images/project-6.jpg';


const works = [
  {
    imgSrc: img1,
    title: 'Calculator App',
    tags: ['JAVA', 'JS', 'CSS3', 'HTML5'],
    projectLink: 'https://github.com/Sachian05/sachianderan-harikovinth.git'
  },
  {
    imgSrc: img2,
    title: 'Placeholders',
    tags: ['N/A'],
    projectLink: 'https://github.com/Sachian05/sachianderan-harikovinth.git'
  },
  {
    imgSrc: img3,
    title: 'Placeholders',
    tags: ['N/A'],
    projectLink: 'https://github.com/Sachian05/sachianderan-harikovinth.git'
  },
  {
    imgSrc: img4,
    title: 'Placeholders',
    tags: ['N/A'],
    projectLink: 'https://github.com/Sachian05/sachianderan-harikovinth.git'
  },
  {
    imgSrc: img5,
    title: 'Placeholders',
    tags: ['N/A'],
    projectLink: 'https://github.com/Sachian05/sachianderan-harikovinth.git'
  },
  {
    imgSrc: img6,
    title: 'Placeholders',
    tags: ['N/A'],
    projectLink: 'https://github.com/Sachian05/sachianderan-harikovinth.git'
  },
];


const Work = () => {
  return (
    <section
      id="work"
      className="section"
    >
      <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
          My past projects
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Work