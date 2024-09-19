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
export var emaill1="";

function SignUp(){
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setcPassword] = useState('')
    const[user,setUser]=useState({});
    onAuthStateChanged(auth,(currentUser) => {
        setUser(currentUser);
    })
    const login = async () => {
        navigate('/main', { replace: true })
    };
    const signup = async () => {
        try {
          console.log("email is: " + email)
            if(password == cpassword){
               
                const user = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                  );
                  console.log(user);
                  alert("User Successfully created!");
                  var latt;
                  var lngg;
                  navigator.geolocation.getCurrentPosition(position => {
                      latt = position.coords.latitude;
                      lngg = position.coords.longitude;
                      var email= "";
                      email = emaill1.split(".");
                      console.log(email);
                      email = email[0];
                      console.log(email);
                  set(sref(db,"data/" + email),{
                          lat: latt,
                          lng: lngg,
                          status: "negative"
                        }).catch(alert);
                    });
                navigate('/main', { replace: true })
            }
            else{
                alert("Password don't match");
            }
          
        } catch (error) {
          console.log(error.message);
        }
      };    
    
    const logout = async () => {
        await signOut(auth);
    };
    return(
      <section style={{"width":"100%","height":"100%","display": "flex"}}>
        <section style={{"width":"50%","height":"655px","backgroundColor":"teal"}}>
          <section className='bodycontainer1'>
            <hr/>
            <text style={{"color":"white","fontSize":"40px","fontFamily":"Georgia"}}>To Get Yourself Tested</text>
            <br/><br/>
            <text style={{"color":"white","fontSize":"30px","fontFamily":"Georgia","color":"white"}}>Create account!</text>
            <br/><br/><br/>
            <text style={{"color":"yellow"}}>Already have an account?</text><br/>
            <button className="btn11"  onClick={login}>Sign In</button>
            <br/><br/>
            <hr/>
          </section>
        </section>   
        <section style={{"width":"50%","height":"649px","backgroundColor":"white"}}>
          <section className='bodycontainer'>
            <br/>
            <input className="input" type={password} value={email} placeholder='Email' onChange={(event)=>{setEmail(event.target.value);emaill1=event.target.value;}}/>
            <br/><br/>
            <input className="input" type="password" value={password} placeholder='Password' onChange={(event)=>{setPassword(event.target.value);}}/>
            <br/><br/>
            <input className="input" type="password" value={cpassword} placeholder='Confirm Password' onChange={(event)=>{setcPassword(event.target.value);}}/>
            <br/><br/>
            <button className="btn1"  onClick={signup}>Sign Up</button>
          </section>
        </section>  
      </section>
          /* <div className="d1">
              <div className="container">
                <input className="input" value={email} placeholder='Email' onChange={(event)=>{setEmail(event.target.value);emaill1=email;}}/>
                <br/>
                <br/>
                <input className="input" type="password" value={password} placeholder='Password' onChange={(event)=>{setPassword(event.target.value);}}/>
               <br/><br/>
               <section>
                    <button className="btn1"  onClick={login}>
                        Login
                    </button>
                </section>
                <br/>  */
                /* <section>
                <button className="btn1" onClick={signup}>
                    Signup
                </button>
                </section>  */
                /* <label className='textt1'> User Logged In: </label>
                {user?.email}
                <br/>
                <button className="btn2" onClick={logout}> Sign Out </button> 
             </div>
            </div> */

    );
    
}
export default SignUp;