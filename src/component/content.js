import React,{Component} from 'react';
import Header from './header';
import Footer from './footer';
// import Slider from './slider';
class Content extends Component{

  render(){
    return(
      
      <div>
      {/* <Slider /> */}
      <Header />
      <div className = "row" >
          <div className="row menu-bottom">
            const categories =["Icon","Animals","Car", "Flower","Sun","Food & Drink","People","Experimental","Travel","Current-Event","Nature","Film","Health","Arts & Culture"];
            const listcate = categories.map((categories)=><li>{categories}</li>);
            <ul>{listcate}</ul>
              {/* <ul>
                <li><a href="#">{Icon}</a></li>
                <li><a href="#">{Animals}</a></li>
                <li><a href="#">{Car}</a></li>
                <li><a href="#">{Flower}</a></li>
                <li><a href="#">{Sun}</a></li>
                <li><a href="#">{Food & Drink}</a></li>
                <li><a href="#">{People}</a></li>
                <li><a href="#">{Experimental}</a></li>
                <li><a href="#">{Travel}</a></li>
                <li><a href="#">{Current-Events}</a></li>
                <li><a href="#">{Nature}</a></li>
                <li><a href="#">{Film}</a></li>
                <li><a href="#">{Health}</a></li>
                <li><a href="#">{Arts & Culture}</a></li>
              </ul> */}
          </div>
      </div> 
      {/* <div className = "w-100" > */}
          {/* <div className="row">
            <div className = "col-xs-4 .col-md-4">
                  <div className="img content-image">                
                    <a href="#">
                      <div style={{
                        background: " url('https://images.unsplash.com/photo-1560146491-308b0f69a52a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80')",
                        backgroundSize: 'cover',
                        height: '397px',
                        width:'500px',   
                        }}></div>
                        <div class="txt">
                          <h3>AMAZING CAPTION</h3>
                          <p>Whatever It Is - Always Awesome</p>
                        </div>
                    </a>
                </div> 
            </div> 
            <div className = "col-xs-4 .col-md-4">
                <div className="img content-image">                
                    <a href="#">
                      <div style={{
                        background: " url('https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')",
                        backgroundSize: 'cover',
                        height: '397px',
                        width:'500px', 
                        }}></div>
                        <div class="txt">
                          <h3>AMAZING CAPTION</h3>
                          <p>Whatever It Is - Always Awesome</p>
                        </div> 
                    </a>
                </div> 
            </div> 

            <div className = "col-xs-4 .col-md-4">
                <div className="img content-image">                
                    <a href="#">
                      <div style={{
                        background: " url('https://images.unsplash.com/photo-1553531768-299620b2f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')",
                        backgroundSize: 'cover',
                        height: '397px',
                        width:'500px', 
                        }}></div>
                        <div class="txt">
                          <h3>AMAZING CAPTION</h3>
                          <p>Whatever It Is - Always Awesome</p>
                        </div>
                    </a>
                </div> 
            </div>
        </div>  */}

        {/* <div className="row">
            <div className = "col-xs-4 .col-md-4">
                  <div className="img content-image">                
                    <a href="#">
                      <div style={{
                        background: " url('https://images.unsplash.com/photo-1560146491-308b0f69a52a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80')",
                        backgroundSize: 'cover',
                        height: '397px',
                        width:'500px',   
                        }}></div>
                        <div class="txt">
                          <h3>AMAZING CAPTION</h3>
                          <p>Whatever It Is - Always Awesome</p>
                        </div>
                    </a>
                </div> 
            </div> 
            <div className = "col-xs-4 .col-md-4">
                <div className="img content-image">                
                    <a href="#">
                      <div style={{
                        background: " url('https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')",
                        backgroundSize: 'cover',
                        height: '397px',
                        width:'500px', 
                        }}></div>
                        <div class="txt">
                          <h3>AMAZING CAPTION</h3>
                          <p>Whatever It Is - Always Awesome</p>
                        </div> 
                    </a>
                </div> 
            </div> 

            <div className = "col-xs-4 .col-md-4">
                <div className="img content-image">                
                    <a href="#">
                      <div style={{
                        background: " url('https://images.unsplash.com/photo-1553531768-299620b2f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')",
                        backgroundSize: 'cover',
                        height: '397px',
                        width:'500px', 
                        }}></div>
                        <div class="txt">
                          <h3>AMAZING CAPTION</h3>
                          <p>Whatever It Is - Always Awesome</p>
                      </div>
                    </a>
                </div> 
            </div>
        </div>  */}

        <div className="row">
            <div className = "col-xs-4 .col-md-4">
                  <div className="img content-image">                
                    <a href="#">
                      <div style={{
                        background: " url('https://images.unsplash.com/photo-1560146491-308b0f69a52a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80')",
                        backgroundSize: 'cover',
                        height: '397px',
                        width:'500px',   
                        }}></div>
                        <div class="txt">
                          <h3>AMAZING CAPTION</h3>
                          <p>Whatever It Is - Always Awesome</p>
                        </div>
                    </a>
                </div> 
            </div> 
            {/* <div className = "col-xs-4 .col-md-4">
                <div className="img content-image">                
                    <a href="#">
                      <div style={{
                        background: " url('https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')",
                        backgroundSize: 'cover',
                        height: '397px',
                        width:'500px', 
                        }}></div>
                        <div class="txt">
                          <h3>AMAZING CAPTION</h3>
                          <p>Whatever It Is - Always Awesome</p>
                      </div> 
                    </a>
                </div> 
            </div> 

            <div className = "col-xs-4 .col-md-4">
                <div className="img content-image">                
                    <a href="#">
                      <div style={{
                        background: " url('https://images.unsplash.com/photo-1553531768-299620b2f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')",
                        backgroundSize: 'cover',
                        height: '397px',
                        width:'500px', 
                        }}></div>
                        <div class="txt">
                          <h3>AMAZING CAPTION</h3>
                          <p>Whatever It Is - Always Awesome</p>
                        </div>
                    </a>
                </div> 
            </div> */}
        </div> 
      {/* </div> */}
        
      <Footer />
    </div>
      
    );
  }
}
export default Content;