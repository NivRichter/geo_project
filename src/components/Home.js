import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {Airtable} from 'airtable';

const Home = () => {
  const [state, setState] = useState({
    longitude: 0,
    latitude: 0,
  });



  useEffect(() => {
    fetch('https://api.airtable.com/v0/appgOPm5an5ZzNvkk/favorites?api_key=keyiw9cfT8UR5IwVM')
    .then((resp) => resp.json())
    .then(data => {
       this.setState({ movies: data.records });
    }).catch(err => {
      // Error :(
    });

    navigator.geolocation.getCurrentPosition(
      function (position) {
        // console.log(position);
        setState({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
      },
      function (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      },
      {
        enableHighAccuracy: true,
      }
    );
  }, []);

  return (
    <div>
      <h1>Geolocation</h1>
      <p>Latitude: {state.latitude}</p>
      <p>longitude: {state.longitude}</p>

      <Link
        to={{
          pathname: "/map",
          // state: {
          //   hello: 'world'
          // }
          state,
        }}
      >
        See marker
      </Link>
    </div>
  );
};

export default Home;
