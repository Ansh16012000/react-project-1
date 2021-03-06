import React from "react";
import "./nav.css";
import { FaFingerprint } from "react-icons/fa";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xs-6">
            <div className="row one">
              <ul className="navbar-links ">

              <div className="col-md-4 col-xs-4">
              <li className="nav-item">
                  
                <FaFingerprint className="finger" />
                </li>
              </div>
              <div className="col-md-8 col-xs-8">
              <li className="nav-item">
                <h4 className="name">Ansh</h4>
                </li>
              </div>
              </ul>
            </div>
            </div>
          <div className="col-md-6 col-xs-6 ">
            <div className="row">
              <div className="col-md-10 col-xs-10">
              <ul  className="links navbar-links ">
              <li className="nav-item liitem">
                <a className="item navhome">Home</a>
              </li>
              <li className="nav-item liitem">
                <a className="item navproduct ">Product</a>
              </li>
              <li className="nav-item liitem">
                <a className="item navservice">Services</a>
              </li>
            </ul>
              </div>
              <div className="col-xl-2 col-xs-2">
                <ul className="navbar-links ">
              <li className="navsignup"><button className="btn bg-transparent signup">SIGNUP</button></li>
                </ul>
              </div>
            </div>

          

          </div>
        </div>
      </div>
    </nav>
  );
};
