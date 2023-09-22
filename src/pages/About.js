import React, { Fragment } from 'react'
import Navbar from './Navbar';
function About() {
  return (
    <Fragment>
<div>
 
  <header>
    {/*? Header Start */}
    <Navbar/>
    {/* Header End */}
  </header>
  <main>
    
    {/*? About-2 Area Start */}
    <div className="about-area2 section-padding30" id='about'>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            {/* about-img */}
            <div className="about-img ">
              <img src="assets/img/gallery/about2.png" alt />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="about-caption mb-50">
              {/* Section Tittle */}
              <div className="section-tittle mb-35">
                <span>About Our Restaurant</span>
                <h2>We Provide Good Food  For Your Family!</h2>
              </div>
              <p className="pera-top">Ut enim acgsd minim veniam, quxcis nostrud exercitation ullamco laboris nisi ufsit aliquip ex ea commodo consequat is aute irure m, quis nostrud exer</p>
              <p className="mb-65 pera-bottom">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected our, or randomised words which don't look even slightly believab If you are going to use a passage.</p>
              <a href="about.html" className="border-btn">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* About-2 Area End */}
<div>
  {/* Reservation Start */}
  <div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
    <div className="row g-0">
      <div className="bg-dark d-flex align-items-center">
        <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
          <h5 className="section-title ff-secondary text-start text-primary fw-normal">Reservation</h5>
          <h1 className="text-white mb-4">Book A Table Online</h1>
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-floating">
                  <input type="text" className="form-control" id="name" placeholder="Your Name" />
                  <label htmlFor="name">Your Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input type="email" className="form-control" id="email" placeholder="Your Email" />
                  <label htmlFor="email">Your Email</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating date" id="date3" data-target-input="nearest">
                  <input type="text" className="form-control datetimepicker-input" id="datetime" placeholder="Date & Time" data-target="#date3" data-toggle="datetimepicker" />
                  <label htmlFor="datetime">Date &amp; Time</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <select className="form-select" id="select1">
                    <option value={1}>People 1</option>
                    <option value={2}>People 2</option>
                    <option value={3}>People 3</option>
                  </select>
                  <label htmlFor="select1">No Of People</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea className="form-control" placeholder="Special Request" id="message" style={{height: 100}} defaultValue={""} />
                  <label htmlFor="message">Special Request</label>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100 py-3" type="submit">Book Now</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade" id="videoModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content rounded-0">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Youtube Video</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          {/* 16:9 aspect ratio */}
          <div className="ratio ratio-16x9">
            <iframe className="embed-responsive-item" src id="video" allowFullScreen allowscriptaccess="always" allow="autoplay" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Reservation Start */}
</div>


    {/*? Our Services Start */}
    <div className="our-services section-padding30">
      <div className="container">
        <div className="row justify-content-sm-center">
          <div className="cl-xl-7 col-lg-8 col-md-10">
            {/* Section Tittle */}
            <div className="section-tittle text-center mb-70">
              <span>Servicees We Offer</span>
              <h2>Our Best Services</h2>
            </div> 
          </div>
        </div>
        <div className="row">
          <div className=" col-lg-4 col-md-6 col-sm-6">
            <div className="single-services text-center mb-30">
              <div className="services-ion">
                <span className="flaticon-restaurant" />
              </div>
              <div className="services-cap">
                <h5><a href="#">Best Chef</a></h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
              </div>
            </div>
          </div>
          <div className=" col-lg-4 col-md-6 col-sm-6">
            <div className="single-services active text-center mb-30">
              <div className="services-ion">
                <span className="flaticon-tools-and-utensils-1" />
              </div>
              <div className="services-cap">
                <h5><a href="#">Quality Food</a></h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
              </div>
            </div>
          </div>
          <div className=" col-lg-4 col-md-6 col-sm-6">
            <div className="single-services text-center mb-30">
              <div className="services-ion">
                <span className="flaticon-restaurant" />
              </div>
              <div className="services-cap">
                <h5><a href="#">Perfect Cook</a></h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Our Services End */}
    {/*? About-3 Start */}
    <div className="about-area3 pt-180 pb-170 section-bg" data-background="assets/img/gallery/section_bg03.png">
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-xl-6 col-lg-6 col-md-9 col-sm-11">
            {/* Section Tittle */}
            <div className="section-tittle section-tittle2 mb-40">
              <span>About Our Restaurant</span>
              <h2>We Provide Good Food For Your Family!</h2>
              <p>Ut enim acgsd minim veniam, quxcis nostrud exercitation ullamco laboris nisi ufsit aliquip ex ea commodo consequat is aute irure m, quis nostrud exer.</p>
            </div> 
            {/*Hero form */}
            <form action="#" className="search-box">
              <div className="input-form">
                <input type="text" placeholder="Your Email" />
              </div>
              <div className="search-form">
                <button>Subscribe</button>
              </div>	
            </form>	
          </div>
        </div>
      </div>
    </div>
    {/* About-3 End */}
    {/*? Blog Area Start */}
    <section className="blogs-area section-padding30">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            {/* Section Tittle */}
            <div className="section-tittle text-center mb-70">
              <span>Our New Blog News</span>
              <h2>Our Recnet News</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-blogs mb-100">
              <div className="blog-img">
                <img src="assets/img/gallery/blog1.png" alt />
              </div>
              <div className="blog-cap">
                <span className="color1">23 Dec, 2020</span>
                <h4><a href="blog_details.html">Addiction When Food Plate Becomes</a></h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-blogs mb-100">
              <div className="blog-img">
                <img src="assets/img/gallery/blog2.png" alt />
              </div>
              <div className="blog-cap">
                <span className="color1">23 Dec, 2020</span>
                <h4><a href="blog_details.html">Addiction When Food Plate Becomes</a></h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-blogs mb-100">
              <div className="blog-img">
                <img src="assets/img/gallery/blog3.png" alt />
              </div>
              <div className="blog-cap">
                <span className="color1">23 Dec, 2020</span>
                <h4><a href="blog_details.html">Addiction When Food Plate Becomes</a></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Blog Area End */}
  </main>
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
  {/* Scroll Up */}
  <div id="back-top">
    <a title="Go to Top" href="#"> <i className="fas fa-level-up-alt" /></a>
  </div>
</div>
    </Fragment>
  )
}

export default About;