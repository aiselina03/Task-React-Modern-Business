import "./style.css";
import React from "react";

function Main() {
  return (
    <div>
      <div className="main">
        <div className="container">
          <div className="textImg">
            <div className="mainText">
              <h1>A Bootstrap 5 template for modern businesses</h1>
              <p>
                Quickly design and customize responsive mobile-first sites with
                Bootstrap, the world’s most popular front-end open source
                toolkit!
              </p>
              <button className="startBtn">Get Started</button>
              <button className="learnBtn">Learn More</button>
            </div>
            <div className="mainImg">
              <img src="https://dummyimage.com/600x400/343a40/6c757d" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
