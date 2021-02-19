import React, { useEffect } from "react";
import { Marker } from "react-leaflet";
import { VenueLocationIcon } from "./VenueLocationIcon";
import MarkerPopup from "./MarkerPopup";

const VenueMarkers = (props) => {
  const { tlv,bs,jlm,showBS,showTLV,showJLM,updateDB } = props;



  const markersTLV = tlv.map((venue, i) => (
    <Marker key={i} position={venue.geometry} icon={VenueLocationIcon}>
      <MarkerPopup updateDB={updateDB} data={venue} />
    </Marker>
  ));

  const markersbs = bs.map((venue, i) => (
    <Marker key={i} position={venue.geometry} icon={VenueLocationIcon}>
      <MarkerPopup updateDB={updateDB} data={venue} />
    </Marker>
  ));

  const markersjlm = jlm.map((venue, i) => (
    <Marker key={i} position={venue.geometry} icon={VenueLocationIcon}>
      <MarkerPopup updateDB={updateDB} data={venue} />
    </Marker>
  ));


  
  return <>
            {showTLV? markersTLV : null}
            {showBS? markersbs: null}
            {showJLM? markersjlm: null}
  </>;
};

export default VenueMarkers;
