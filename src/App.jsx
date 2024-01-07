import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

function App() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });

    console.log(scroll);

    return () => {
      if (scroll) {
        scroll.destroy();
      }
    };
  }, []);

  const projects = [
    {
      id: 1,
      name: "E-commerce Website",
      image:
        "https://images.pexels.com/photos/19133309/pexels-photo-19133309/free-photo-of-young-woman-in-a-hijab-walking-in-front-of-a-monumental-building.jpeg",
      description:
        "Built a responsive e-commerce platform using React and Redux.",
    },
    {
      id: 2,
      name: "Task Management App",
      image:
        "https://images.pexels.com/photos/19749458/pexels-photo-19749458/free-photo-of-riga.jpeg",

      description:
        "Developed a task management application with user authentication using Node.js and MongoDB.",
    },
    {
      id: 3,
      name: "Blog Website",
      image:
        "https://images.pexels.com/photos/19133309/pexels-photo-19133309/free-photo-of-young-woman-in-a-hijab-walking-in-front-of-a-monumental-building.jpeg",
      description:
        "Created a blog website using Gatsby.js for better performance and SEO optimization.",
    },
    {
      id: 4,
      name: "Weather App",
      image:
        "https://images.pexels.com/photos/19133309/pexels-photo-19133309/free-photo-of-young-woman-in-a-hijab-walking-in-front-of-a-monumental-building.jpeg",
      description:
        "Designed a weather application fetching data from OpenWeatherMap API using React hooks.",
    },
    {
      id: 5,
      name: "Recipe Finder",
      image:
        "https://images.pexels.com/photos/19133309/pexels-photo-19133309/free-photo-of-young-woman-in-a-hijab-walking-in-front-of-a-monumental-building.jpeg",
      description:
        "Implemented a recipe finder application using Spoonacular API and React with TypeScript.",
    },
  ];

  const [visiblity, setVisiblity] = useState(false);

  const showImage = (event) => {
    const imageUrl = event.currentTarget.getAttribute("data-img");
    const fixedImg = document.getElementById("fixed-img");
    if (fixedImg) {
      fixedImg.style.backgroundImage = `url(${imageUrl})`;
    }
    setVisiblity(true);
  };
  const hideImage = () => {
    const fixedImg = document.getElementById("fixed-img");
    if (fixedImg) {
      fixedImg.style.backgroundImage = "none";
    }
    setVisiblity(false);
  };

  const dynamicStyle = {
    display: visiblity ? "block" : "none",
  };
  return (
    <div className="body">
      <div style={dynamicStyle} id="fixed-img"></div>

      <div id="main">
        <Navbar />
        <Header />
        <div className="featured-projects">
          <h2> <div className="circle"></div>Featured Projects</h2>
          {projects.map((project) => (
            <div
              key={project.id}
              data-img={project.image}
              className="elem"
              onMouseEnter={showImage}
              onMouseLeave={hideImage}
            >
              <div className="overlay"></div>
              <h1>{project.name}</h1>
              {/* <p>{project.description}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
