import React, { Component,useState, useEffect } from "react";
import "./App.css";
import firebase from "./firestore/firebase";
import dataDB from "./assets/data.json";
import {db} from './firestore/firebase';


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MapView from "./components/MapView";
import Home from "./components/Home";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      loading:true,
      activeDocRef: undefined,
      activeTab:"welcome",
      jsonURL:"https://api.jsonbin.io/b/602fced5bd6b755d0199c538",
      jsonKey:"$2b$10$2/NjcZqLfdoBPkpWyT71BuJeCNvU8FXl8QLhGcnAJUdAdbLdsjYK."

    };
    // const db = firebase.settings({
    //   timestampsInSnapshots: true
    // });
  }
  
  componentDidMount() {
    db.ref('/').on('value', querySnapShot => {
      let data = querySnapShot.val() ? querySnapShot.val() : {};
      this.setState({jsonDB:data, loading:false})
    });

}


  


  handleDBUpdate = (id,text) => {
    const data = this.state.jsonDB
    for (var city in data) {
      if (data.hasOwnProperty(city)) {
        for (var place in city){
          if (data[city][place]){
            if (data[city][place]['id'] === id){
              var comments = data[city][place]['comments'] 
              var comments2 = (comments === undefined) ? text : comments + '\n ' + text
  
              data[city][place]['comments']  = comments2
              this.putRequesteInDB(data)

              return
            }

          }

        }


      }
    }
  }


  putRequesteInDB = (data) => {
    db.ref('/').set(data);
    this.setState({jsonData:data})
  }



  handleClick = (e) =>{
    
      const db = this.state.db
      
       db.doc("LA").set({
         name: "Los Angeles",
         state: "CA",
         country: "USA"
     })
     .then(() => {
         console.log("Document successfully written!");
     })
     .catch((error) => {
         console.error("Error writing document: ", error);
     });
  }





  render() {
     return (
      <div>
      <button onClick={this.handleClick}>מניש</button>
      <Router>
        <Switch>
          <Route path="/map">
            {
              this.state.loading? 'loading' :            
              <MapView updateDB = {this.handleDBUpdate} db ={this.state.jsonDB}/>

            }
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      </div>

    );
  }
}

export default App;
