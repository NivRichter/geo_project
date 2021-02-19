import React, { useState, useEffect } from "react";
import { Map, TileLayer } from "react-leaflet";
import data from "../assets/data.json";
import Markers from "./VenueMarkers";
import { Button, Container,Row,Col } from 'react-bootstrap';


import { useLocation, useHistory } from "react-router-dom";

import "leaflet/dist/leaflet.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const MapView = (props) => {
  const [state, setState] = useState({
    currentLocation: { lat: 31.268733, lng: 34.7661248  },
    zoom: 8,
    data,
    showTLV:false,
    showBS:true,
    showJLM:false,
    updateDB:props.updateDB
  });

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (location.state.latitude && location.state.longitude) {
      const currentLocation = {
        lat: location.state.latitude,
        lng: location.state.longitude,
      };
      console.log(state);
      setState({
        ...state,
        data: {
          tlv: state.data.tlv.concat({
            name: "new",
            geometry: [currentLocation.lat, currentLocation.lng],
          }),
          bs: state.data.bs.concat({
            name: "new",
            geometry: [currentLocation.lat, currentLocation.lng],
          }),
        
        jlm: state.data.jlm.concat({
          name: "new",
          geometry: [currentLocation.lat, currentLocation.lng],
        })
      }
      ,
        currentLocation,
      });
      history.replace({
        pathname: "/map",
        state: {},
      });
    }
  }, [location]);

  return (
      <Container fluid  className="text-light bg-blue py-3">
          <Row>
            <Col>
              <h1>
                <span> שומרים על הבניינים לשימור</span>
                <span role="img" aria-label="אוהל" className="mx-1">
                  
                </span>

              </h1>
              <h2>ריכוז מאגרי מידע על מבנים לשימור במדינת ישראל</h2>
            </Col>
          </Row>
        <Row>
          <Col>
          <h2>
              תלחצי עלינו

              </h2>
            <Button onClick = {()=>setState({...state, showTLV: !state.showTLV})}>
              תל אביב
              </Button>
              <Button onClick =  {()=>setState({...state, showBS: !state.showBS})}>
              לוס-אנג'ס
              </Button>
              <Button onClick = {()=>setState({...state, showJLM: !state.showJLM})}>
              ירושלים
              </Button>
     
          </Col>
        </Row>
        <Row>
          <Col>
          
            <Map center={state.currentLocation} zoom={state.zoom}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Markers updateDB={state.updateDB} db={props.db} tlv={state.data.tlv} bs = {state.data.bs} jlm={state.data.jlm} showTLV = {state.showTLV} showBS={state.showBS} showJLM={state.showJLM}/>
            </Map>
          </Col>
        </Row>
      </Container>


  );
};

export default MapView;
