import React from 'react';
import {Container, Row, Col,Button,Dropdown, DropdownToggle} from 'reactstrap';
import {} from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { ListGroup, ListGroupItem} from 'reactstrap';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import content from './content';
import { saveAs } from 'file-saver';
import {faSearch, faAngleDoubleDown} from '@fortawesome/free-solid-svg-icons';
const key = '12929393-7c6c13aaef3f6653c1c44878f'
/******** địa chỉ api của hình ảnh trong trang web https://pixabay.com/api/docs/*********/
const API='https://pixabay.com/api/';
const DEFAULT_QUERY = 'redux';

export default class Detail extends React.Component{
  constructor(props){
    super(props);
    this.state={
      hits:[],
      hit: null,
      search: '',
    };
  }
  fetchImagedetail(){
    let id = this.props.match && this.props.match.params ? this.props.match.params.id : '';
    if (id) {
      fetch(API + '?key=' + key + '&id=' + id)
      .then(response => response.json())
      .then(data => {
        if (data && data.hits && data.hits[0]) {
          console.log(data)
         /*split là để cát giá trị tags của đối tượng hit[0]-->[0] sau cùng là để lấy giá trị cắt về */
          let relative = data.hits[0].tags.split(',')[0];
          console.log(relative); 
          this.FetchRelatedimages(relative);/*truyền vào hàm search*/
          this.setState({
            hit: data.hits[0],
          })
        }
      });
    }
  }
  imageDownload(img){
    saveAs(img, "image.jpg");
  }

  /*text nhận giá trị từ relative để saerch những hình ảnh liên quan với chủ đề đầu khi dduocj lấy từ data.hits[0].tags.split(',') */
  FetchRelatedimages(text){
    fetch(API + '?key=' + key + '&q='+text)
    .then(response => response.json())
    .then(data => {
      /*******để kiểm tra dữ liệu(data=>vào trong kiểm tra=>console) lọc đã đúng chưa*********/
      console.log(data);
      this.setState({
        hits: data.hits,
      })
    });
  }
  componentDidMount(){
    this.fetchImagedetail()
    this.FetchRelatedimages()
  }
 
  render(){
   /*.slice(0,9)= limit lấy tối đa 9 ảnh từ vị trí là 0 */
    let colImg = this.state.hits.slice(0,9).map((image, index) => (
      <Col xs="3" sm="4" className="relatedImg"  key={index}>
        <div style={{
          background: `url('${image.largeImageURL}')`,
            backgroundSize: 'cover',
              height: '100px', 
            }}>
        </div>
      </Col>
   ))
    
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
    console.log(455665565, 'this.state.search')
    return(
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
            <InputGroupText ><FontAwesomeIcon icon={faSearch} style={{ color: 'black' }}  size="lg"/></InputGroupText> 
            </InputGroupAddon>
            <Input placeholder="What is the photo you want ?" type="search" name="search"  /> 
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
          <Col xs="12"sm="1"></Col>
            <Col xs="12"sm="5" className="imgDetail">
            <center>
            <div className="img conten-imgDetai" style={{ paddingLeft: '6px'}}>
            <Link to={'/detail/:id'}>
                  <div style={{
                    /*${this.state.hit && this.state.hit.largeImageURL điều kiện tồn tại *//**(?) là để hỏi có hay ko *//**this.state.hit.largeImageURL : ''}')`, nếu đáp ứng if trên thì hiện thị */
                    background: `url('${this.state.hit && this.state.hit.largeImageURL ? this.state.hit.largeImageURL : ''}')`,
                      backgroundSize: 'cover',
                        height: '500px', 
                  }}>
                  </div>
                  <div class="txtDetail"><br /><br /><br /><br /><br /><br />
                      <center><h3>Free Download</h3>
                      Click here<p>
                      <FontAwesomeIcon icon={faAngleDoubleDown} sile="9x"/></p>
                      {/* {(()=> this.state.hit && console.log(this.state.hit.largeImageURL))()} */}
                        <Button onClick={() => this.imageDownload(this.state.hit.largeImageURL)}>
                          Download
                        </Button>
                      </center>
                  </div>
                </Link>
            </div>
            </center>
            </Col>
            <Col xs="12" sm="5" className="imgDetail">
              <Row className="row">
                <Col xs="12" sm="11">
                  <center><ListGroup className="lits">
                    <ListGroupItem className="List-Group-Item m "><h5>Related images</h5></ListGroupItem>
                  </ListGroup></center>
                </Col>
              </Row>
              <Row className="row">
                  {colImg}  
              </Row><br />
              <Row className="row textDetail">
                <Col xs="12" sm="11"><center>
                  <h7>There are images you can know and they can have you have some choice</h7><br />
                <h7>We always bring your great pictures.</h7><br />
                <h8>You just use house-image </h8>
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