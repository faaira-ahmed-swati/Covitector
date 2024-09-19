import React from 'react';
import {Circle, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './Map';
import Navbar from "./Navbar";
import {db} from '../base';
import {ref, get,child} from "firebase/database";

export class MapContainer extends React.Component{ 
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    val:[],
  };
  componentDidMount(){
    get(child(ref(db),"data/")).then((snapshot) => {
          console.log("here");
          snapshot.forEach(ele =>{
            this.setState({ 
              val : [...this.state.val, ele.val()]
            })
          })
        })
      }     
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  render(){
    const places=[];
    for(var i=0; i < this.state.val.length; i++){
      console.log(this.state.val[i].status);
      if(this.state.val[i].status == "positive"){
        places.push({id: i+1, position: {lat: this.state.val[i].lat, lng:this.state.val[i].lng}})
      }
    }
    console.log(places);
    return (
      <>
        <Navbar/>
        {/* <section style={{"width":"70%","height":"500px"}}> */}
          <section className='mapcontainer'>
            <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
              {places.map((element) => (
                <Circle
                key={element.id}
                // name = {marker.name}
                radius={50}
                center={element.position}
                onMouseover={() => console.log('mouseover')}
                onClick={() => console.log('click')}
                onMouseout={() => console.log('mouseout')}
                strokeOpacity={0}
                fillColor= "red"
                fillOpacity={0.8}
                />    
              ))}
              <Marker onClick={this.onMarkerClick} name={'Current Location'} />
              <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onClose}>
                <div>
                  <h4>{this.state.selectedPlace.name}</h4>
                </div>
              </InfoWindow>
            </CurrentLocation>
          </section>
        {/* </section> */}
      
      </>
    );
        } 
}

export default GoogleApiWrapper({
  apiKey: ''
})(MapContainer);