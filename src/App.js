import React, { Component,useState, useEffect } from "react";
import "./App.css";
import firebase from "./firestore/firebase";
import dataDB from "./assets/data.json";
import {db} from './firestore/firebase';


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MapView from "./components/MapView";
import Home from "./components/Home";
//keyiw9cfT8UR5IwVM
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
      console.log(`data: ${JSON.stringify(data)}`)
      this.setState({jsonDB:data, loading:false})
    });

}


    // console.log("mounting APP");
    // let url = this.state.jsonURL
    // fetch(url, {
    //   method: "GET", // *GET, POST, PUT, DELETE, etc.
    //   mode: "cors", // no-cors, *cors, same-origin
    //   cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //   credentials: "same-origin", // include, *same-origin, omit
    //   headers: {
    //     "secret-key": this.state.jsonKey
          
    //   }
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     this.setState((prevState) => ({ jsonData: data }));
    //     console.log(data)
    //   });
  


  handleDBUpdate = (id,text) => {
    const data = this.state.jsonDB
    for (var city in data) {
      if (data.hasOwnProperty(city)) {
        for (var place in city){
          console.log(data[city][place])
          if (data[city][place]){
            if (data[city][place]['id'] === id){
              console.log('HEREEE')
              var comments = data[city][place]['comments'] 
              var comments2 = (comments === undefined) ? text : comments + '\n ' + text
  
              data[city][place]['comments']  = comments2
              console.log(data);
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

  // handleDBUpdate = (id,text) =>{
  //   let db = this.state.db
  //   let doc = db.doc(id);
  //   return doc.update({
  //       text: text
  //   })
  //   .then(() => {
  //       console.log("Document successfully updated!");
  //   })
  //   .catch((error) => {
  //       // The document probably doesn't exist.
  //       console.error("Error updating document: ", error);
  //   });
  // }

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
