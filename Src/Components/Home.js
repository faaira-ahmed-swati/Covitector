import React, { Component } from 'react';
import imgg from '../Images/covid.png';
import { NavLink } from 'react-router-dom';
const Home =()=> {
    return(
        <>
        <section id="header" className='d-flex align-items-center'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row'>
                        <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column'>
                            <h1>
                                Get yourself tested for covid-19 using
                                <strong className='brand-name'>
                                <br/>Covitector
                                </strong>
                            </h1>
                            <h2 className='my-3'>
                                We offer a non-invasive covid-19 detection platform!
                            </h2>
                            <div className="mt-3" >
                                <NavLink to = "/main" className ="btn-get-started">
                                    Get Started
                                </NavLink> 
                            </div>
                        </div>
                        <div className='col-lg-6 order-1 order-2'>
                            <img src={imgg} className="img-fluid animated" alt='home img'/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
        <br/>
        <br/>
        <br/>
        
        <footer>
            <section className='majorSection' style={{"display":'flex'}}>

                <section className='majorSection'>
                    <h2>Authors</h2>
                    <section className='minorSection'>
                        <p>Omer Ihtizaz</p>
                        <p>Email: i180404@nu.edu.pk</p>
                        <p>Student at FAST</p>
                    </section>
                    <section className='minorSection'>
                        <p>Faaira Ahmed</p>
                        <p>Email: i180423@nu.edu.pk</p>
                        <p>Student at FAST</p>
                    </section>
                </section>

                <section className='majorSection'>
                    <h2>Collaborators</h2>
                    <section className='minorSection'>
                        <p>Mr. Umair Arshad</p>
                        <p>Supervisor</p>
                        <p>Assistant Professor At FAST, Pakistan</p>
                        
                    </section>
                    <section className='minorSection'>
                        <p>Dr. Salman Ijaz</p>
                        <p>Co-Supervisor</p>
                        <p>Lab Researcher at NTNU, Norway</p>
                    </section>
                </section>

                
                <section className='majorSection' >
                    <h2>Services</h2>
                    <section className='majorSection' style = {{'display':'flex'}}>
                        <section className='majorSection'>
                            
                            <section className='minorSection'>
                                <p>Upload</p>
                                <p>Upload your pre-recorded coughs to diagnose yourself!</p>
                            </section>
                            <section className='minorSection'>
                                <p>Record</p>
                                <p>Record on the go!</p>
                            </section>
                            
                        </section>
                        <section className='majorSection'>
                            <section className='minorSection'>
                                <p>Daily Statistics</p>
                                <p>Get daily updates about new cases!</p>
                            </section>
                            <section className='minorSection'>
                                <p>Red Zones</p>
                                <p>Check live cases in your vicinity through maps!</p>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
            <p>&copy; 2021 Covitector.com</p>
        </footer>

        </>
    ) 
}
 
export default Home;
