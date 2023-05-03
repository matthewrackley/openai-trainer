import React from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
export const Nav = () => {
  return (
      <div id="nav" className="hero-anime">
        <div className="navigation-wrap bg-light start-header start-style">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="navbar navbar-expand-md navbar-light">
                  <a className="navbar-brand" href="https://rackley.app/" target="_blank">
                    <img src="images/logo.png" alt="" />
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto py-4 py-md-0">
                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active">
                        <Link
                          id="home"
                          nonce=""
                          className="nav-link"
                          to="/"
                        >
                          Home
                        </Link>
                      </li>
                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                        <a
                          id="about"
                          nonce=""
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          About Us
                        </a>
                        <div className="dropdown-menu">
                          <li>
                            <Link
                              id="mission"
                              nonce=""
                              className="dropdown-item"
                              to="/mission"
                            >
                              Our Mission
                            </Link>
                          </li>
                          <li>
                            <Link
                              id="values"
                              nonce=""
                              className="dropdown-item"
                              to="/values"
                            >
                              Our Values
                            </Link>
                          </li>
                          <li>
                            <Link
                              id="support"
                              nonce=""
                              className="dropdown-item"
                              to="/support"
                            >
                              Get Help
                            </Link>
                          </li>
                          <li>
                            <Link
                              id="creators"
                              nonce=""
                              className="dropdown-item"
                              to="/creators"
                            >
                              Model Support
                            </Link>
                          </li></div>
                      </li>
                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                        <a
                          id="account"
                          nonce=""
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          My Account
                        </a>
                        <div className="dropdown-menu">
                          <li>
                            <Link
                              id="profile"
                              nonce=""
                              className="dropdown-item"
                              to="/profile"
                            >
                              My Profile
                            </Link>
                          </li>
                          <li>
                            <Link
                              id="forums"
                              nonce=""
                              className="dropdown-item"
                              to="/forums"
                            >
                              Community
                            </Link>
                          </li>
                          <li>
                            <Link
                              id="modeling"
                              nonce=""
                              className="dropdown-item"
                              to="/modeling"
                            >
                              Modeling
                            </Link>
                          </li>
                          <li>
                            <Link
                              id="settings"
                              nonce=""
                              className="dropdown-item"
                              to="/settings"
                            >
                              Settings
                            </Link>
                          </li></div>
                      </li>
                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                        <a
                          id="models"
                          nonce=""
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Models
                        </a>
                        <div className="dropdown-menu">
                          <li>
                            <Link
                              id="women"
                              nonce=""
                              className="dropdown-item"
                              to="/women"
                            >
                              Women
                            </Link>
                          </li>
                          <li>
                            <Link
                              id="men"
                              nonce=""
                              className="dropdown-item"
                              to="/men"
                            >
                              Men
                            </Link>
                          </li>
                          <li>
                            <Link
                              id="trans"
                              nonce=""
                              className="dropdown-item"
                              to="/trans"
                            >
                              Trans
                            </Link>
                          </li></div>
                      </li>
                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                        <a
                          id="services"
                          nonce=""
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Services
                        </a>
                        <div className="dropdown-menu">
                          <li>
                            <Link
                              id="photos"
                              nonce=""
                              className="dropdown-item"
                              to="/photos"
                            >
                              Photos
                            </Link>
                          </li>
                          <li>
                            <Link
                              id="videos"
                              nonce=""
                              className="dropdown-item"
                              to="/videos"
                            >
                              Videos
                            </Link>
                          </li>
                          <li>
                            <Link
                              id="subscriptions"
                              nonce=""
                              className="dropdown-item"
                              to="/subscriptions"
                            >
                              Subscriptions
                            </Link>
                          </li>
                          <li>
                            <Link
                              id="camming"
                              nonce=""
                              className="dropdown-item"
                              to="/camming"
                            >
                              Live Cams
                            </Link>
                          </li>
                          <li>
                            <Link
                              id="customs"
                              nonce=""
                              className="dropdown-item"
                              to="/customs"
                            >
                              Custom Content
                            </Link>
                          </li></div>
                      </li>
                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                        <Link
                          id="store"
                          nonce=""
                          className="nav-link"
                          to="/store"
                        >
                          Shop
                        </Link>
                      </li>
                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                        <Link
                          id="contact"
                          nonce=""
                          className="nav-link"
                          to="/contact"
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
