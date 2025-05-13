import React, { useState } from 'react';

const projects = [
  {
    title: 'Mantis Dashboard Site',
    description: 'A responsive site built with React and TailwindCSS.',
    link: 'https://mantis-fxch.vercel.app/',
  },
  {
    title: 'React Jobs',
    description: 'Allows you to add Jobs and Show case Jobs',
    link: 'https://react-jobs-black.vercel.app/',
  },
  {
    title: 'AI Image Generator',
    description: 'Generates Images using AI',
    link: 'https://ai-image-generator-xi-ruby.vercel.app/',
  },
];

const moreProjects = [
  {
    title: 'To-Do List',
    description: 'A To-Do list that helps you plan your day',
    link: 'https://reactjs-todolist-alpha.vercel.app/',
  },
  {
    title: 'Image Generator',
    description: 'An image generator webpage thaat generates images based on search terms',
    link: 'https://image-generator-tau-eight.vercel.app/',
  },
  {
    title: 'Technical Writing Blog',
    description: 'A Blog created with Html,CSS, Javascript and Jquery',
    link: 'https://technical-writing-one.vercel.app/',
  },
];

export default function Projects() {

  const [showMore, setShowMore] = useState(false);

  const toggleMoreProjects = () => setShowMore(!showMore);


  return (
   <section id="projects">
      <h2 className="text-2xl font-semibold mb-6 text-blue-600">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(project => (
          <div key={project.title} className="bg-white p-6 shadow rounded hover:shadow-lg transition">
            <h3 className="text-lg font-bold mb-2">{project.title}</h3>
            <p className="mb-4 text-sm text-gray-600">{project.description}</p>
            <a href={project.link} className="inline-block text-blue-500 hover:underline">View Project →</a>
          </div>
        ))}

          {showMore &&
          moreProjects.map((project) => (
            <div key={project.title} className="bg-white p-6 shadow rounded animate-fade-in">
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="mb-4 text-sm text-gray-600">{project.description}</p>
              <a href={project.link} className="inline-block text-blue-500 hover:underline">View Project →</a>
            </div>
          ))}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={toggleMoreProjects}
          className="text-blue-600 font-medium hover:underline transition"
        >
          {showMore ? 'Show Less ▲' : 'View More Projects ▼'}
        </button>
      </div>
    </section>
  );
}