(this["webpackJsonpleaflet-react"]=this["webpackJsonpleaflet-react"]||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/venue_location_icon.2ceaf661.svg"},30:function(e){e.exports=JSON.parse('{"tlv":[{"description":"\u05ea\u05d9\u05d0\u05d5\u05e8","name":"\u05e9\u05dd","geometry":[32.0429994,34.7661248]}],"bs":[{"description":"\u05e1\u05ea\u05dd \u05e8\u05e7 \u05e9\u05dc \u05d4\u05dc\u05d5\u05e0\u05d4","name":"\u05d4\u05d8\u05d9\u05e8\u05d4 \u05e9\u05dc \u05d4\u05dc\u05d5\u05e0\u05d4 \u05d5\u05d2\u05dc","geometry":[31.268733,34.799395]}]}')},31:function(e,t,a){e.exports=a(45)},36:function(e,t,a){},37:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(16),c=a.n(o),r=(a(36),a(37),a(15)),i=a(5),u=a(13),s=a(21),m=a(53),d=a(54),E=a(30),h=a(47),g=a(7),p=a.n(g).a.icon({iconUrl:a(28),iconRetinaUrl:a(28),iconAnchor:null,shadowUrl:null,shadowSize:null,shadowAnchor:null,iconSize:[35,35],className:"leaflet-venue-icon"}),f=a(52),b=function(e){var t=e.data,a=t.name,n=t.description;return l.a.createElement(f.a,null,l.a.createElement("div",null,a," "),l.a.createElement("div",null," ",n))},w=function(e){var t=e.tlv,a=e.bs,n=e.showBS,o=e.showTLV,c=t.map((function(e,t){return l.a.createElement(h.a,{key:t,position:e.geometry,icon:p},l.a.createElement(b,{data:e}))})),r=a.map((function(e,t){return l.a.createElement(h.a,{key:t,position:e.geometry,icon:p},l.a.createElement(b,{data:e}))}));return l.a.createElement(l.a.Fragment,null,o?c:null,n?r:null)},v=a(48),O=a(49),j=a(50),y=a(51),S=(a(39),a(40),function(e){var t=Object(n.useState)({currentLocation:{lat:32.0429994,lng:34.7661248},zoom:8,data:E,showTLV:!0,showBS:!0}),a=Object(s.a)(t,2),o=a[0],c=a[1],r=Object(i.g)(),h=Object(i.f)();return Object(n.useEffect)((function(){if(r.state.latitude&&r.state.longitude){var e={lat:r.state.latitude,lng:r.state.longitude};console.log(o),c(Object(u.a)(Object(u.a)({},o),{},{data:{tlv:o.data.tlv.concat({name:"new",geometry:[e.lat,e.lng]}),bs:o.data.bs.concat({name:"new",geometry:[e.lat,e.lng]})},currentLocation:e})),h.replace({pathname:"/map",state:{}})}}),[r]),l.a.createElement(v.a,{fluid:!0,className:"text-light bg-blue py-3"},l.a.createElement(O.a,null,l.a.createElement(j.a,null,l.a.createElement("h1",null,l.a.createElement("span",null," \u05e9\u05d5\u05de\u05e8\u05d9\u05dd \u05e2\u05dc \u05d4\u05d1\u05e0\u05d9\u05d9\u05e0\u05d9\u05dd \u05dc\u05e9\u05d9\u05de\u05d5\u05e8"),l.a.createElement("span",{role:"img","aria-label":"\u05d0\u05d5\u05d4\u05dc",className:"mx-1"})),l.a.createElement("h2",null,"\u05e8\u05d9\u05db\u05d5\u05d6 \u05de\u05d0\u05d2\u05e8\u05d9 \u05de\u05d9\u05d3\u05e2 \u05e2\u05dc \u05de\u05d1\u05e0\u05d9\u05dd \u05dc\u05e9\u05d9\u05de\u05d5\u05e8 \u05d1\u05de\u05d3\u05d9\u05e0\u05ea \u05d9\u05e9\u05e8\u05d0\u05dc"))),l.a.createElement(O.a,null,l.a.createElement(j.a,null,l.a.createElement("h2",null,"\u05ea\u05dc\u05d7\u05e6\u05d9 \u05e2\u05dc\u05d9\u05e0\u05d5"),l.a.createElement(y.a,{onClick:function(){return c(Object(u.a)(Object(u.a)({},o),{},{showTLV:!o.showTLV}))}},"\u05ea\u05dc \u05d0\u05d1\u05d9\u05d1"),l.a.createElement(y.a,{onClick:function(){return c(Object(u.a)(Object(u.a)({},o),{},{showBS:!o.showBS}))}},"\u05dc\u05d5\u05e1-\u05d0\u05e0\u05d2'\u05e1"))),l.a.createElement(O.a,null,l.a.createElement(j.a,null,l.a.createElement(m.a,{center:o.currentLocation,zoom:o.zoom},l.a.createElement(d.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),l.a.createElement(w,{tlv:o.data.tlv,bs:o.data.bs,showTLV:o.showTLV,showBS:o.showBS})))))}),L=function(){var e=Object(n.useState)({longitude:0,latitude:0}),t=Object(s.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){o({longitude:e.coords.longitude,latitude:e.coords.latitude})}),(function(e){console.error("Error Code = "+e.code+" - "+e.message)}),{enableHighAccuracy:!0})}),[]),l.a.createElement("div",null,l.a.createElement("h1",null,"Geolocation"),l.a.createElement("p",null,"Latitude: ",a.latitude),l.a.createElement("p",null,"longitude: ",a.longitude),l.a.createElement(r.b,{to:{pathname:"/map",state:a}},"See marker"))};var k=function(){return l.a.createElement(r.a,null,l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/map"},l.a.createElement(S,null),";"),l.a.createElement(i.a,{path:"/"},l.a.createElement(L,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.87fc6f3d.chunk.js.map