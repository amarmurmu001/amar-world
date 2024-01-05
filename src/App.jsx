import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

function App() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('#main'), // Replace with your scroll container's ID or class
      smooth: true, // Enable smooth scrolling
      // Add other Locomotive Scroll options here
    });

    return () => {
      if (scroll) {
        scroll.destroy(); // Destroy the Locomotive Scroll instance when the component unmounts
      }
    };
  }, []);

  return (
    <main id="main">
      <Navbar />
      <Header />
      <Projects />
    </main>
  );
}

export default App;
