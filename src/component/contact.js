import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'reactstrap';
import {  Navbar, Nav, NavItem, NavLink, UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap';
import { InputGroup, InputGroupAddon,Input } from 'reactstrap';
import { Button } from 'reactstrap';
import {Form, FormGroup, Label, FormText } from 'reactstrap';

export default class Contact extends React.Component{
  render(){
    return(
      <Container fluid fluid className="Contact-main">  
        <div className="Contact-header">
        <Row>
         <Col xs="6">
         <a href="true" className="logo">
           <img alt="Logo" src="https://www.freelogodesign.org/file/app/client/thumb/be3e900d-eb2b-45a7-b567-1d365300558b_200x200.png?1560927344917" 
         style={{width: '150px', height: '150px'}} />
         </a>
          </Col>
          <Col xs="6">
              <Navbar color="light" light expand="md" >
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/introduce">Introduce</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/help">Help</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/contact">Contact Us</NavLink>
                  </NavItem>
                </Nav>
              </Navbar>
          </Col>   <p><p></p></p>
        </Row> <p><p></p></p>
        <Row >   <p><p></p></p>
          <Col sm=" 12" md={{ size: 6, offset: 3 }} >
            <div className="slogan">
              <center><p><h2>Stunning free images & royalty free stock</h2></p>
              <h5>Stunning free images & royalty free stock</h5><p></p>
              
              <InputGroup>
                <Button color="#FFFFFF" className="searchButton" ><FontAwesomeIcon icon={faSearch} style={{ color: 'black' }} size="lg"/></Button>{' '}
                <Input placeholder="What is the photo you want?" />
                <InputGroupAddon addonType="append">image</InputGroupAddon>
              </InputGroup>
              <h9>Popular images: mother's day, wallpaper, wielkanoc, summer, business, mother day, beach, food, nature</h9><p></p>
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
            <Col sm=" 12" md={{ size: 6, offset: 3 }} >
                <div className="bt-intro">
                <center><Button> <h1>Let us know</h1>If you have some question</Button></center>
                </div>
              </Col>

            </Row>  
            <Row>
              <Col sm=" 12" md={{ size: 6, offset: 3 }}  className="text-content-help">
                <center>
                   Let's trust about us <br></br>
                </center>
              </Col>
          </Row>
          <Row>
            <Col xs="4">
            <div style={{
              background: `url('http://duhocvip.com/wp-content/uploads/2017/06/dich-vu-bao-hanh.png')` ,
                    backgroundSize: 'cover',
                      height: '397px', 
                    }}>
                </div>
            </Col>
            <Col xs="3" className="contact-text">
              <center></center><p></p>
              <h6>Phone number: (+84)236958741</h6><br></br>
              <h6>Address: 31 Tran Phu Street, Da Nang city</h6><br></br>
              <h6>Email: Greenglobal@gmail.com</h6><br></br>
            </Col>
            <Col>
            <Form>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleFile">File</Label>
                  <Input type="file" name="file" id="exampleFile" />
                  <FormText color="muted">
                    This is some placeholder block-level help text for the above input.
                    It's a bit lighter and easily wraps to a new line.
                  </FormText>
                </FormGroup>
                <Button>Submit</Button>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col xs="4" className="img-intro"> 
                <div style={{
                  background: `url('https://cdn.pixabay.com/photo/2019/04/29/14/50/camogli-4166255__340.jpg')` ,
                    backgroundSize: 'cover',
                      height: '397px', 
                    }}>
                </div>
            </Col>
            <Col xs="4" className="img-intro">
              <div style={{
                  background: `url('https://cdn.pixabay.com/photo/2019/06/25/13/59/city-4298285__340.jpg')` ,
                    backgroundSize: 'cover',
                      height: '397px', 
                    }}>
                </div>
            </Col>
            <Col xs="4" className="img-intro">
              <div style={{
                  background: `url('https://cdn.pixabay.com/photo/2018/10/28/13/35/orchid-3778816__340.jpg')` ,
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
              <div className="bt-intro">
              <center><Button> We will bring for you beautiful images</Button></center>
              </div>
            </Col>

          </Row>  
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
        </div> 
      </Container>
    );
  }
}