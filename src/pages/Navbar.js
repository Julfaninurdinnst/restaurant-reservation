import React, { Fragment } from 'react';

function Navbar() {
  return (
<Fragment>
<div className="header-area header-transparent">
      <div className="main-header  header-sticky">
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* Logo */}
            <div className="col-xl-2 col-lg-2 col-md-1">
              <div className="logo">
                <a href="index.html"><img src="assets/img/logo/logo2.png" width={"104px"}alt="" /></a>
              </div>
            </div>
            <div className="col-xl-10 col-lg-10 col-md-10">
              <div className="menu-main d-flex align-items-center justify-content-end">
                {/* Main-menu */}
                <div className="main-menu f-right d-none d-lg-block">
                  <nav> 
                    <ul id="navigation">
                      <li><a href={"#home"}>Home</a><link to ></link> </li>
                      <li><a href= {"#about"}>About</a></li>
                      <li><a href={"#menu"}>Menu</a></li>
                      <li><a href={"#contact"}>Contact</a></li>
                    </ul>
                  </nav>
                </div>
                <div className="header-right-btn f-right d-none d-lg-block ml-20">
                  <a href="contact.html" className="border-btn header-btn">Order Online</a>
                </div>
              </div>
            </div>   
            {/* Mobile Menu */}
            <div className="col-12">
              <div className="mobile_menu d-block d-lg-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
</Fragment>
  )
}

export default Navbar
