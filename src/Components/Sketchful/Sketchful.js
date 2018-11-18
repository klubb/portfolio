import React from "react";
import "./Sketchful.css";
import Header from "../Header/Header";

const Sketchful = () => {
  return (
    <div id="sketchful-container">
      <Header />
      <div className="projects-container">
        <div className="projects-info">
          <h1 className="projects-header">Sketchful</h1>
          <span className="projects-subheader">
            An interactive drawing and chat app that utilizes sockets to update
            live in real time to other clients.
          </span>
          <span style={{ opacity: 0.8 }} className="projects-subheader">
            6 weeks coding experience
          </span>
          
          
          
          {/* <h2 class="sentence">
            Built using these technolgies 
            <div class="slidingVertical">
              <span>Amazing.</span>
              <span>Beautiful.</span>
              <span>Cute.</span>
              <span>Delightful.</span>
              <span>Emotional.</span>
            </div>
          </h2> */}
          

          <hr className="hr-white" />
        </div>
      </div>

      <div className="info-body">
        <h1 className="info-header">The process</h1>
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
          fuga, alias enim vel nemo consequatur doloremque, minus corporis
          molestias magnam eveniet provident ipsum perferendis voluptatibus
          odio? Voluptas, dolorum neque amet nemo veritatis explicabo? Id
          dolores est assumenda nostrum ut quis, rerum minus beatae autem,
          laudantium hic sint harum! Optio, autem?
        </span>
        <div>
          <button className="projects-button">Github repo</button>
          <button className="projects-button1">Live Site</button>
        </div>
      </div>
    </div>
  );
};

export default Sketchful;
