import React, { Fragment } from 'react'

function Footer() {
  return (
    <Fragment>
         <footer>
    {/*? Footer Start*/}
    <div className="footer-area section-bg" data-background="assets/img/gallery/section_bg02.png">
      <div className="container">
        <div className="footer-top footer-padding">
          <div className="row d-flex justify-content-between">
            <div className="col-xl-4 col-lg-4 col-md-5 col-sm-8">
              <div className="single-footer-caption mb-50">
                {/* logo */}
                <div className="footer-logo">
                  <a href="index.html"><img src="assets/img/logo/logo2.png" width={"120px"} alt="" /></a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-5 col-sm-6">
              <div className="single-footer-caption mb-50">
                <div className="footer-tittle">
                  <h4>Navigation</h4>
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Testimonial</a></li>
                    <li><a href="#">Contacts</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-5 col-sm-6">
              <div className="single-footer-caption mb-50">
                <div className="footer-tittle">
                  <h4>Useful Links</h4>
                  <ul>
                    <li><a href="#">Registration</a></li>
                    <li><a href="#">Login</a></li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Instagram */}
            <div className="col-xl-4 col-lg-4 col-md-5 col-sm-7">
              <div className="single-footer-caption mb-50">
                <div className="footer-tittle">
                  <h4>Instagram Feed</h4>
                </div>
                <div className="instagram-gellay">
                  <ul className="insta-feed">
                    <li><a href="#"><img src="assets/img/gallery/instagram1.png" alt /></a></li>
                    <li><a href="#"><img src="assets/img/gallery/instagram2.png" alt /></a></li>
                    <li><a href="#"><img src="assets/img/gallery/instagram3.png" alt /></a></li>
                    <li><a href="#"><img src="assets/img/gallery/instagram4.png" alt /></a></li>
                    <li><a href="#"><img src="assets/img/gallery/instagram5.png" alt /></a></li>
                    <li><a href="#"><img src="assets/img/gallery/instagram6.png" alt /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-xl-9 col-lg-8">
              <div className="footer-copy-right">
                <p>
                  Copyright © All rights reserved by Colorlib and make by nurdin dev
                  </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              {/* Footer Social */}
              <div className="footer-social f-right">
                <span>Follow Us</span>
                <a href="#"><i className="fab fa-twitter" /></a>
                <a href="#"><i className="fab fa-facebook-f" /></a>
                <a href="#"><i className="fas fa-globe" /></a>
                <a href="#"><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Footer End*/}
  </footer>
    </Fragment>
  )
}

export default Footer;