// import'../App.css';
import Navbar from './Navbar';
import MicRecorder from 'mic-recorder-to-mp3';
import AudioReactRecorder, { RecordState } from 'audio-react-recorder';
import React from 'react';
import {ref as sref, set,update} from "firebase/database";
import {db} from '../base';
import {emaill} from "./MainPage";
import {emaill1} from "./SignUp";
import formData from "./file";

const Mp3Recorder = new MicRecorder({ bitRate: 128 });
class Record extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      blobURL: '',
      latt: 0,
      lngg: 0,
      blobb:'',
      res:''
    };
  }
  componentDidMount(){
    document.getElementById('ad').style.visibility = "hidden";
    document.getElementById('gt').style.visibility = "hidden";
    
    console.log("hi");
    console.log(emaill);
    navigator.geolocation.getCurrentPosition(pos => {
      const coords = pos.coords;
      this.setState({
        latt : coords.latitude,
        lngg : coords.longitude
      });
    console.log(this.state.latt);
    }); 
    
    navigator.getUserMedia({ audio: true },
      () => {
        console.log('Permission Granted');
        this.setState({ isBlocked: false });
      },
      () => {
        console.log('Permission Denied');
        this.setState({ isBlocked: true })
      },
    );
  }
  testing=()=>{
    formData.append('file', this.state.blobb)
    formData.append('value', '1')
    fetch("/time", 
      {
        method: 'POST', 
        body: formData,
      })
      .then(res => res.json())
        .then(res => {
          this.setState({res: res.text});
          if(this.state.res.toLowerCase() == "positive"){
            var email= "";
            email = emaill.split(".");
            console.log(email);
            email = email[0];
            update(sref(db, "data/" + email),{
                  lat: this.state.latt,
                  lng: this.state.lngg,
                  status: "positive"
                }).catch(alert);
              }
          else if(this.state.res.toLowerCase() == "healthy"){
            var email= "";
            email = emaill.split(".");
            console.log(email);
            email = email[0];
            update(sref(db, "data/" + email),{
                  lat: this.state.latt,
                  lng: this.state.lngg,
                  status: "negative"
                }).catch(alert);
            
          }
        });
  };
  start = () => {
    this.setState({
      recordState: RecordState.START
    })
  };
 
  stop = () => {
    this.setState({
      recordState: RecordState.STOP
    })
    document.getElementById('ad').style.visibility = "visible";
    document.getElementById('gt').style.visibility = "visible";
  };
 
  //audioData contains blob and blobUrl
  onStop = (audioData) => {
    this.setState({blobb:audioData.blob, blobURL:audioData.url})
    console.log('audioData', audioData)
  };


  render(){
    const { recordState } = this.state;
    return (
      <div>
        <Navbar/>
        <section style={{"width":"100%","height":"100%","display": "flex"}}>
          <section style={{"width":"50%","height":"575px"}}>
            <section className='bodyycontainer'>
              <button onClick={this.start} className="btn11">Start</button>
              <button onClick={this.stop} className="btn11">Stop</button>
              <AudioReactRecorder backgroundColor={"darkseagreen"} foregroundColor={"white"} canvasWidth={"350"} canvasHeight={"80"} state={recordState} onStop={this.onStop} />
              <audio id="ad" src={this.state.blobURL} controls="controls" /><br/><br/>
              <button id="gt" onClick={this.testing} className="btn12">Get Tested</button><br/>
              <h1>{this.state.res}</h1>
            </section>
          </section>
          <section style={{"width":"50%","height":"575px"}}>
            <section className='bodyycontainer1'>
              <hr/>
              <text style={{"color":"white","fontSize":"40px","fontFamily":"Georgia"}}>Instructions</text>
              <hr/>
              <ol style={{"display":"inline-block","textAlign":"left"}}>
                <li>Press the Start button to begin recording your sound</li>
                <li>Press the Stop button to stop the recording</li>
                <li>Press the Get tested button to get yourself tested for covid-19</li>
              </ol>
              <br/><br/>
              <text style={{"color":"yellow","fontSize":"25px"}}>If you are tested positive,</text><br/>
              <text style={{"color":"yellow","fontSize":"25px"}}>Kindly seek medical assistance!</text>
            </section>
          </section>
        </section>
      </div>
    );
  }
}
export default Record;