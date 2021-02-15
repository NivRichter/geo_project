import React from "react";
import { Marker } from "react-leaflet";
import { VenueLocationIcon } from "./VenueLocationIcon";
import MarkerPopup from "./MarkerPopup";

const VenueMarkers = (props) => {
  const { tlv,bs,showBS,showTLV } = props;
  const markersTLV = tlv.map((venue, i) => (
    <Marker key={i} position={venue.geometry} icon={VenueLocationIcon}>
      <MarkerPopup data={venue} />
    </Marker>
  ));

  const markersbs = bs.map((venue, i) => (
    <Marker key={i} position={venue.geometry} icon={VenueLocationIcon}>
      <MarkerPopup data={venue} />
    </Marker>
  ));
  return <>{showTLV? markersTLV : null}
  {showBS? markersbs: null}</>;
};

export default VenueMarkers;
