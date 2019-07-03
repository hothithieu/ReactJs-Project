
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch, faThumbsUp, faHeart, faComment, faUser} from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'reactstrap';
import {  Navbar, Nav, NavItem, NavLink, UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap';
import { InputGroup, InputGroupAddon,Input, Form,Collapse } from 'reactstrap';
import { Button, Modal,ModalHeader, ModalBody,ModalFooter } from 'reactstrap';
import {Link} from 'react-router-dom';
import { Badge } from 'reactstrap';
import{AvField,AvForm} from 'availity-reactstrap-validation';
/******giá trị của key là khi đăng nhập sẽ có********/
const key = '12929393-7c6c13aaef3f6653c1c44878f'
/******** địa chỉ api của hình ảnh trong trang web https://pixabay.com/api/docs/*********/
const API='https://pixabay.com/api/';
const DEFAULT_QUERY = 'redux';
class Content extends React.Component{
  
  constructor(props){
    super(props);
    this.state={
      hits:[],
      search: '',
      category:''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.handleValidSubmit = this.handleValidSubmit.bind(this);
    // this.handleInalidSubmit = this.handleInalidSubmit.bind(this);
    // this.closeModal = this.closeModal.bind(this);
    // this.state={search: false}
  }

  apiSearch(){
    fetch(API + '?key=' + key + '&q='+this.state.search + '&category=' + this.state.category)
    .then(response => response.json())
    .then(data => {
      console.log(data);/*******để kiểm tra dữ liệu(data=>vào trong kiểm tra=>console) lọc đã đúng chưa*********/
      this.setState({
        hits: data.hits,
      });
    });
  }
  componentDidMount(){
    /***fetch(API tức là gọi API*(+'?key=' + key + '&q'=> từ khóa của chức năng search// this.state.search.search--> là lấy từ hàm contructor phần thí.state được nhập từ bàn phím rong quá trình tìm kiếm  *****/
    this.apiSearch()
  }

  handleChange(event) {
    this.setState({
      search: event.target.value
    });
  }

  handleSubmit (event) {
    alert('An essay was submitted: ' + this.state.search);
    event.preventDefault();
    // call search function
    this.apiSearch()
  }

render(){
  console.log('hit', this.state.hits);/******kiểm tra giá trị của hit *******/
 /* chạy vòng for  this.state.hits.map (giá trị hit lấy từ API) */
  var colImg = this.state.hits.map((image, index) => (
      <Col xs="3" key={index}>
        <div className="img conten-imga">
          <a href="#">
            <div style={{
              /*******largeImageURL là giá trị được lấy về trong quá trình kiểm tra trong ứng dụng tải về postman********/
              background: `url('${image.largeImageURL}')`,
                backgroundSize: 'cover',
                  height: '397px', 
                }}>
            </div>
            <div class="txt">
              <Row>
                <Col xs="6"><FontAwesomeIcon icon={faUser} style={{color:'rgb(33, 126, 184)'}} size="lg"/>{image.user}</Col>
                <Col xs="6"><FontAwesomeIcon icon={faThumbsUp} style={{ color: 'blue' }} size="lg"/> {image.likes}  <FontAwesomeIcon icon={faHeart} style={{color:'red'}} sile="2x"/> {image.favorites}  <FontAwesomeIcon icon={faComment} style={{color:'blue'}}  size="lg"/> {image.comments}</Col>
                {/* <h3>AMAZING CAPTION</h3>
                <p>Whatever It Is - Always Awesome</p>  */}
              </Row>
            </div>
          </a>
        </div>
      </Col>
  ));
      
  
  return(
    <Container fluid className="main">
      <div className="header">
        
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
              <Form  onSubmit ={this.handleSubmit}> >
              <InputGroup>
                <Button color="#FFFFFF" className="searchButton" type="submit" value="Submit"><FontAwesomeIcon icon={faSearch} style={{ color: 'black' }} size="lg"/></Button>{' '}
                <Input placeholder="What is the photo you want?"  type="search" name="search" id="exampleSearch" value={this.state.search} onChange={this.handleChange}/>
                <InputGroupAddon addonType="append">image</InputGroupAddon>
              </InputGroup>
              <h9>Popular images: 
                <Form onSubmit ={this.handleSubmit}>
                  <a href="/"> Travel, </a>
                  <a href="/">science, </a>
                  <a href="/">education, </a>
                  <a href="/">education, </a>
                  <a href="/">people, </a>
                  <a href="/">feelings, </a>
                  <a href="/">health,... </a>
                </Form>
              </h9><p></p>
              </Form>
              
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
      
      <div className="content">
        <Row>
          {colImg}
        </Row>
      </div>
      
      <div className="footer">
        <Row>
          <Col sm-12 md={{ size:6,offset:3}}>
          <div className="principal"style={{color: 'black'}}> 
            <div className="col slogan">
                <center><h2>IMAGE HOUSE</h2>
                  <h3>The internet’s source of freely useable images</h3>
                  <h4>Powered by creators everywhere</h4></center><br></br>
            </div>
          </div>
          </Col>
        </Row>
        <Row><p><p><p></p></p></p>
          <Col xs="3">
          <center><a href="true"><img alt="app store" src="https://www.solodev.com/assets/footer/appstore.png" /></a></center>
          </Col>
          <Col xs="3">
          <address>
            <center><span>Green Global<br /></span>31 Tran Phu Street<br />
                Son Tra, Da-Nang, 2019<br />
                <span>Phone: <a href="tel:5555555555">(555) 555-8899</a></span>
                </center>
            </address>
          </Col>
          <Col xs="3">
            <center>
            <img alt="logo" src="https://www.solodev.com/assets/footer/logo.png" />
            </center>
          </Col>
          <Col xs="3">
            <center>
            {/* <img alt="logo" src="https://www.solodev.com/assets/footer/androidstore.png" /> */}
            </center>
          </Col>
        </Row>
        <Row>
          <Col xs="6">
            <ul className="ct-socials list-unstyled list-inline">
              <li>
                <a href="true" ><img alt="facebook" src="https://www.solodev.com/assets/footer/facebook-white.png" /></a>
              </li>
              <li>
                <a href="true"><img alt="twitter" src="https://www.solodev.com/assets/footer/twitter-white.png" /></a>
              </li>
              <li>
                <a href="true" ><img alt="youtube" src="https://www.solodev.com/assets/footer/youtube-white.png" /></a>
              </li>
              <li>
                <a href="true"  ><img alt="instagram" src="https://www.solodev.com/assets/footer/instagram-white.png" /></a>
              </li>
              <li>
                <a href="true"  ><img alt="pinterest" src="https://www.solodev.com/assets/footer/pinterest-white.png" /></a>
              </li>
            </ul>
          </Col>
          <Col xs="6" className="poeple">
          <p>Website © 2019-Support By Mr.Nguyen Phong</p>
          </Col>
        </Row>
      </div>
      </Container>
    );
  }
}

export default Content;