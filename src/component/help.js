import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'reactstrap';
import {  Navbar, Nav, NavItem, NavLink, UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,Form,InputGroupText} from 'reactstrap';
import { InputGroup, InputGroupAddon,Input } from 'reactstrap';
import { Button } from 'reactstrap';
import {BrowserRouter as Router,Route,Link,} from 'react-router-dom'
import Menu from './menu';

export default class Help extends React.Component{
  render(){
    return(
      <Container fluid fluid className="Help-main">  
        <div className="header-help">
        <Row>
         <Col xs="6">
         <a href="true" className="logo">
           <img alt="Logo" src="https://www.freelogodesign.org/file/app/client/thumb/be3e900d-eb2b-45a7-b567-1d365300558b_200x200.png?1560927344917" 
         style={{width: '150px', height: '150px'}} />
         </a>
          </Col>
          <Col xs="6">
              <Menu />
          </Col>   <p><p></p></p> 
        </Row> <p><p></p></p>
        <Row >   <p><p></p></p>
          <Col sm=" 12" md={{ size: 6, offset: 3 }} >
            <div className="slogan">
              <center><p><h4>Stunning free images & royalty free stock</h4></p>
              <h5>Stunning free images & royalty free stock</h5><p></p>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                    <InputGroupText ><FontAwesomeIcon icon={faSearch} style={{ color: 'black' }} size="1,5x"/></InputGroupText> 
                      {/* <InputGroupText  className="searchButton" type="submit" value="Submit"><FontAwesomeIcon icon={faSearch} style={{ color: 'black' }} size="1,5x"/></InputGroupText> */}
                    </InputGroupAddon>
                    <Input placeholder="What is the photo you want ?" type="search" name="search" id="exampleSearch"/>
                    <InputGroupAddon addonType="append">
                      <InputGroupText>image</InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                  <h9>Popular images: 
                
                  <a href="/"> Travel, </a>
                  <a href="/">science, </a>
                  <a href="/">education, </a>
                  <a href="/">education, </a>
                  <a href="/">people, </a>
                  <a href="/">feelings, </a>
                  <a href="/">health,... </a>
           
              </h9><p></p>

              </center>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }} >
            <div className="slogan">
              <p><p></p></p><center><p>Free image by image-house</p></center>
            </div>
          </Col>
        </Row>
        </div>
        <div className="conten-Help">
          <Row>
            <Col sm=" 12" md={{ size: 6, offset: 3 }}  className="text-content-help">
              <center>
                <h1> Image-House</h1><p></p>
                <h3>The website help you finding a lot of images</h3><br></br>
                <h8>The website of us will bring for you wonderful images </h8><br></br>
                <h10>you trust say what image you want by the key work<br></br></h10>
              </center>
            </Col><p></p><p></p>
          </Row><p></p><p></p>
          <Row>
         
            <Col sm=" 12" md={{ size: 6, offset: 3 }} >
              <div className="bt-intro">
              <center><Button> We will bring for you beautiful images</Button></center>
              </div>
            </Col>

          </Row>  
          <Row>
            <Col xs="4" className="img-intro"> <div style={{
                  background: `url('https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')` ,
                    backgroundSize: 'cover',
                      height: '397px', 
                    }}>
                </div>
            </Col>
            <Col xs="4" className="img-intro">
              <div style={{
                  background: `url('http://website3s.com/wp-content/uploads/2018/09/fruit.jpg')` ,
                    backgroundSize: 'cover',
                      height: '397px', 
                    }}>
                </div>
            </Col>
            <Col xs="4" className="img-intro">
              <div style={{
                  background: `url('https://images.unsplash.com/photo-1561499521-7c1483af90fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')` ,
                    backgroundSize: 'cover',
                      height: '397px', 
                    }}>
                </div>
            </Col>
          </Row> 
        </div>
        <div className="footer-intro">
          <Row> 
            <Col sm=" 12" md={{ size: 6, offset: 3 }} >
            <center><Button> click here</Button></center> 
            </Col><p></p><p></p>
            <Col sm=" 12" md={{ size: 6, offset: 3 }} >
            <center><h1>Join Image-House</h1><p></p>Image-House is a vibrant community of creatives, sharing copyright free images and videos. All contents are released under the Image-House License, 
            </center>
            </Col>
          </Row>
        </div> 
      </Container>
    );
  }
}