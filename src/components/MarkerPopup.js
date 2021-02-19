import { Button } from 'react-bootstrap';
import React, {useState} from "react";
import { Popup } from "react-leaflet";


const MarkerPopup = (props) => {
  const { address,description,id } = props.data;
  const {updateDB, data } = props;
  const  [showText, setShowText ]= useState(false)
  const  [text, setText ]= useState('')

   function poiUpdae(e) {
     console.log( id + ' '+text)
    updateDB('100',text);
  }



  return (
    <Popup>
      <div> {description}</div>
      <div>{address} </div>
      <Button onClick={()=> {setShowText(true); }}>
        לחץ להוספת פרטים
      </Button>

      {
       showText? 
        <div>
            <textarea type='text'  onChange={e => {setText(e.target.value); console.log(text)}}>
            </textarea>
            <Button onClick={poiUpdae}>
              שמור שינויים
            </Button>
        </div>
        : null
      }
     

    </Popup>
  );
};

export default MarkerPopup;
