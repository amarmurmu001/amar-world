import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "E-commerce Website",
      description:
        "Built a responsive e-commerce platform using React and Redux.",
    },
    {
      id: 2,
      name: "Task Management App",
      description:
        "Developed a task management application with user authentication using Node.js and MongoDB.",
    },
    {
      id: 3,
      name: "Blog Website",
      description:
        "Created a blog website using Gatsby.js for better performance and SEO optimization.",
    },
    {
      id: 4,
      name: "Weather App",
      description:
        "Designed a weather application fetching data from OpenWeatherMap API using React hooks.",
    },
    {
      id: 5,
      name: "Recipe Finder",
      description:
        "Implemented a recipe finder application using Spoonacular API and React with TypeScript.",
    },
    // Add more projects as needed
  ];

  return (
    <div className="featured-projects">
      <h2>Featured Projects </h2>
      {projects.map((project) => (
        <div key={project.id} className="elem">
          <div className="overlay"></div>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
