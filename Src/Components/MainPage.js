import React, { useEffect, useState } from 'react'
// import imgg from "../Images/bg1.jpg";
import { useNavigate } from "react-router-dom";
import {ref as sref, set,update} from "firebase/database";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";
import {auth,db} from '../base';
export var emaill="";

function MainPage(){
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const[user,setUser]=useState({});
    var latt;
    var lngg;
    onAuthStateChanged(auth,(currentUser) => {
        setUser(currentUser);
    })
    const login = async () => {
      console.log(emaill);
    try {
        const user = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        navigator.geolocation.getCurrentPosition(position => {
          latt = position.coords.latitude;
          lngg = position.coords.longitude;
          var email1= "";
          email1 = emaill.split(".");
          console.log("Pehlay : "  + email1)
          email1 = email1[0];
          console.log(email1);
      update(sref(db, "data/" + email1),{
              lat: latt,
              lng: lngg,
            }).catch(alert);
        });
        navigate('/upload', { replace: true })
        // console.log(user);
      } catch (error) {
        console.log(error.message);
        alert("User or password incorrect");
      }
    };
    const signup = () => {
      navigate('/signup', { replace: true })
    };    
    
    const logout = async () => {
        await signOut(auth);
    };
    return(
      <section style={{"width":"100%","height":"100%","display": "flex"}}>
        <section style={{"width":"50%","height":"655px","backgroundColor":"white"}}>
          <section className='bodycontainer'>
            <br/><br/><br/>
            <input className="input" value={email} placeholder='Email' onChange={(event)=>{setEmail(event.target.value);emaill=event.target.value;}}/>
            <br/><br/>
            <input className="input" type="password" value={password} placeholder='Password' onChange={(event)=>{setPassword(event.target.value);}}/>
            <br/><br/>
            <button className="btn1"  onClick={login}>Login</button>
          </section>
        </section>
        <section style={{"width":"50%","height":"655px","backgroundColor":"teal"}}>
          <section className='bodycontainer1'>
            <hr/><br/>
            <text style={{"color":"white","fontSize":"40px","fontFamily":"Georgia"}}>Welcome to Covitector!</text>
            <br/><br/>
            <text style={{"color":"white","fontSize":"20px","fontFamily":"Georgia","color":"white"}}>Enter your email and password to begin</text>
            <br/><br/><br/>
            <text style={{"color":"yellow"}}>No account? Create one!</text><br/>
            <button className="btn11"  onClick={signup}>Sign Up</button>
            <br/><br/>
            <hr/>
          </section>
        </section>     
      </section>

    );
    
}
export default MainPage;