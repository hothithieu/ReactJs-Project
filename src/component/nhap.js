import React from 'react';
import {Container, Row, Col,Button} from 'reactstrap';
import {} from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { ListGroup, ListGroupItem} from 'reactstrap';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import content from './content';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
const key = '12929393-7c6c13aaef3f6653c1c44878f'
/******** địa chỉ api của hình ảnh trong trang web https://pixabay.com/api/docs/*********/
const API='https://pixabay.com/api/';
const DEFAULT_QUERY = 'redux';

export default class Detail extends React.Component{

  render(){
    console.log(this.state.hit);
  //   let colImg = this.state.hits.map((image, index) => (
  //     <Col xs="8" sm="2" key={index}>
  //     {/* {image.tags} */}
  //       <div style={{
  //         background: `url('${image.largeImageURL}')`,
  //           backgroundSize: 'cover',
  //             height: '100px', 
  //           }}>
  //       </div>
  //     </Col>
  //  )).slice(0,3);
  //  console.log(455555,colImg)
    // console.log(222221,this.props)
    /* kiểm tra dư liệu từ trang chủ ra trang chi tiết--> nếu ok thì --> lấy biến "imageDetail" hiện thị nơi url  */




/*ở trang chính trang home  */
    {/* <Link to={{
          pathname: `/detail/${image.id}`,
          state : {
            fromNotifications: image.largeImageURL,
          }
        }}>  */}



 // console.log(455665565, 'this.state.hits')
    // console.log(this.state.hit, 'hits')
    // const array = [{name: 'abc', tag: 'a'}, {name: 'abdđc', tag: 'a'}, {tag: 'b'}, {tag: 'c'}]
    // const results = array.filter(item => item.tag === 'a')
    // const array= this.hit.tags.split(",");
    // console.log(results)

    
    let imageDetail = this.props && this.props.location &&  
                      this.props.location.state && 
                      this.props.location.state.fromNotifications && 
                      this.props.location.state.fromNotifications ? 
                      this.props.location.state.fromNotifications : null;
    let img=['https://cdn.pixabay.com/photo/2018/11/19/05/43/away-3824651__340.jpg',
             'https://images.unsplash.com/photo-1561483742-f76fc07b1637?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
             'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
             'https://cdn.pixabay.com/photo/2015/05/30/19/55/desert-790640__180.jpg'];
    let colIamge = img.map((data,index)=>(
      <Col xs="12" sm="3" key={index} > 
        <Link to='/'><div style={{
          background: `url('${data}')`,
            backgroundSize: 'cover',
              height: '397px', 
            }}>
        </div></Link>
      </Col>  
    ));
    return(
      console.log('hits'),
      <Container fluid className='mainDetail'>
        <Row className="headerDetail">
          <Col xs="6" sm="3" className="logo">
            <a href="true" className="logo">
              <img alt="Logo" src="https://www.freelogodesign.org/file/app/client/thumb/be3e900d-eb2b-45a7-b567-1d365300558b_200x200.png?1560927344917" 
            style={{width: '100px', height: '100px'}} />
            </a>
          </Col>
          <Col xs="12" sm="6" className="search">
          <InputGroup>
            <InputGroupAddon addonType="prepend">
            <InputGroupText ><FontAwesomeIcon icon={faSearch} style={{ color: 'black' }} size="1,5x"/></InputGroupText> 
            </InputGroupAddon>
            <Input placeholder="What is the photo you want ?" type="search" name="search"  /> 
            {/* <Input placeholder="What is the photo you want ?" type="search" name="search" id="exampleSearch" value={this.state.search} onChange={this.handleChange}/> */}
            <InputGroupAddon addonType="append">
              <InputGroupText>image</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          </Col>
          <Col xs="6" sm="3" className="button">
            <Link to='/'><Button >Back</Button></Link>
          </Col>
          
        </Row><br /><br />
        <Row>
        <Col xs="12"sm="2"></Col>
          <Col xs="12"sm="4" className="imgDetail">
             <center>
            <div className="img conten-imgDetai" style={{ paddingLeft: '6px'}}>
              <a href="/detail/:id=${imageDetail}">
                <div style={{
                  /*imageDetail là biến so sách giá trị get về từ trang chủ để đổ tra trang chi tiết */
                 background: `url('${imageDetail}')`,
                    backgroundSize: 'cover',
                      height: '500px', 
                    }}>
                </div>
                <div class="txtDetail"><br /><br /><br /><br /><br /><br /><br /><br />
                     <center><h3>Free Download</h3></center>
                </div>
              </a>
          </div></center>
          </Col>
          <Col xs="12" sm="6" className="imgDetail">
            <Row className="row">
              <Col xs="12" sm="6">
                <center><ListGroup className="lits">
                  <ListGroupItem className="List-Group-Item "><h5>Related images</h5></ListGroupItem>
                </ListGroup></center>
              </Col>
            </Row><br />
            <Row className="row">
             {/* if(hits.tags === this.props.location.state.category){ */}
                {/* {colImg}   */}
             
           
            </Row><br />
            <Row className="row">
            {/* {colImg} */}
            </Row><br />
            <Row className="row">
            {/* {colImg} */}
            </Row><br />
            <Row className="row">
              <Col xs="12" sm="6"><center>
              <h7>We always bring your great pictures. </h7>
              <h7>You just use house-image </h7>
                    <h7>!!!</h7>
                </center>
              </Col>
            </Row>
          </Col>
        </Row><br /><p></p>
        <Row>
          <Col xs="12" sm="12" className="lits">
          <center><ListGroup>
            <ListGroupItem className="List-Group-Item "><h5>Some another pictures</h5></ListGroupItem>
          </ListGroup></center>
          </Col>
        </Row><p></p>
        <Row>
          <Col xs="12" sm="12">
              <Row>
              {colIamge}
              </Row><br />
          </Col>
        </Row><br />
        <Row> 
            <Col sm=" 12" md={{ size: 6, offset: 3 }} >
            </Col><br /><br />
            <Col sm=" 12" md={{ size: 6, offset: 3 }} >
            <center><h1>Join Image-House</h1><br />Image-House is a vibrant community of creatives, sharing copyright free images and videos. All contents are released under the Image-House License, 
            </center>
            </Col>
          </Row>
      </Container>
    );
  }
}