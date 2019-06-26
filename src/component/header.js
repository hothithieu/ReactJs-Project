import React,{Component}from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

export default class Header extends Component{
  // watchvideo(){
	//  	window.location="http://hinhanhdephd.com/wp-content/uploads/2016/01/nhung-hinh-anh-dep-cua-nhung-ly-kem-mat-lanh-11.jpg";
  // }
  render(){ 
		return (

			<section> 
			  {/* <div className="load" />  */}

			  <header>
				<a href="true" className="logo"><img alt="Logo" src="https://www.freelogodesign.org/file/app/client/thumb/be3e900d-eb2b-45a7-b567-1d365300558b_200x200.png?1560927344917" style={{width: '80px', height: '80px'}} /></a>
				<a className="toggle" href >Menu</a>
				<ul className="active">
				  <li> <Link to="/ " className="nav-link"> Home </Link></li> 
				  <li><a href="true">Introduce</a></li>
				  <li><a href="true">Contact</a></li>
				  <li><a href>About Us</a></li>
				  <li><a href>Help</a></li>
				</ul>
			  </header>

				
			  <div className="content">
					
				
			
          {/* <div id="myCarousel" className="carousel slide" data-ride="carousel">
      
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>

            <div className="carousel-inner">

              <div className="item active">
              <img alt="Logo" src="https://images.unsplash.com/photo-1560146491-308b0f69a52a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" style={{width: '100%'}} />
                <div className="carousel-caption">
                  <h3>Los Angeles</h3>
                  <p>LA is always so much fun!</p>
                </div>
              </div>

              <div className="item">
              <img alt="Logo" src="https://images.unsplash.com/photo-1560146491-308b0f69a52a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" style={{width: '100%'}} />
                <div className="carousel-caption">
                  <h3>Chicago</h3>
                  <p>Thank you, Chicago!</p>
                </div>
              </div>
          
              <div className="item">
              <img alt="Logo" src="https://images.unsplash.com/photo-1560146491-308b0f69a52a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" style={{width: '100%'}} />
                <div className="carousel-caption">
                  <h3>New York</h3>
                  <p>We love the Big Apple!</p>
                </div>
              </div>

              <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right"></span>
                <span className="sr-only">Next</span>
              </a>
          </div>
      </div>
 
 */}


					
				<div className="principal"style={{color: 'black'}}> 
						<div className="col slogan">
								<center><h2>IMAGE HOUSE</h2>
									<h3>The internet’s source of freely useable images</h3>
									<h4>Powered by creators everywhere</h4></center><br></br>
						</div>
					<div className="row align-items-center">
							<div className="col search-bar">
								<input type="text" className="searchTerm" placeholder="What are you looking for?"/>
								<button type="submit" className="searchButton" style={{ backgroundColor: 'darkgray' }}><FontAwesomeIcon icon={faSearch} style={{ color: 'black' }} size="lg"/></button>
							</div>
					</div>
				</div>
				<div className="buttom">
				  <a href className="btn" onClick={this.watchVideo}></a>
				</div>
				
			  </div>
			</section>
		  );
  	}
}