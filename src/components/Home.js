import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {Airtable} from 'airtable';

const Home = () => {
  const [state, setState] = useState({
    longitude: 0,
    latitude: 0,
  });




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
