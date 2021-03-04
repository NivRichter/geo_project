import { Button, Container } from 'react-bootstrap';
import React, { useState } from "react";
import { Popup } from "react-leaflet";
import { Row, Col } from 'react-bootstrap';


const MarkerPopup = (props) => {
  const { street, b_type, id, comments, name, year } = props.data;
  const { updateDB, data } = props;
  const [showText, setShowText] = useState(false)
  const [text, setText] = useState('')

  function poiUpdae(e) {
    updateDB(id, text);
  }

  const commentsList = comments !== undefined ? comments.map((comment) => <li>{comment}</li>) : <li> אין הערות</li>

  const rowStyle = {paddingLeft: '5em'
                    , direction:'rtl'}


  return (
    <Popup   >
         <Container flex>

         <Row style = {{textAlign:'right'}} > 
           <Col >
           {name !== "" ? <h6>{name}</h6> : null}

           </Col>
         </Row>
         <Row style = {{textAlign:'right'}} >
           <Col >
             <a >
             סוג מבנה: {b_type === "" ? "אין מידע" : b_type} 

             </a>
           </Col >
         </Row>
         <Row style = {{textAlign:'right'}}>
           <Col >
           שנת הקמה: {year > 0 ?  Math.floor(year) : "אין מידע" } 

           </Col>
         </Row>
         <Row style = {{textAlign:'right'}}>
           <Col >
           כתובת: {street}  

           </Col>
         </Row>
         <Row style = {{textAlign:'right'}}>
           <Col>
           ---
           </Col>
         </Row>

         <Row style = {{textAlign:'right'}}>
           <Col >
           הערות גולשים:

           </Col>
         </Row>
         <Row style = {{textAlign:'right'}}>
           <Col >
           {commentsList}

           </Col>
         </Row>
         <Row style = {{textAlign:'right'}}>
           <Col >
            <Button  onClick={() => { setShowText(true); }}>
              לחץ להוספת פרטים
            </Button>
           </Col>
         </Row>

         <Row>
           <Col>
                {
              showText ?
                <div>
                  <textarea type='text' onChange={e => { setText(e.target.value) }}>
                  </textarea>
                  <Button onClick={poiUpdae}>
                    שמור שינויים
                  </Button>
                </div>
                : null
            }
           </Col>
         </Row>
      </Container>
    </Popup>
  );
};

export default MarkerPopup;
