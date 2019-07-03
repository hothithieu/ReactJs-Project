import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'reactstrap';
import {  Navbar, Nav, NavItem, NavLink, UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap';
import { InputGroup, InputGroupAddon,Input } from 'reactstrap';
import { Button } from 'reactstrap';
export default class Header extends React.Component{
 
  render(){
    return(
      
      <Container fluid className="headerchinh">
        <Row>
          <Col xs="6">
            <Navbar color="light" light expand="md">
              <Nav>
                  <NavItem>
                    <NavLink href="#">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">GitHub</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">GitHub</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">GitHub</NavLink>
                  </NavItem>
                </Nav>
            </Navbar>
          </Col>
          <Col xs="6">
            
          </Col>
        </Row>
        <Row >
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
              <p><p></p></p><center><p>Free image by wal_172619</p></center>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
