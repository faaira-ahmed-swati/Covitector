import "./aboutus.css"
import React, { useEffect, useState } from 'react'
import imgg from "../Images/3.jpg";
import umair from "../Images/umair.png";
import omer from "../Images/1.jpeg"
import salman from "../Images/2.jpeg"
import {useNavigate}  from "react-router-dom";
function AboutUs(){
  const navigate = useNavigate();
  const handleclick = () =>{
    navigate('/main', { replace: true })
  }
  return(
    <>
    <div className="head w3-container w3-dark-green w3-center">
  <h1 className="text w3-margin w3-jumbo">Covitector</h1>
  <p className="text w3-xlarge ">Perform non-invasive, rapid and free of cost Covid-19 detection</p>
  <button className="w3-button w3-light-grey w3-padding-large w3-large w3-margin-top" onClick={handleclick}>Get Started</button>
</div>

    <div className="w3-row w3-container">
    <div className="w3-center w3-padding-64">
      <span className="w3-xlarge w3-bottombar w3-border-dark-grey w3-padding-16">What We Offer</span>
    </div>
    <div className="w3-col l3 m6 w3-green w3-container w3-padding-16">
      <h3>Upload cough to get tested</h3>
      <p>Our application provides user with the option to upload their pre-recorded coughs for covid-19 detection within few seconds.</p>
    </div>

    <div className="w3-col l3 m6 w3-light-green w3-container w3-padding-16">
      <h3>Record cough to get tested</h3>
      <p>Our application provides user with the option to record their cough and perform realtime covid-19 detection.</p>
    </div>

    <div className="w3-col l3 m6 w3-cyan w3-container w3-padding-16">
      <h3>Covid-19 Daily Statistics</h3>
      <p>Our application provides user with the current statistics concerning the global covid-19 cases.</p>
    </div>

    <div className="w3-col l3 m6 w3-light-blue w3-container w3-padding-16">
      <h3>Covid-19 Red Zones</h3>
      <p>Our application provides the user to look for the covid-19 positive cases in the vicinity nearby.</p>
    </div>
  </div>
  <div className="w3-center w3-padding-64">
      <span className="w3-xlarge w3-bottombar w3-border-dark-grey w3-padding-16">Who We Are</span>
    </div>
  <div className="w3-row-padding" id="about" style={{"display":"flex"}}>

    <div className="w3-third w3-margin-bottom">
      <div className="w3-card-4">
        <img className = "imm" src={imgg}/>
        <div className="w3-container">
          <h3>Faaira Ahmed</h3>
          <p className="w3-opacity">Project Member</p>
          <p>Worked on the Deep learning Model development and Web Application development as part of the Final Year Project.</p>
          <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
        </div>
      </div>
    </div>

    <div className="w3-third w3-margin-bottom">
      <div className="w3-card-4">
      <img className = "im" src={omer}/>
        <div className="w3-container">
          <h3>Omer Ihtizaz</h3>
          <p className="w3-opacity">Project Member</p>
          <p>Worked on the Deep learning Model development and Web Application development as part of the Final Year Project.</p>
          <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
        </div>
      </div>
    </div>

    <div className="w3-third w3-margin-bottom">
      <div className="w3-card-4">
      <img className = "im" src={umair}/>
        <div className="w3-container">
          <h3>Umair Arshad</h3>
          <p className="w3-opacity">FYP Supervisor</p>
          <p>Monitored progress and guided about technical issues concerning the project.Trained students for teamwork and professional ethics.  </p>
          <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
        </div>
      </div>
    </div>
    <div className="w3-third w3-margin-bottom">
      <div className="w3-card-4">
      <img className = "im" src={salman}/>
        <div className="w3-container">
          <h3>Dr. Salman Ijaz</h3>
          <p className="w3-opacity">FYP Co-Supervisor</p>
          <p>Guided about technical issues concerning the project. As an external supervisor provided the students with a flavor of working in industry.  </p>
          <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
        </div>
      </div>
    </div>
  </div>
  <div className="w3-center w3-padding-64" id="contact">
    <span className="w3-xlarge w3-bottombar w3-border-dark-grey w3-padding-16">Contact Us</span>
  </div>

  <form className="w3-container" action="/action_page.php" target="_blank">
    <div className="w3-section">
      <label>Name</label>
      <input className="w3-input w3-border w3-hover-border-black"/>
    </div>
    <div className="w3-section">
      <label>Email</label>
      <input className="w3-input w3-border w3-hover-border-black"/>
    </div>
    <div className="w3-section">
      <label>Subject</label>
      <input className="w3-input w3-border w3-hover-border-black"/>
    </div>
    <div className="w3-section">
      <label>Message</label>
      <input className="w3-input w3-border w3-hover-border-black"/>
    </div>
    <button type="submit" className="w3-button w3-block w3-black">Send</button>
  </form>
  <br/>
<footer class="w3-container w3-padding-32 w3-light-grey w3-center">
  <a href="#" class="w3-button w3-black w3-margin"><i class="fa fa-arrow-up w3-margin-right"></i>To the top</a>
  <div class="w3-xlarge w3-section">
    <a href="https://github.com/FaairaAhmed/Covitector"><i class="fa fa-facebook-official w3-hover-opacity"></i></a>{" "}
    <a href="https://github.com/FaairaAhmed/Covitector"><i class="fa fa-instagram w3-hover-opacity"></i></a>{" "}
    <a href="https://github.com/FaairaAhmed/Covitector"><i class="fa fa-github w3-hover-opacity"></i></a>{" "}
    <a href="https://www.linkedin.com/in/faaira-ahmed/"><i class="fa fa-linkedin w3-hover-opacity"></i></a>
  </div>
</footer>
    </>


  );
}  
export default AboutUs;