import React, { Component } from "react";

import {
  Container,
  Row,
  Col,
  ToggleButton,
  ButtonGroup,
} from "react-bootstrap";
import Fuse from "fuse.js";

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


  componentDidMount() {
    this.initData();
    this.getAllSitesName();
  }

  initData() {
    // console.log("init data");
    let url = `https://checkfrontcom.checkfront.com/api/3.0/item`;
    fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
    })
      .then((res) => res.json())
      .then((data) =>
        this.setState({ picturesDB: data.items }, function () {
          this.getAllSitesName();
        })
      );
  }

  getAllSitesName() {
    const sitesData = this.state.picturesDB;
    let names = [];
    for (let item_id in sitesData) {
      names = names.concat([sitesData[item_id]["name"]]);
    }
    this.setState({ suggestions: names });
  }



  async getData() {
    //await this.getPicturesData()
    const selectedDay = this.state.formatDate; //let url = "https://checkfrontcom.checkfront.com/api/3.0/item/cal?item_id=40,14,77&start_date=20201024&end_date=20201025"
    let url = `https://checkfrontcom.checkfront.com/api/3.0/item/cal?start_date%20=${selectedDay}&end_date=${selectedDay}`;
    fetch(url, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ jsonData: data }, () =>
          this.setState(
            { avilableSites: this.getAvailabeSites(), view: true },
            this.showAvailableSites
          )
        );
      });
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
    let avilableSites = this.state.avilableSites;
    let sitesTable = { north: [], center: [], Jerusalem: [], south: [] };
    let checkedN = this.state.tlv;
    let checkedJ = this.state.Jerusalem;
    let checkedC = this.state.center;
    let checkedS = this.state.south;
    let parks_names = [];
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
                : <h2> מה נשמע אלונה?</h2>}
              </Col>
          </Row>
        </Container>
    );
  }
}

export default Buildings;