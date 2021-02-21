import React, { useState, useEffect } from "react";
import { Map, TileLayer } from "react-leaflet";
import data from "../assets/data.json";
import Markers from "./VenueMarkers";
import {ToggleButton, ButtonGroup,Button, Container,Row,Col} from 'react-bootstrap';
import "../App.css";


import { useLocation, useHistory } from "react-router-dom";

import "leaflet/dist/leaflet.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const MapView = (props) => {
  const [state, setState] = useState({
    currentLocation: { lat: 31.268733, lng: 34.7661248  },
    zoom: 8,
    data:props.db,
    showAllTLV:false,
    showBS:true,
    showJLM:false,
    museum_bs:false,
    religion_bs:false,
    rest_bs:false,
    school_bs:false,
    tomb_bs:false,

    garden_haifa:false,
    hotel_haifa:false,
    knesset_haifa: false,
    relig_haifa:false,
    rest_haifa:false,
    school_haifa:false,
    tomb_haifa:false,

    bet_kneset_jer:false,
    garden_jer:false,
    hotel_jer:false,
    rest_jer:false,
    school_jer:false,
    tomb_jer:false,

    showStatusTLV: {
      eclectic_tlv:false,
      inter_tlv:false,
      knesset_tlv:false,
      museum_tlv:false,
      people_tlv:false,
      rest_tlv:false,
      school_tlv:false,
      special_tlv:false,
    },


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
          eclectic_tlv: state.data.tlv_all.eclectic_tlv.concat({
            name: "new",
            geometry: [currentLocation.lat, currentLocation.lng],
          }),
          inter_tlv: state.data.tlv_all.inter_tlv.concat({
            name: "new",
            geometry: [currentLocation.lat, currentLocation.lng],
          }),
          knesset_tlv: state.data.tlv_all.knesset_tlv.concat({
            name: "new",
            geometry: [currentLocation.lat, currentLocation.lng],
          }),
          museum_tlv: state.data.tlv_all.museum_tlv.concat({
            name: "new",
            geometry: [currentLocation.lat, currentLocation.lng],
          }),
          rest_tlv: state.data.tlv_all.rest_tlv.concat({
            name: "new",
            geometry: [currentLocation.lat, currentLocation.lng],
          }),
          school_tlv: state.data.tlv_all.school_tlv.concat({
            name: "new",
            geometry: [currentLocation.lat, currentLocation.lng],
          }),
          special_tlv: state.data.tlv_all.special_tlv.concat({
            name: "new",
            geometry: [currentLocation.lat, currentLocation.lng],
          }),
          
          bs: state.data.tlv_all.concat({
            name: "new",
            geometry: [currentLocation.lat, currentLocation.lng],
          }),
        
        jlm: state.data.tlv_all.concat({
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

  const showAllCity = (city) =>{

    let keys = Object.keys(state[city])
    console.log('KEys ' + keys )
    const new_state = {}
    for (let key in keys){
      new_state[keys[key]] = !state[city][keys[key]]
    }
    console.log('output ' + new_state )
    console.log(new_state)
    let final_state = {
      ...state

    }
    final_state[city] = new_state

    setState(final_state)
  }

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
            <Row>
              <Col>
                <Button 
                                  variant="secondary"onClick = {()=>showAllCity('showStatusTLV')}>
                הכל - תל אביב
                </Button> 
                | 
                <ToggleButton value="1" className="Btn-region" checked ={state.showStatusTLV.eclectic_tlv}  type="checkbox"
                                  variant="secondary" onClick = {()=>setState({...state, showStatusTLV: {...state.showStatusTLV , eclectic_tlv: !state.showStatusTLV.eclectic_tlv}})}>
                אקלקטי
                </ToggleButton> 
                | 
                <ToggleButton value="1" className="Btn-region" checked ={state.showStatusTLV.inter_tlv}  type="checkbox"
                                  variant="secondary"onClick = {()=>setState({...state, showStatusTLV: {...state.showStatusTLV ,inter_tlv: !state.showStatusTLV.inter_tlv }})}>
                inter_tlv
                </ToggleButton> 
                | 
                <ToggleButton value="1" className="Btn-region" checked ={state.showStatusTLV.knesset_tlv}  type="checkbox"
                                  variant="secondary"onClick = {()=>setState({...state, showStatusTLV: { ...state.showStatusTLV ,knesset_tlv: !state.showStatusTLV.knesset_tlv}})}>
                knesset_tlv
                </ToggleButton> 
                | 
                <ToggleButton value="1" className="Btn-region" checked ={state.showStatusTLV.museum_tlv}  type="checkbox"
                                  variant="secondary"onClick = {()=>setState({...state, showStatusTLV: {...state.showStatusTLV ,museum_tlv:!state.showStatusTLV.museum_tlv}})}>
                museum_tlv
                </ToggleButton> 
                | 
                <ToggleButton value="1" className="Btn-region" checked ={state.showStatusTLV.people_tlv}  type="checkbox"
                                  variant="secondary"onClick = {()=>setState({...state, showStatusTLV: {...state.showStatusTLV ,people_tlv: !state.showStatusTLV.people_tlv}})}>
                people_tlv
                </ToggleButton> 
                | 
                <ToggleButton value="1" className="Btn-region" checked ={state.showStatusTLV.rest_tlv}  type="checkbox"
                                  variant="secondary"onClick = {()=>setState({...state, showStatusTLV:{...state.showStatusTLV ,rest_tlv: !state.showStatusTLV.rest_tlv}})}>
                rest_tlv
                </ToggleButton> 
                | 
                <ToggleButton value="1" className="Btn-region" checked ={state.showStatusTLV.school_tlv}  type="checkbox"
                                  variant="secondary"onClick = {()=>setState({...state, showStatusTLV: {...state.showStatusTLV ,school_tlv: !state.showStatusTLV.school_tlv}})}>
                school_tlv
                </ToggleButton> 
                | 
                <ToggleButton value="1" className="Btn-region" checked ={state.showStatusTLV.special_tlv}  type="checkbox"
                                  variant="secondary"onClick = {()=>setState({...state, showStatusTLV: {...state.showStatusTLV ,special_tlv:!state.showStatusTLV.special_tlv}})}>
                special_tlv
                </ToggleButton> 
                | 
              </Col>
            </Row>

              <ToggleButton value="1" className="Btn-region" checked ={state.showStatusTLV.eclectic_tlv}  type="checkbox"
                                  variant="secondary"onClick =  {()=>setState({...state, showBS: !state.showBS})}>
              לוס-אנג'ס
              </ToggleButton>
              <ToggleButton value="1" className="Btn-region" checked ={state.showStatusTLV.eclectic_tlv}  type="checkbox"
                                  variant="secondary"onClick = {()=>setState({...state, showJLM: !state.showJLM})}>
              ירושלים
              </ToggleButton>
     
          </Col>
        </Row>
        <Row>
          <Col>
          
            <Map center={state.currentLocation} zoom={state.zoom}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              {console.log('in mapview: ' + JSON.stringify(state.showStatusTLV))}
              <Markers updateDB={state.updateDB} db={props.db} marks={state.data.tlv_all}  showGroupStatus = {state.showStatusTLV} />
            
            </Map>
          </Col>
        </Row>
      </Container>


  );
};

export default MapView;
