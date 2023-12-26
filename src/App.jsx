import "./App.css";
import mainimg from "./assets/profile-dope.jpg"

function App() {
  return (
    <main>
      <div className="header">
        <div className="captions">
          <h1>
            Hello, I’m Abo, a product Designer With 7 years of experience.
          </h1>
          <p>
            I care a lot about using design for positive impact. and enjoy
            creating user-centric, delightful, and human experiences.
          </p>
          <div className="icons">
            <button type="button">Contact me</button>
          </div>
        </div>
        <div className="main-img">
          <img src={mainimg} alt="" />
        </div>
      </div>
    </main>
  );
}

export default App;
