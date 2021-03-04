import L from "leaflet";


 const VenueLocationIcon =
  L.icon({
  //iconUrl: require("../assets/venue_location_icon.svg"),
  //iconRetinaUrl: require("../assets/venue_location_icon.svg"),
  iconUrl:require("../assets/synagogue.png"),
  iconRetinaUrl: require("../assets/synagogue.png"),
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [25, 25],
  className: "leaflet-venue-icon",
}) 

export default VenueLocationIcon;
