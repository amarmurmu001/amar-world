import React from 'react';
import mainimg from "../../assets/profile-dope.jpg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="captions">
        <h1>Hello, I’m Amar, a Web Designer With 3 years of experience.</h1>
        <p>
          I care a lot about using design for positive impact and enjoy creating user-centric, delightful, and human experiences.
        </p>
        <div className="icons">
          <button type="button">Contact me</button>
        </div>
      </div>
      <div className="main-img">
        <img src={mainimg} alt="" className="img-fluid" />
      </div>
    </div>
  );
};

export default Header;
