import React from 'react';
import "./Projects.css"

const Projects = () => {
  // Dummy project data (replace this with your actual project data)
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'Description for Project One',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Project One',
      description: 'Description for Project One',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'Project One',
      description: 'Description for Project One',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      title: 'Project Two',
      description: 'Description for Project Two',
      imageUrl: 'https://via.placeholder.com/150',
    },
    // Add more project objects as needed
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map(project => (
          <div className="project" key={project.id}>
            <img src={project.imageUrl} alt={project.title} className="project-image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
