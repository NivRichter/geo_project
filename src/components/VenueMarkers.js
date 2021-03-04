import React, { useEffect } from "react";
import { Marker } from "react-leaflet";
import  VenueLocationIcon  from "./VenueLocationIcon";
import MarkerPopup from "./MarkerPopup";
import L from "leaflet";

const VenueMarkers = (props) => {
  const { marks,showGroupStatus,updateDB } = props;
  const city_sub_sets = marks? Object.keys(marks) :undefined

  function getIcon(name){
  return  name.includes("kneset") || name.includes("knesset") ? 
    require("../assets/synagogue.png") : 
    name.includes('hotel')?   require("../assets/hotel.png") :
    name.includes('tomb')? require("../assets/cemetery.png"):
    name.includes('school')? require("../assets/school.png"):
    name.includes('museum')? require("../assets/museum.png"):
    name.includes('people')? require("../assets/famous.png"):
   require("../assets/venue_location_icon.svg")

 }

  //const keys = Object.keys(showGroupStatus)
  const city_marks = city_sub_sets? city_sub_sets.reduce( (acc,sub_set_name) => showGroupStatus[sub_set_name]? acc.concat(
    marks[sub_set_name].map((venue, i) => (
      <Marker key={i} position={venue.geometry} icon={
        L.icon({
          //iconUrl: require("../assets/venue_location_icon.svg"),
          //iconRetinaUrl: require("../assets/venue_location_icon.svg"),
          iconUrl:getIcon(sub_set_name),
          iconRetinaUrl: getIcon(sub_set_name),
          iconAnchor: null,
          shadowUrl: null,
          shadowSize: null,
          shadowAnchor: null,
          iconSize: [25, 25],
          className: "leaflet-venue-icon",
        })
      } >
        <MarkerPopup updateDB={updateDB} data={venue}  />
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
