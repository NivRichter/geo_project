import React, { Component } from "react";

import {
  Container,
  Row,
  Col,
  ToggleButton,
  ButtonGroup,
} from "react-bootstrap";
import Fuse from "fuse.js";
import MapView from "../components/MapView";

class Buildings extends Component {
  constructor(props) {
    super();

    this.state = {
    tlv:true,
    Jerusalem:false,
      value: "",
      view: true,
      jsonData: {},
      picturesDB: {},
      avilableSites: {},
      selectedDay: undefined,
      formatDate: "",
      locale: "he",

      suggestions: [],
      chosen_park: "",
      input: "",
    };
  }





  showAvailableSites() {
    const sites = this.state.avilableSites;
  }

  convertRegionID2Name(id) {
    switch (id) {
      case 56:
        return "north";
      case 57:
        return "center";
      case 58:
        return "Jerusalem";
      case 59:
        return "south";
      default:
        return "center";
    }
  }



  formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [year, month, day].join("");
  }

  formatIsraeliDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [day, month, year].join("/");
  }

  handleChange = (event) => {
    this.setState({ input: event.target.value });
  };

  render() {
    let sitesTable = { north: [], center: [], Jerusalem: [], south: [] };
    let checkedN = this.state.tlv;
    let checkedJ = this.state.Jerusalem;
    let checkedC = this.state.center;
    let checkedS = this.state.south;
    const today = new Date();
    const fortnightAway = new Date(Date.now() + 12096e5);
    let input = this.state.input;



    const fuseNorth = new Fuse(sitesTable["north"], {
      keys: ["name"],
      threshold: 0.5,
    });
    const fuseCenter = new Fuse(sitesTable["center"], {
      keys: ["name"],
      threshold: 0.5,
    });
    const fuseJerusalem = new Fuse(sitesTable["Jerusalem"], {
      keys: ["name"],
      threshold: 0.5,
    });
    const fuseSouth = new Fuse(sitesTable["south"], {
      keys: ["name"],
      threshold: 0.5,
    });

    return (

        <Container fluid className="bg-teva-sand">
          <Row>
            <Col>

                              <div>
                                <h4 className="d-block">סינון לפי איזור:</h4>
                              </div>
                              <ButtonGroup toggle className="my-2 d-flex">
                                <ToggleButton
                                  className="Btn-region"
                                  type="checkbox"
                                  variant="secondary"
                                  checked={checkedN}
                                  value="1"
                                  onChange={(e) => this.setState({
                                        first: false,
                                        tlv: true,
                                        Jerusalem: false,
                                        center: false,
                                        south: false,
                                        })
                                  }
                                >
                                  <a className="region">תל אביב</a>
                                </ToggleButton>

                                <ToggleButton
                                  className="Btn-region"
                                  type="checkbox"
                                  variant="secondary"
                                  checked={checkedJ}
                                  value="2"
                                  onChange={(e) =>
                                    this.setState({
                                        first: false,
                                        tlv: false,
                                        Jerusalem: true,
                                        center: false,
                                        south: false,
                                        })
                                  }
                                >
                                  <a className="region"> ירושלים</a>
                                  </ToggleButton>

  
                              </ButtonGroup>

            </Col>
          </Row>

          <Row>
              <Col>
              {this.state.tlv ? 
              <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1fpJk0jT_swhxwqLNMy9DkY6Bc0zzXGWJ" width="640" height="480"></iframe>
                : 
               this.state.Jerusalem?
                <MapView />
               :
              
               
                <h2> מה נשמע אלונה?</h2>}
              </Col>
          </Row>
        </Container>
    );
  }
}

export default Buildings;