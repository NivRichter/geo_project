import React, { Component,Fragment } from "react";
// import logo from './logo.svg';

// import ClipLoader from "react-spinners/ClipLoader";
import "bootstrap/dist/css/bootstrap.css";
// import 'react-day-picker/lib/style.css';
import "./App.css";
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



import {
  Container,
  Row,
  Col,
  Nav,
  Navbar,
} from "react-bootstrap";
import Buildings from "./buildings/Buildings";
import Home from "./components/Home";
import MapView from "./components/MapView";


class App extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      activeTab: "Buildings",
    };
    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(tab) {
    this.setState({ activeTab: tab });
   
  }

  render() {
    return (
      <Router>
        <Switch>
        <Route path="/map">
          <MapView/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
 /*   
{ 
        <div className="App">

        <Container fluid className="text-light bg-blue py-3">
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
        </Container>

        <Navbar className="bg-light-blue ">
          <Nav className="mx-auto justify-content-center">
            <Nav.Link
              href=""
              className="px-4"
              onClick={() => this.changeTab("Buildings")}
              active={this.state.activeTab === "Buildings"}
            >
              Buildings
            </Nav.Link>
            <Nav.Link
              href=""
              className="px-4"
              onClick={() => this.changeTab("Others")}
              active={this.state.activeTab === "Others"}
            >
              <span>Others</span>

            </Nav.Link>
          </Nav>
        </Navbar>

        {this.state.activeTab === "Others" ? 
         <h2>עדיין לא ענית מה נשמע</h2>
         : <Buildings/>
        }

        <footer className="mt-auto py-4 bg-light container-fluid text-info">
          <Container>
            <Row>
              <Col>
                <div className="my-2">
                  מגיע לנו 100 
                </div>

              </Col>
            </Row>
          </Container>
        </footer>
              </div>

     } */

    );
  }
}

export default App;