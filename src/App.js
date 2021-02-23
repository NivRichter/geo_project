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

    for (var city in Object.keys(data)) {
      const city1 =  Object.keys(data)[city]

        for (var cat in Object.keys(data[city1])) {
          const cat1 = Object.keys(data[city1])[cat]

          for (var place in Object.keys(data[city1][cat1])){
            const place1 = Object.keys(data[city1][cat1])[place]


            if(data[city1]?.[cat1]?.[place1]) {

              if (data[city1][cat1][place1]['id'] === id){
                var today = new Date();
                var dd = String(today.getDate()).padStart(2, '0');
                var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                var yyyy = today.getFullYear();

                today = dd + '/' + mm + '/' + yyyy;

                var comments = data[city1][cat1][place1]['comments'] 
                var comments2 = (comments === undefined) ? [today + ' : ' + text] : [comments].concat([today + ' : ' +text])
    
                data[city1][cat1][place1]['comments']  = comments2
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
