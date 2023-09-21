// src/components/LandingPage.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './LandingPage.css'; // File CSS tambahan
import restaurantImage from '../images/images1.avif'; // Impor gambar
import menuImage1 from '../images/images2.avif'; // Impor gambar menu
import menuImage2 from '../images/images3.avif'; // Impor gambar menu
import menuImage3 from '../images/images4.avif'; // Impor gambar menu
import menuImage4 from '../images/images5.avif'; // Impor gambar menu
// Impor gambar menu lainnya

function LandingPage() {
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: 'Menu 1',
      price: '$10',
      image: menuImage1,
      checked: false,
    },
    {
      id: 2,
      name: 'Menu 2',
      price: '$12',
      image: menuImage2,
      checked: false,
    },
    {
      id: 3,
      name: 'Menu 3',
      price: '$15',
      image: menuImage3,
      checked: false,
    },
    {
      id: 4,
      name: 'Menu 4',
      price: '$14',
      image: menuImage4,
      checked: false,
    },
    // Tambahkan menu lainnya dengan URL gambar yang sesuai
  ]);

  const handleCheckboxChange = (id) => {
    setMenuItems((prevMenuItems) =>
      prevMenuItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    
    <div className="landing-page">
<header className="header">
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <h1 className="logo">Little Lemon</h1>
      </div>
      <div className="col-md-8">
        {/* Navbar */}
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#home" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#product" className="nav-link">Product</a>
            </li>
            <li className="nav-item">
              <a href="#about-us" className="nav-link">About Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <h1 className="logo">Little Lemon</h1>
      </div>
      <div className="col-md-8">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="#home" className="nav-link">Home</a>
              </li>
              <li className="nav-item">
                <a href="#product" className="nav-link">Product</a>
              </li>
              <li className="nav-item">
                <a href="#about-us" className="nav-link">About Us</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</header>

      <div className="container mt-5">
        <div className="row mb-4">
          {/* Tampilkan daftar menu makanan dalam bentuk card */}
          {menuItems.map((item) => (
            <div className="col-md-3" key={item.id}>
              <div className="card">
                <img src={item.image} alt={item.name} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">Price: {item.price}</p>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id={`menu${item.id}`}
                      checked={item.checked}
                      onChange={() => handleCheckboxChange(item.id)}
                    />
                    <label className="form-check-label" htmlFor={`menu${item.id}`}>
                      Select
                    </label>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-md-6 offset-md-3 reservation-form">
            <h2>Reservation Form</h2>
            <form>
              <div className="mb-3">
                <input type="text" className="form-control" id="name" placeholder="Your Name" />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" id="email" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <input type="date" className="form-control" id="date" />
              </div>
              <div className="mb-3">
                <input type="time" className="form-control" id="time" />
              </div>
              <button type="submit" className="btn btn-primary">Submit Reservation</button>
            </form>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p>&copy; 2023 Little Lemon Restaurant. All rights reserved.</p>
              <p>Address: 123 Main Street, City, Country</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
