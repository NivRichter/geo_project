import { Button } from 'react-bootstrap';
import React, {useState} from "react";
import { Popup } from "react-leaflet";


const MarkerPopup = (props) => {
  const { street,b_type,id,comments } = props.data;
  const {updateDB, data } = props;
  const  [showText, setShowText ]= useState(false)
  const  [text, setText ]= useState('')

   function poiUpdae(e) {
     console.log( id + ' '+text)
    updateDB(id,text);
  }

  const commentsList = comments !== undefined? comments.map((comment) =><li>{comment}</li> ) : <li> אין הערות</li>




  return (
    <Popup>
      <div> {b_type}</div>
      <div>{street} </div>
      <div>הערות גולשים:</div>
      <div>{commentsList}</div>
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
