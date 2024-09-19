import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import "./Navbar.css"
import imgg from "../Images/logo.png"
function Navbar(){
    return (
        <div style={{"backgroundColor":"aliceblue"}}>
        <img style={{"width":"17%","paddingTop":"1%"}} src={imgg}></img>
        <input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
        <label for="menu-icon"></label>
        <nav class="navB"> 		
            <ul class="pt-5">
            <li><NavLink to = "/">Home</NavLink></li>
            <li><NavLink to = "/record">Record</NavLink></li>
            <li><NavLink to = "/upload">Upload</NavLink></li>
            <li><NavLink to = "/dailystats">Daily Statistics</NavLink></li>
            <li><NavLink to = "/cases">Covid Cases</NavLink></li>
            </ul>
        </nav>
        </div>
    );
}
 
export default Navbar;