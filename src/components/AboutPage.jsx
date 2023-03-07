import React from "react";
import "./AboutPage.css";
import  Footer from './Footer.jsx'

function AboutPage() {
  return (
    <div className="about-container">
      <div className="about-banner">
        <h1>About Us</h1>
      </div>
      <div className="about-content">
        <h2>Our Story</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien velit, aliquet eget commodo nec, auctor a
          sapien. Nam eu neque vulputate diam rhoncus faucibus. Curabitur quis varius libero. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
        <p>
          Sed iaculis metus vitae ligula lobortis sodales. Pellentesque eu quam sem, ac malesuada leo sem quam pellentesque
          vulputate. Proin et justo nec erat consectetur malesuada eget sit amet nulla. Nam ullamcorper convallis erat
          gravida bibendum.
        </p>
        <h2>Our Mission</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien velit, aliquet eget commodo nec, auctor a
          sapien. Nam eu neque vulputate diam rhoncus faucibus. Curabitur quis varius libero. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
        <p>
          Sed iaculis metus vitae ligula lobortis sodales. Pellentesque eu quam sem, ac malesuada leo sem quam pellentesque
          vulputate. Proin et justo nec erat consectetur malesuada eget sit amet nulla. Nam ullamcorper convallis erat
          gravida bibendum.
        </p>
      </div>
   <Footer/>
    </div>
   
  );
}

export default AboutPage;