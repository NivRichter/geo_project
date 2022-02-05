import React, { useState, useEffect } from "react";
import { Map, TileLayer } from "react-leaflet";
import data from "../assets/data.json";
import Markers from "./VenueMarkers";
import { ToggleButton, ButtonGroup, Button, Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import "../App.css";


import { useLocation, useHistory } from "react-router-dom";

import "leaflet/dist/leaflet.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const MapView = (props) => {
  const [state, setState] = useState({
    currentLocation: { lat: 31.268733, lng: 34.7661248 },
    zoom: 8,
    data: props.db,
    showAllTLV: false,
    showBS: true,
    showJLM: false,
    showStatusBS: {
      museum_bs: false,
      religion_bs: false,
      rest_bs: false,
      school_bs: false,
      tomb_bs: false,
    },

    showStatusHAIFA: {
      garden_haifa: false,
      hotel_haifa: false,
      knesset_haifa: false,
      relig_haifa: false,
      rest_haifa: false,
      school_haifa: false,
      tomb_haifa: false,
    },


    showStatusJLM: {
      bet_kneset_jer: false,
      garden_jer: false,
      hotel_jer: false,
      rest_jer: false,
      school_jer: false,
      tomb_jer: false,
    },


    showStatusTLV: {
      eclectic_tlv: false,
      inter_tlv: false,
      knesset_tlv: false,
      museum_tlv: false,
      people_tlv: false,
      rest_tlv: false,
      school_tlv: false,
      special_tlv: false,
    },

    showStatusRG: {
      garden_rg: false,
      people_rg: false,
      hotel_rg: false,
      school_rg: false,
      bet_knesset_rg: false,
      museum_rg: false,
      rest_rg: false,
    },

    updateDB: props.updateDB
  });

  //const location = useLocation();
  const location = {
    state: {
      latitude: 0,
      longitude: 0
    }
  }
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
          //RAMAT GAN

          garden_rg: state.data.rg_all.garden_rg.concat({
            name: "new",
            geometry: [currentLocation.lat, currentLocation.lng],
          }),
          people_rg: state.data.rg_all.people_rg.concat({
            name: "new",
            geometry: [currentLocation.lat, currentLocation.lng],
          }),
          hotel_rg: state.data.rg_all.hotel_rg.concat({
            name: "new",
            geometry: [currentLocation.lat, currentLocation.lng],
          }),
          school_rg: state.data.rg_all.school_rg.concat({
            name: "new",
            geometry: [currentLocation.lat, currentLocation.lng],
          }),
          bet_knesset_rg: state.data.rg_all.bet_knesset_rg.concat({
            name: "new",
            geometry: [currentLocation.lat, currentLocation.lng],
          }),
          museum_rg: state.data.rg_all.museum_rg.concat({
            name: "new",
            geometry: [currentLocation.lat, currentLocation.lng],
          }),
          rest_rg: state.data.rg_all.rest_rg.concat({
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

  const showAllCity = (city) => {

    let keys = Object.keys(state[city])
    const new_state = {}
    for (let key in keys) {
      new_state[keys[key]] = !state[city][keys[key]]
    }

    let final_state = {
      ...state

    }
    final_state[city] = new_state

    setState(final_state)
  }

  return (
    <Container fluid className="text-light bg-blue py-3">
      <Row >
        <Col style={{ textAlign: "center"}}>
          <h1>       
            <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , textAlign: "center"}}> שומרים על האתרים לשימור</span>
     

          </h1>
          <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: "center" }}>ריכוז מאגרי מידע על אתרים לשימור במדינת ישראל</h2>
        </Col>
      </Row>
        <Accordion >
    <Accordion.Toggle as={Card.Header} eventKey="1" class="accordionButton">
    <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <h4>אודות </h4> </span>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
        <div  
        style={{    
          fontSize: 14,
    color: "white",
    textAlign: "center",
    }}>
                פרויקט זה הוקם במסגרת קורס "מדעי הרוח הדיגיטליים" בהנחיית ד"ר יעל נצר באוניברסיטת בן גוריון בנגב.
                <br/>
        מטרתו היא מיפוי אתרים לשימור בישראל באופן ויזואלי 
        <br/>
        אנו מזמינים את הגולשים להוסיף מידע משלהם ולשוטט בין האתרים השונים.
        <br/>
         אנו מקווים שהפרויקט ממחיש בצורה נגישה ומעניינת את פריסת האתרים לשימור בארץ.
         <br/>
         <div dir="ltr">

         <a href="https://twitter.com/Niv_Ri">@NivRi</a> , 
         <a href="https://twitter.com/AlonaKornblau">@AlonaKornblau</a>

         </div>


        </div>
        

      </Card.Body>
    </Accordion.Collapse>

    <Accordion.Toggle as={Card.Header} eventKey="2" >
    <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <h4>תפריט </h4></span>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="2">
      <Row style ={{height:"100%"}}>
        <Col>
 
        
      <Row  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding:"0px" }}>
        
      <Col xs ={2} md = {2} lg = {2}>
           חיפה:
            </Col>
        <Col  xs={10} md = {4} lg = {4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding:"0px"    }}>
          <ButtonGroup size="sm" className="mb-2">
              <ToggleButton className="Btn-region" checked={state.showStatusHAIFA.garden_haifa} type="checkbox"
                variant="secondary" onClick={() => setState({ ...state, showStatusHAIFA: { ...state.showStatusHAIFA, garden_haifa: !state.showStatusHAIFA.garden_haifa } })}>
                גינות
              </ToggleButton>
              <ToggleButton className="Btn-region" checked={state.showStatusHAIFA.hotel_haifa} type="checkbox"
                    variant="secondary" onClick={() => setState({ ...state, showStatusHAIFA: { ...state.showStatusHAIFA, hotel_haifa: !state.showStatusHAIFA.hotel_haifa } })}>
                    בתי מלון
              </ToggleButton>
              <ToggleButton className="Btn-region" checked={state.showStatusHAIFA.knesset_haifa} type="checkbox"
                    variant="secondary" onClick={() => setState({ ...state, showStatusHAIFA: { ...state.showStatusHAIFA, knesset_haifa: !state.showStatusHAIFA.knesset_haifa } })}>
                    בתי כנסת
                </ToggleButton>
                <ToggleButton className="Btn-region" checked={state.showStatusHAIFA.relig_haifa} type="checkbox"
                    variant="secondary" onClick={() => setState({ ...state, showStatusHAIFA: { ...state.showStatusHAIFA, relig_haifa: !state.showStatusHAIFA.relig_haifa } })}>
                    כנסיות ומסגדים
                  </ToggleButton>
            </ButtonGroup>
        </Col>
        <Col  xs={12} md = {4} lg = {4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding:"0px"  }}>
          <ButtonGroup size="sm" className="mb-2">

                  <ToggleButton className="Btn-region" checked={state.showStatusHAIFA.school_haifa} type="checkbox"
                    variant="secondary" onClick={() => setState({ ...state, showStatusHAIFA: { ...state.showStatusHAIFA, school_haifa: !state.showStatusHAIFA.school_haifa } })}>
                    בתי ספר
                  </ToggleButton>
                  <ToggleButton className="Btn-region" checked={state.showStatusHAIFA.tomb_haifa} type="checkbox"
                    variant="secondary" onClick={() => setState({ ...state, showStatusHAIFA: { ...state.showStatusHAIFA, tomb_haifa: !state.showStatusHAIFA.tomb_haifa } })}>
                    בתי קברות
                  </ToggleButton>
                  <ToggleButton className="Btn-region" checked={state.showStatusHAIFA.rest_haifa} type="checkbox"
                      variant="secondary" onClick={() => setState({ ...state, showStatusHAIFA: { ...state.showStatusHAIFA, rest_haifa: !state.showStatusHAIFA.rest_haifa } })}>
                      שונות
              </ToggleButton>
            </ButtonGroup>
        </Col>

      </Row>
    
    {/* start */}

      <Row  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        
        <Col xs ={2} md = {2} lg = {2}>
             תל אביב:
              </Col>
          <Col  xs={10} md = {4} lg = {4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ButtonGroup size="sm" className="mb-2">
            <ToggleButton value="1" className="Btn-region tog-button" checked={state.showStatusTLV.eclectic_tlv} type="checkbox"
                variant="secondary" onClick={() => setState({ ...state, showStatusTLV: { ...state.showStatusTLV, eclectic_tlv: !state.showStatusTLV.eclectic_tlv } })}>
                סגנון בנייה אקלקטי
                </ToggleButton>
                
                <ToggleButton value="1" className="Btn-region tog-button" checked={state.showStatusTLV.inter_tlv} type="checkbox"
                variant="secondary" onClick={() => setState({ ...state, showStatusTLV: { ...state.showStatusTLV, inter_tlv: !state.showStatusTLV.inter_tlv } })}>
                סגנון בנייה בינלאומי
                </ToggleButton>
                
                <ToggleButton value="1" className="Btn-region tog-button" checked={state.showStatusTLV.knesset_tlv} type="checkbox"
                variant="secondary" onClick={() => setState({ ...state, showStatusTLV: { ...state.showStatusTLV, knesset_tlv: !state.showStatusTLV.knesset_tlv } })}>
                בתי כנסת
                </ToggleButton>
                <ToggleButton value="1" className="Btn-region tog-button" checked={state.showStatusTLV.museum_tlv} type="checkbox"
                variant="secondary" onClick={() => setState({ ...state, showStatusTLV: { ...state.showStatusTLV, museum_tlv: !state.showStatusTLV.museum_tlv } })}>
                מוזיאונים
                </ToggleButton>
              </ButtonGroup>
          </Col>
          <Col  xs={12} md = {4} lg = {4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ButtonGroup size="sm" className="mb-2">

                
                <ToggleButton value="1" className="Btn-region tog-button" checked={state.showStatusTLV.people_tlv} type="checkbox"
                variant="secondary" onClick={() => setState({ ...state, showStatusTLV: { ...state.showStatusTLV, people_tlv: !state.showStatusTLV.people_tlv } })}>
                אישים
                </ToggleButton>

                
                <ToggleButton value="1" className="Btn-region tog-button" checked={state.showStatusTLV.school_tlv} type="checkbox"
                variant="secondary" onClick={() => setState({ ...state, showStatusTLV: { ...state.showStatusTLV, school_tlv: !state.showStatusTLV.school_tlv } })}>
                בתי ספר
                </ToggleButton>
                <ToggleButton value="1" className="Btn-region tog-button" checked={state.showStatusTLV.special_tlv} type="checkbox"
                variant="secondary" onClick={() => setState({ ...state, showStatusTLV: { ...state.showStatusTLV, special_tlv: !state.showStatusTLV.special_tlv } })}>
                סגנון בנייה מיוחד
                </ToggleButton>
                
                <ToggleButton value="1" className="Btn-region tog-button" checked={state.showStatusTLV.rest_tlv} type="checkbox"
                variant="secondary" onClick={() => setState({ ...state, showStatusTLV: { ...state.showStatusTLV, rest_tlv: !state.showStatusTLV.rest_tlv } })}>
                שונות
                </ToggleButton>
              </ButtonGroup>
          </Col>

      </Row>
  {/* end */}

      {/* start */}

      <Row  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        
        <Col xs ={2} md = {2} lg = {2}>
             רמת גן:
              </Col>
          <Col  xs={10} md = {4} lg = {4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ButtonGroup size="sm" className="mb-2">
            <ToggleButton className="Btn-region" checked={state.showStatusRG.museum_rg} type="checkbox"
                variant="secondary" onClick={() => setState({ ...state, showStatusRG: { ...state.showStatusRG, museum_rg: !state.showStatusRG.museum_rg } })}>
                מוזיאונים
              </ToggleButton>  
              <ToggleButton className="Btn-region" checked={state.showStatusRG.garden_rg} type="checkbox"
                variant="secondary" onClick={() => setState({ ...state, showStatusRG: { ...state.showStatusRG, garden_rg: !state.showStatusRG.garden_rg } })}>
                גינות
              </ToggleButton>
              <ToggleButton className="Btn-region" checked={state.showStatusRG.people_rg} type="checkbox"
                variant="secondary" onClick={() => setState({ ...state, showStatusRG: { ...state.showStatusRG, people_rg: !state.showStatusRG.people_rg } })}>
                אישים
              </ToggleButton>
              <ToggleButton className="Btn-region" checked={state.showStatusRG.hotel_rg} type="checkbox"
                variant="secondary" onClick={() => setState({ ...state, showStatusRG: { ...state.showStatusRG, hotel_rg: !state.showStatusRG.hotel_rg } })}>
                בתי מלון
              </ToggleButton>
              </ButtonGroup>
          </Col>
          <Col  xs={12} md = {4} lg = {4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ButtonGroup size="sm" className="mb-2">

              <ToggleButton className="Btn-region" checked={state.showStatusRG.school_rg} type="checkbox"
                variant="secondary" onClick={() => setState({ ...state, showStatusRG: { ...state.showStatusRG, school_rg: !state.showStatusRG.school_rg } })}>
                בתי ספר
              </ToggleButton>
              <ToggleButton className="Btn-region" checked={state.showStatusRG.bet_knesset_rg} type="checkbox"
                variant="secondary" onClick={() => setState({ ...state, showStatusRG: { ...state.showStatusRG, bet_knesset_rg: !state.showStatusRG.bet_knesset_rg } })}>
                בתי כנסת
              </ToggleButton>
              <ToggleButton className="Btn-region" checked={state.showStatusRG.rest_rg} type="checkbox"
                variant="secondary" onClick={() => setState({ ...state, showStatusRG: { ...state.showStatusRG, rest_rg: !state.showStatusRG.rest_rg } })}>
                שונות
              </ToggleButton>
              </ButtonGroup>
          </Col>
          <Col  xs={12} md = {4} lg = {4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ButtonGroup size="sm" className="mb-2">

              </ButtonGroup>
          </Col>
      </Row>
  {/* end */}

      {/* start */}

      <Row  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        
        <Col xs ={2} md = {2} lg = {2}>
             ירושלים:
              </Col>
          <Col  xs={10} md = {4} lg = {4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ButtonGroup size="sm" className="mb-2">
            <ToggleButton className="Btn-region" checked={state.showStatusJLM.bet_kneset_jer} type="checkbox"
            variant="secondary" onClick={() => setState({ ...state, showStatusJLM: { ...state.showStatusJLM, bet_kneset_jer: !state.showStatusJLM.bet_kneset_jer } })}>
            בתי כנסת
              </ToggleButton>

          <ToggleButton className="Btn-region" checked={state.showStatusJLM.garden_jer} type="checkbox"
            variant="secondary" onClick={() => setState({ ...state, showStatusJLM: { ...state.showStatusJLM, garden_jer: !state.showStatusJLM.garden_jer } })}>
            גינות
              </ToggleButton>
          <ToggleButton className="Btn-region" checked={state.showStatusJLM.hotel_jer} type="checkbox"
            variant="secondary" onClick={() => setState({ ...state, showStatusJLM: { ...state.showStatusJLM, hotel_jer: !state.showStatusJLM.hotel_jer } })}>
            בתי מלון
              </ToggleButton>
              <ToggleButton className="Btn-region" checked={state.showStatusJLM.school_jer} type="checkbox"
            variant="secondary" onClick={() => setState({ ...state, showStatusJLM: { ...state.showStatusJLM, school_jer: !state.showStatusJLM.school_jer } })}>
            בתי ספר
              </ToggleButton>
              </ButtonGroup>
          </Col>
          <Col  xs={12} md = {4} lg = {4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ButtonGroup size="sm" className="mb-2">

          <ToggleButton className="Btn-region" checked={state.showStatusJLM.tomb_jer} type="checkbox"
            variant="secondary" onClick={() => setState({ ...state, showStatusJLM: { ...state.showStatusJLM, tomb_jer: !state.showStatusJLM.tomb_jer } })}>
            בתי קברות
              </ToggleButton>
          <ToggleButton className="Btn-region" checked={state.showStatusJLM.rest_jer} type="checkbox"
            variant="secondary" onClick={() => setState({ ...state, showStatusJLM: { ...state.showStatusJLM, rest_jer: !state.showStatusJLM.rest_jer } })}>
            שונות
              </ToggleButton>
              </ButtonGroup>
          </Col>
          <Col  xs={12} md = {4} lg = {4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ButtonGroup size="sm" className="mb-2">

              </ButtonGroup>
          </Col>
      </Row>
  {/* end */}

      {/* start */}

      <Row  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        
        <Col xs ={2} md = {2} lg = {2}>
            באר שבע:
              </Col>
          <Col  xs={10} md = {4} lg = {4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ButtonGroup size="sm" className="mb-2">

            <ToggleButton className="Btn-region" checked={state.showStatusBS.museum_bs} type="checkbox"
            variant="secondary" onClick={() => setState({ ...state, showStatusBS: { ...state.showStatusBS, museum_bs: !state.showStatusBS.museum_bs } })}>
            מוזיאונים
          </ToggleButton>  
          <ToggleButton className="Btn-region" checked={state.showStatusBS.religion_bs} type="checkbox"
            variant="secondary" onClick={() => setState({ ...state, showStatusBS: { ...state.showStatusBS, religion_bs: !state.showStatusBS.religion_bs } })}>
            כנסיות ומסגדים
          </ToggleButton>
          <ToggleButton className="Btn-region" checked={state.showStatusBS.school_bs} type="checkbox"
            variant="secondary" onClick={() => setState({ ...state, showStatusBS: { ...state.showStatusBS, school_bs: !state.showStatusBS.school_bs } })}>
            בתי ספר
          </ToggleButton>

              </ButtonGroup>
          </Col>
          <Col  xs={12} md = {4} lg = {4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ButtonGroup size="sm" className="mb-2">
            <ToggleButton className="Btn-region" checked={state.showStatusBS.tomb_bs} type="checkbox"
            variant="secondary" onClick={() => setState({ ...state, showStatusBS: { ...state.showStatusBS, tomb_bs: !state.showStatusBS.tomb_bs } })}>
            בתי קברות
          </ToggleButton>
          <ToggleButton className="Btn-region" checked={state.showStatusBS.rest_bs} type="checkbox"
            variant="secondary" onClick={() => setState({ ...state, showStatusBS: { ...state.showStatusBS, rest_bs: !state.showStatusBS.rest_bs } })}>
            שונות
          </ToggleButton>
              </ButtonGroup>
          </Col>
          <Col  xs={12} md = {4} lg = {4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ButtonGroup size="sm" className="mb-2">

              </ButtonGroup>
          </Col>
      </Row>
  {/* end */}

      </Col>
    </Row>

    </Accordion.Collapse>
  </Accordion>


      <Row>
        <Col style ={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

          <Map center={state.currentLocation} zoom={state.zoom} style ={{display: 'flex', justifyContent: 'center', alignItems: 'center' , width:"100%"}}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Markers updateDB={state.updateDB} db={props.db} marks={state.data.tlv_all} showGroupStatus={state.showStatusTLV} />
            <Markers updateDB={state.updateDB} db={props.db} marks={state.data.jer_all} showGroupStatus={state.showStatusJLM} />
            <Markers updateDB={state.updateDB} db={props.db} marks={state.data.haifa_all} showGroupStatus={state.showStatusHAIFA} />
            <Markers updateDB={state.updateDB} db={props.db} marks={state.data.bs_all} showGroupStatus={state.showStatusBS} />
            <Markers updateDB={state.updateDB} db={props.db} marks={state.data.rg_all} showGroupStatus={state.showStatusRG} />



          </Map>
        </Col>
      </Row>

      <Row>
        <Col>
        <h9 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>כל הזכויות שמורות לניב ריכטר ואלונה קורנבלאו ©</h9>

        </Col>
      </Row>

      
</Container>
    

  );
};

export default MapView;
