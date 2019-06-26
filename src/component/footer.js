import React,{Component}from 'react';

export default class Footer extends Component{
   render(){
    return(
      <div className="w-100"> 
      <footer className="ct-footer">
          <div className="container">
              <form name="contentForm" encType="multipart/form-data" method="post" action="true">
                  <div className="ct-footer-pre text-center-lg">
                  <div className="inner">
                      <span>WELCOME TO IMAGE HOUSE</span>
                        <h3>The internet’s source of freely useable images</h3>
                        <h4>Powered by creators everywhere</h4><br></br>
                  </div>
                  <div className="inner">
                      <div className="form-group">
                      <input  id="nl_email" className="validate[required]" placeholder="Enter your email address" type="text" defaultValue /> <label htmlFor="nl_email" className="sr-only">Email Address</label> <button type="submit" className="btn btn-motive">Join</button>
                      </div>
                  </div>
                  </div>
              </form>
               
              <div className="ct-footer-meta text-center-sm">
                  <div className="row">
                  <div className="col-sm-6 col-md-2 logo-footer">
                      <img alt="logo" src="https://www.freelogodesign.org/file/app/client/thumb/be3e900d-eb2b-45a7-b567-1d365300558b_200x200.png?1560927344917" />
                  </div>
                  <div className="col-sm-6 col-md-3">
                  <address>
                     <span>Create imge website <br /></span>31 Tran Phu Street<br />
                     Son Tra, Da Nang city<br />
                     <span>Phone: <a href="tel:5556855222">(555) 555-8899</a></span>
                     </address>
                  </div>
                  <div className="col-sm-6 col-md-2 ct-u-paddingTop10">
                      <a href="true"><img alt="app store" src="https://www.solodev.com/assets/footer/appstore.png" size="lg" /></a>
                  </div>
                  <div className="col-sm-6 col-md-2 ct-u-paddingTop10">
                      <a href="true" ><img alt="google play store" src="https://www.solodev.com/assets/footer/androidstore.png" size="lg" /></a>
                  </div>
                  <div className="col-sm-6 col-md-3">
                      <ul className="ct-socials list-unstyled list-inline">
                      <li>
                          <a href="true" ><img alt="facebook" src="https://www.solodev.com/assets/footer/facebook-white.png"  size="lg"/></a>
                      </li>
                      <li>
                          <a href="true"><img alt="twitter" src="https://www.solodev.com/assets/footer/twitter-white.png" size="lg" /></a>
                      </li>
                      <li>
                          <a href="true" ><img alt="youtube" src="https://www.solodev.com/assets/footer/youtube-white.png" size="lg" /></a>
                      </li>
                      <li>
                          <a href="true"  ><img alt="instagram" src="https://www.solodev.com/assets/footer/instagram-white.png"  size="lg"/></a>
                      </li>
                      <li>
                          <a href="true"  ><img alt="pinterest" src="https://www.solodev.com/assets/footer/pinterest-white.png" size="fa-5x" /></a>
                      </li>
                      </ul>
                  </div>
                  </div>
              </div>
              </div>
              <div className="ct-footer-post">
              <div className="container">
                  <div className="inner-left">
                  <ul>
                      <li>
                      <a href="true">FAQ</a>
                      </li>
                      <li>
                      <a href="true">News</a>
                      </li>
                      <li>
                      <a href="true">Contact Us</a>
                      </li>
                  </ul>
                  </div>
                  <div className="inner-right">
                  <p>Emplement by © Hồ Thị Thiều</p>
                 <p>Supporter by <a href="">Ngyễn Phong</a></p>
                  </div>
              </div>
      </div>
      </footer>
      </div>  
     );
   }
}