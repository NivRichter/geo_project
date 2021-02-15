import React, { useState, useEffect } from "react";
import { Map, TileLayer,MapContainer as LeafletMap } from "react-leaflet";
import data from "../assets/data.json";
import Markers from "./VenueMarkers";
import { Button, Container,Row,Col } from 'react-bootstrap';


import { useLocation, useHistory } from "react-router-dom";


import "leaflet/dist/leaflet.css";

import 'bootstrap/dist/css/bootstrap.min.css';


const MapView = (props) => {
  const [state, setState] = useState({
    currentLocation: { lat: 32.0429994 , lng: 34.7661248  },
    zoom: 8,
    data,
    showTLV:true,
    showBS:true,
  });

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    console.log(location);
    if (true) {
      const currentLocation = {
        lat:32.0429994,
        lng: 34.7661248,
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
        },
        currentLocation,
      });
 
    }
  }, []);

  return (
      <Container fluid>
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
     
          </Col>
        </Row>
        <Row>
          <Col>
          
    <LeafletMap center={state.currentLocation} zoom={state.zoom}
  >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Markers tlv={state.data.tlv} bs = {state.data.bs}  showTLV = {state.showTLV} showBS={state.showBS}/>
    </LeafletMap>
          </Col>
        </Row>
      </Container>


  );
};

export default MapView;
