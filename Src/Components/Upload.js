import Navbar from "./Navbar";
import {storage} from '../base';
import { useState,useEffect } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import {ref as sref, update, get, child} from "firebase/database";
import {db} from '../base';
import {emaill} from "./MainPage";
import {emaill1} from "./SignUp";
import formData from "./file";
import {NavLink} from 'react-router-dom';
// import {ref, get,child} from "firebase/database";

function Upload(){
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState();
  var latt;
  var lngg;
  const saveFile = async (blob) => {
    const a = document.createElement('a');
    a.download = 'myfile.wav';
    a.href = URL.createObjectURL(blob);
    formData.append('file', blob)
    formData.append('value', '0')
    
    fetch("/time", 
      {
        method: 'POST', 
        body: formData,
      })
      .then(res => res.json())
        .then(res => {
          setCurrentTime(res.text);
          document.getElementById('uploading').style.visibility = "hidden"
          if(res.text == "Positive"){
            navigator.geolocation.getCurrentPosition(position => {
              latt = position.coords.latitude;
              lngg = position.coords.longitude;
              var email= "";
              email = emaill.split(".");
              console.log(email);
              email = email[0];
              console.log(email);
              update(sref(db,"data/" + email),{
                    lat: latt,
                    lng: lngg,
                    status: "positive"
                  }).catch(alert);
            });
          }
          else if(res.text == "Healthy"){
            navigator.geolocation.getCurrentPosition(position => {
              latt = position.coords.latitude;
              lngg = position.coords.longitude;
              var email= "";
              email = emaill.split(".");
              console.log(email);
              email = email[0];
              console.log(email);
              update(sref(db,"data/" + email),{
                    lat: latt,
                    lng: lngg,
                    status: "negative"
                  }).catch(alert);
            });
          }
        });
    
  };
  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
  };
  const uploadFiles = (file) => {
    if (!file) return;
    document.getElementById('uploading').style.visibility = "visible"
    const sotrageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
        // setCurrentTime("Result pending");
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
        });
      }

    );
    saveFile(file);
    // insert();
    document.getElementById('h1').innerHTML = "Waiting for results!"
  };  

  return (
    <div>
      <Navbar/>
      <section style={{"width":"100%","height":"100%","display": "flex"}} >
        <section style={{"width":"50%","height":"575px"}}>
          <section className='bodyycontainer'>
            <form style={{"margin-top":"10%"}} onSubmit={formHandler} enctype="multipart/form-data">
              <label for="file-upload" class="btn11">Select File</label>
              <input id="file-upload" type="file"/>
              <button type="submit" className="btn11">Upload</button><br/><br/>
              <label id = "uploading" style={{visibility : 'hidden',"color":"white","fontSize":"25px","fontFamily":"Georgia"}}>Uploading done {progress}%</label>
              <br/><h1 style={{"color":"yellow","fontSize":"30px","fontFamily":"Georgia"}} id="h1">{currentTime}</h1>            
            </form>
          </section>
        </section>
        <section style={{"width":"50%","height":"575px"}}>
          <section className='bodyycontainer1'>
              <hr/>
              <text style={{"color":"white","fontSize":"30px","fontFamily":"Georgia"}}>Instructions</text>
              <hr/>
              <ol style={{"display":"inline-block","textAlign":"left"}}>
                <li>Press the Select File button to upload your cough audio file</li>
                <li>Press the Get tested button to get yourself tested for covid-19</li>
                <li>Wait for a while till we process your result</li>
              </ol>
              <br/><text style={{"color":"white","fontSize":"20px","fontFamily":"Georgia"}}>In case you don't have your recorded cough </text>
              <NavLink to = "/record" style={{"color":"white","fontSize":"20px","fontFamily":"Georgia"}}>click here</NavLink>
              <br/><br/>
              <text style={{"color":"yellow","fontSize":"25px"}}>If you are tested positive,</text><br/>
              <text style={{"color":"yellow","fontSize":"25px"}}>Kindly seek medical assistance!</text>
          </section>
        </section>
      </section>
    </div>
  );
} 
export default Upload;