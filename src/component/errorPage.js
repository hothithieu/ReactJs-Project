import React from 'react';
import {Container, Row, Col,Button} from 'reactstrap';
 
export default class Errorpage extends React.Component{
  render(){
    return(
      <div>
        <br /><br />
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
          <center><img src=" https://image.flaticon.com/icons/svg/56/56301.svg"  style={{width: '180px', height: '180px'}} /></center>
          </Col>
        </Row><br/>
        <Row> 
          <Col sm="12" md={{ size: 6, offset: 3 }} className="notFound"><center><p>NOT FOUND !!!</p></center>
          </Col>
        </Row><br/>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}><center><a href="/"><Button style={{backgroundColor: 'green'}}> Come Back</Button> </a></center>
          </Col>
        </Row>
        </div>
    );
  }
}