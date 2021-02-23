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
    showStatusBS:{
      museum_bs:false,
      religion_bs:false,
      rest_bs:false,
      school_bs:false,
      tomb_bs:false,
    },
  
    showStatusHAIFA:{
      garden_haifa:false,
      hotel_haifa:false,
      knesset_haifa: false,
      relig_haifa:false,
      rest_haifa:false,
      school_haifa:false,
      tomb_haifa:false,
    },


    showStatusJLM: {
      bet_kneset_jer:false,
      garden_jer:false,
      hotel_jer:false,
      rest_jer:false,
      school_jer:false,
      tomb_jer:false,
    },


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

          // JERUSALEM

          bet_kneset_jer: state.data.jer_all.bet_kneset_jer.concat({
            name: "new",
            geometry: [currentLocation.lat, currentLocation.lng],
          }),
          garden_jer: state.data.jer_all.garden_jer.concat({
            name: "new",
            geometry: [currentLocation.lat, currentLocation.lng],
          }),

          hotel_jer: state.data.jer_all.hotel_jer.concat({
            name: "new",
            geometry: [currentLocation.lat, currentLocation.lng],
          }),

          rest_jer: state.data.jer_all.rest_jer.concat({
            name: "new",
            geometry: [currentLocation.lat, currentLocation.lng],
          }),

          school_jer: state.data.jer_all.school_jer.concat({
            name: "new",
            geometry: [currentLocation.lat, currentLocation.lng],
          }),
          tomb_jer: state.data.jer_all.tomb_jer.concat({
            name: "new",
            geometry: [currentLocation.lat, currentLocation.lng],
          }),

          //HAIFA
          garden_haifa: state.data.haifa_all.garden_haifa.concat({
            name: "new",
            geometry: [currentLocation.lat, currentLocation.lng],
          }),
          hotel_haifa: state.data.haifa_all.hotel_haifa.concat({
            name: "new",
            geometry: [currentLocation.lat, currentLocation.lng],
          }),
          knesset_haifa: state.data.haifa_all.knesset_haifa.concat({
            name: "new",
            geometry: [currentLocation.lat, currentLocation.lng],
          }),
          relig_haifa: state.data.haifa_all.relig_haifa.concat({
            name: "new",
            geometry: [currentLocation.lat, currentLocation.lng],
          }),
          rest_haifa: state.data.haifa_all.rest_haifa.concat({
            name: "new",
            geometry: [currentLocation.lat, currentLocation.lng],
          }),
          school_haifa: state.data.haifa_all.school_haifa.concat({
            name: "new",
            geometry: [currentLocation.lat, currentLocation.lng],
          }),
          tomb_haifa: state.data.haifa_all.tomb_haifa.concat({
            name: "new",
            geometry: [currentLocation.lat, currentLocation.lng],
          }),

          //BEER SHEVA
          museum_bs: state.data.bs_all.museum_bs.concat({
            name: "new",
            geometry: [currentLocation.lat, currentLocation.lng],
          }),
          religion_bs: state.data.bs_all.religion_bs.concat({
            name: "new",
            geometry: [currentLocation.lat, currentLocation.lng],
          }),
          rest_bs: state.data.bs_all.rest_bs.concat({
            name: "new",
            geometry: [currentLocation.lat, currentLocation.lng],
          }),
          school_bs: state.data.bs_all.school_bs.concat({
            name: "new",
            geometry: [currentLocation.lat, currentLocation.lng],
          }),
          tomb_bs: state.data.bs_all.tomb_bs.concat({
            name: "new",
            geometry: [currentLocation.lat, currentLocation.lng],
          }),
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
    const new_state = {}
    for (let key in keys){
      new_state[keys[key]] = !state[city][keys[key]]
    }

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
              TLV: 
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

              {/* <ToggleButton value="1" className="Btn-region" checked ={state.showStatusTLV.eclectic_tlv}  type="checkbox"
                                  variant="secondary"onClick =  {()=>setState({...state, showBS: !state.showBS})}>
              לוס-אנג'ס
              </ToggleButton>
              <ToggleButton value="1" className="Btn-region" checked ={state.showStatusTLV.eclectic_tlv}  type="checkbox"
                                  variant="secondary"onClick = {()=>setState({...state, showJLM: !state.showJLM})}>
              ירושלים
              </ToggleButton>
      */}
          </Col>
        </Row>
       {/* JERUSALEM*/ }
        <Row>
          <Col>
          JLM :
          <Button 
                                  variant="secondary"onClick = {()=>showAllCity('showStatusJLM')}>
                הכל -ירושלים
                </Button> 
                | 
          <ToggleButton className="Btn-region" checked ={state.showStatusJLM.bet_kneset_jer}  type="checkbox"
                                  variant="secondary" onClick = {()=>setState({...state, showStatusJLM: {...state.showStatusJLM, bet_kneset_jer: !state.showStatusJLM.bet_kneset_jer}})}>
              bet_kneset_jer
              </ToggleButton>

              <ToggleButton className="Btn-region" checked ={state.showStatusJLM.garden_jer}  type="checkbox"
                                  variant="secondary" onClick = {()=>setState({...state, showStatusJLM: {...state.showStatusJLM, garden_jer: !state.showStatusJLM.garden_jer}})}>
              bet_kneset_jer
              </ToggleButton>
              <ToggleButton className="Btn-region" checked ={state.showStatusJLM.hotel_jer}  type="checkbox"
                                  variant="secondary" onClick = {()=>setState({...state, showStatusJLM: {...state.showStatusJLM, hotel_jer: !state.showStatusJLM.hotel_jer}})}>
              bet_kneset_jer
              </ToggleButton>
              <ToggleButton className="Btn-region" checked ={state.showStatusJLM.rest_jer}  type="checkbox"
                                  variant="secondary" onClick = {()=>setState({...state, showStatusJLM: {...state.showStatusJLM, rest_jer: !state.showStatusJLM.rest_jer}})}>
              bet_kneset_jer
              </ToggleButton>
              <ToggleButton className="Btn-region" checked ={state.showStatusJLM.school_jer}  type="checkbox"
                                  variant="secondary" onClick = {()=>setState({...state, showStatusJLM: {...state.showStatusJLM, school_jer: !state.showStatusJLM.school_jer}})}>
              bet_kneset_jer
              </ToggleButton>
              <ToggleButton className="Btn-region" checked ={state.showStatusJLM.tomb_jer}  type="checkbox"
                                  variant="secondary" onClick = {()=>setState({...state, showStatusJLM: {...state.showStatusJLM, tomb_jer: !state.showStatusJLM.tomb_jer}})}>
              bet_kneset_jer
              </ToggleButton>
          </Col>
        </Row>

        {/**HAIFA */}
        <Row>
          <Col>
          HAIFA : 
          <Button 
                                  variant="secondary"onClick = {()=>showAllCity('showStatusHAIFA')}>
                הכל -חיפה
                </Button> 
                | 
          <ToggleButton className="Btn-region" checked ={state.showStatusHAIFA.garden_haifa}  type="checkbox"
                                  variant="secondary" onClick = {()=>setState({...state, showStatusHAIFA: {...state.showStatusHAIFA, garden_haifa: !state.showStatusHAIFA.garden_haifa}})}>
              garden_haifa
          </ToggleButton>
          <ToggleButton className="Btn-region" checked ={state.showStatusHAIFA.hotel_haifa}  type="checkbox"
                                  variant="secondary" onClick = {()=>setState({...state, showStatusHAIFA: {...state.showStatusHAIFA, hotel_haifa: !state.showStatusHAIFA.hotel_haifa}})}>
              hotel_haifa
          </ToggleButton>
          <ToggleButton className="Btn-region" checked ={state.showStatusHAIFA.knesset_haifa}  type="checkbox"
                                  variant="secondary" onClick = {()=>setState({...state, showStatusHAIFA: {...state.showStatusHAIFA, knesset_haifa: !state.showStatusHAIFA.knesset_haifa}})}>
              knesset_haifa
          </ToggleButton>
          <ToggleButton className="Btn-region" checked ={state.showStatusHAIFA.relig_haifa}  type="checkbox"
                                  variant="secondary" onClick = {()=>setState({...state, showStatusHAIFA: {...state.showStatusHAIFA, relig_haifa: !state.showStatusHAIFA.relig_haifa}})}>
              relig_haifa
          </ToggleButton>
          <ToggleButton className="Btn-region" checked ={state.showStatusHAIFA.rest_haifa}  type="checkbox"
                                  variant="secondary" onClick = {()=>setState({...state, showStatusHAIFA: {...state.showStatusHAIFA, rest_haifa: !state.showStatusHAIFA.rest_haifa}})}>
              rest_haifa
          </ToggleButton>
          <ToggleButton className="Btn-region" checked ={state.showStatusHAIFA.school_haifa}  type="checkbox"
                                  variant="secondary" onClick = {()=>setState({...state, showStatusHAIFA: {...state.showStatusHAIFA, garden_haifa: !state.showStatusHAIFA.school_haifa}})}>
              school_haifa
          </ToggleButton>
          <ToggleButton className="Btn-region" checked ={state.showStatusHAIFA.tomb_haifa}  type="checkbox"
                                  variant="secondary" onClick = {()=>setState({...state, showStatusHAIFA: {...state.showStatusHAIFA, garden_haifa: !state.showStatusHAIFA.tomb_haifa}})}>
              tomb_haifa
          </ToggleButton>
          
          </Col>
        </Row>

        <Row>
          <Col>
          BEER SHEVA :
          <Button 
                                  variant="secondary"onClick = {()=>showAllCity('showStatusBS')}>
                הכל - ב"ש
            </Button> 

            <ToggleButton className="Btn-region" checked ={state.showStatusBS.museum_bs}  type="checkbox"
                                  variant="secondary" onClick = {()=>setState({...state, showStatusBS: {...state.showStatusBS, museum_bs: !state.showStatusBS.museum_bs}})}>
              museum_bs
          </ToggleButton>    | 
          <ToggleButton className="Btn-region" checked ={state.showStatusBS.religion_bs}  type="checkbox"
                                  variant="secondary" onClick = {()=>setState({...state, showStatusBS: {...state.showStatusBS, religion_bs: !state.showStatusBS.religion_bs}})}>
              religion_bs
          </ToggleButton>    
          <ToggleButton className="Btn-region" checked ={state.showStatusBS.rest_bs}  type="checkbox"
                                  variant="secondary" onClick = {()=>setState({...state, showStatusBS: {...state.showStatusBS, rest_bs: !state.showStatusBS.rest_bs}})}>
              rest_bs
          </ToggleButton>    
          <ToggleButton className="Btn-region" checked ={state.showStatusBS.school_bs}  type="checkbox"
                                  variant="secondary" onClick = {()=>setState({...state, showStatusBS: {...state.showStatusBS, school_bs: !state.showStatusBS.school_bs}})}>
              school_bs
          </ToggleButton>    
          <ToggleButton className="Btn-region" checked ={state.showStatusBS.tomb_bs}  type="checkbox"
                                  variant="secondary" onClick = {()=>setState({...state, showStatusBS: {...state.showStatusBS, tomb_bs: !state.showStatusBS.tomb_bs}})}>
              tomb_bs
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
              <Markers updateDB={state.updateDB} db={props.db} marks={state.data.tlv_all}  showGroupStatus = {state.showStatusTLV} />
              <Markers updateDB={state.updateDB} db={props.db} marks={state.data.jer_all}  showGroupStatus = {state.showStatusJLM} />
              <Markers updateDB={state.updateDB} db={props.db} marks={state.data.haifa_all}  showGroupStatus = {state.showStatusHAIFA} />
              <Markers updateDB={state.updateDB} db={props.db} marks={state.data.bs_all}  showGroupStatus = {state.showStatusBS} />

            
            
            </Map>
          </Col>
        </Row>
      </Container>


  );
};

export default MapView;
