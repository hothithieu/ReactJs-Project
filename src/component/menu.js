import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { Navbar, Nav, NavItem, NavLink, UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,NavbarToggler, NavbarBrand,Collapse,Form,InputGroupText} from 'reactstrap';

export default class Menu extends React.Component{
  render(){
    return(

          <Navbar color="light" light expand="md" >
            <Nav className="ml-auto menu-left " navbar>
              <NavItem >
                <Link to='/'>Home</Link>
              </NavItem>
              <NavItem>
                <Link to='/introduce'>Introduce</Link>
              </NavItem>
              <NavItem>
                <Link to='/help'>Help</Link>
              </NavItem>
              <NavItem>
                <Link to='/contact'>Contact Us</Link>
              </NavItem>
            </Nav>
          </Navbar>
    );
  }
}