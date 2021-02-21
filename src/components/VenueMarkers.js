import React, { useEffect } from "react";
import { Marker } from "react-leaflet";
import { VenueLocationIcon } from "./VenueLocationIcon";
import MarkerPopup from "./MarkerPopup";

const VenueMarkers = (props) => {
  const { marks,showGroupStatus,updateDB } = props;
  console.log('in vnenue: '   +JSON.stringify(showGroupStatus))
  const city_sub_sets = marks? Object.keys(marks) :undefined
  //const keys = Object.keys(showGroupStatus)
  const city_marks = city_sub_sets? city_sub_sets.reduce( (acc,sub_set_name) => showGroupStatus[sub_set_name]? acc.concat(
    marks[sub_set_name].map((venue, i) => (
      <Marker key={i} position={venue.geometry} icon={VenueLocationIcon}>
        <MarkerPopup updateDB={updateDB} data={venue} />
      </Marker>
    )
  )) 
  : acc
  
   ,[]) :undefined






  
  return <>
  {city_marks}
  </>;
};

export default VenueMarkers;
