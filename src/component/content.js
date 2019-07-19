
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch, faThumbsUp, faHeart, faComment, faUser} from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'reactstrap';
import {  Navbar, Nav, NavItem, NavLink, UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap';
import { InputGroup, InputGroupAddon,Input, InputGroupText,Form,Collapse } from 'reactstrap';
import { Button, Modal,ModalHeader, ModalBody,ModalFooter } from 'reactstrap';
import {NavLink as RRNavLink} from 'react-router-dom';
import { Badge } from 'reactstrap';
import Errorpage  from './errorPage';
import Menu  from './menu';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import {BrowserRouter as Router,Route,Link,} from 'react-router-dom'
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
      category: '',
      page: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
 
  }
  apiSearch(){
    fetch(API + '?key=' + key + '&q='+this.state.search + '&category=' + this.state.category + '&page='+this.state.page)
    .then(response => response.json())
    .then(data => {
      console.log(data);/*******để kiểm tra dữ liệu(data=>vào trong kiểm tra=>console) lọc đã đúng chưa*********/
      this.setState({
        hits: data.hits,
      })
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
  selectCaregory(category) {
    this.setState({category}, () => {this.apiSearch()})
    // set giá trị cho category ( vì tên trung nhau nên viết 1 category thôi)// ' ()' => chờ để nó sử lý xong rồi mới chạy về hàm search 
  }
  selectPage(page){
    this.setState({page}, () =>{this.apiSearch()})
  }
  
  handleSubmit (event) {
    event.preventDefault();
    // call search function 
    this.apiSearch()
  } 
  
  render(){
  console.log('hit', this.state.hits);/******kiểm tra giá trị của hit *******/
 /* chạy vòng for  this.state.hits.map (giá trị hit lấy từ API) */
  // let { id  } = this.props; 
    let colImg = this.state.hits.map((image, index) => (
      <Col xs="12" sm="3" className="conten-imga" key={index}>
        <div className="img conten-imga" style={{ paddingLeft: '6px'}} >
        <Link to={`/detail/${image.id}`}>
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
              </Row>
            </div>
          </Link>
        </div>
      </Col>  
  ));
  
  console.log(5555,colImg);
  let categories = ['travel', 'animate','science','education', 'river', 'mosel', 'health']
  let pageNumber=['1','2','3','4','5','6','7','8','9','10','11']

  return(
    <Container fluid className="main">
      <div className="header">    
        <Row>
         <Col xs="6" className="set_logo">
         <a href="true" className="logo">
           <img alt="Logo" src="https://www.freelogodesign.org/file/app/client/thumb/be3e900d-eb2b-45a7-b567-1d365300558b_200x200.png?1560927344917" 
         style={{width: '150px', height: '150px'}} />
         </a>
          </Col>
          <Col xs="6">
             <Menu />
          </Col>  <br /> <br />
        </Row> <br /><br />
        <Row >  <br /><br />
          <Col sm=" 12" md={{ size: 6, offset: 3 }} >
            <div className="slogan">
              <center><p><h2>Stunning free images & royalty free stock</h2></p>
              <h5>Free images & royalty free stock for you</h5><br />
              <Form  onSubmit ={this.handleSubmit}> 
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                    <InputGroupText ><FontAwesomeIcon icon={faSearch} style={{ color: 'black' }} size="1,5x"/></InputGroupText> 
                      {/* <InputGroupText  className="searchButton" type="submit" value="Submit"><FontAwesomeIcon icon={faSearch} style={{ color: 'black' }} size="1,5x"/></InputGroupText> */}
                    </InputGroupAddon>  
                    <Input placeholder="What is the photo you want ?" type="search" name="search" id="exampleSearch" value={this.state.search} onChange={this.handleChange}/>
                    <InputGroupAddon addonType="append">
                      <InputGroupText>image</InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                  <h9>Popular images:  
                  { categories.map(item => (
                    <span key={item} onClick={this.selectCaregory.bind(this, item)}> {item}, </span>
                  )) }
              </h9><p></p>
              </Form>
              </center>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }} >
            <div className="slogan">
            <br /><br /><center><p>Free image by image-house</p></center>
            </div>
          </Col>
        </Row>
        </div>
      
      <div className="content"><br />
        <Row>
        <div>
          <Breadcrumb tag="nav" listTag="div">
            <BreadcrumbItem tag="a" href="#">Images</BreadcrumbItem>
            <BreadcrumbItem tag="a" href="#">Videos</BreadcrumbItem>
          </Breadcrumb>
        </div>
        </Row>
        <Row>
        
         {this.state.hits.length===0 ? (
            <Col sm-12 md={{ size:6,offset:3}}>
              <div className="ogan">
                <center>NOT FOUND!!!</center>
                <Errorpage />
              </div>
              </Col>
            ) : (colImg)
          }
        </Row><br />
        <Row>
            <Col sm="12" >
              <Pagination aria-label="Page navigation example">
                  <PaginationItem>
                    <PaginationLink previous href="#" />
                  </PaginationItem>
                  {pageNumber.map(itempage =>(
                  <PaginationItem>
                    <PaginationLink key={itempage} onClick={this.selectPage.bind(this,itempage)}>{itempage}</PaginationLink>
                  </PaginationItem>  ))}
                  <PaginationItem>
                    <PaginationLink next href="#" />
                  </PaginationItem>
            </Pagination> 
          </Col>
        </Row><br />
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
        <Row><br /><br />
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
          <p>Website © 2019-Support By Mr.Nguyễn Hữu Hoàng Phong</p>
          <p>Enforcement © By Hồ Thị Thiều</p>
          </Col>
        </Row>
      </div>
      </Container>
    );
  }
}

export default Content;