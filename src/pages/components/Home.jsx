import React from 'react';
import { Form } from './Form.jsx';
export const Home = () => {
  return (
    <div className="row" id="centerrow">
      <div className="sidebar">
        <div id="sidebar-content" className="d-flex flex-column flex-shrink-0 bg-light">
          <div className="style-box col">
            <div className="style-border col"></div>
          </div>
          <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
            <li>
              <button type="button" className="btn btn-primary position-relative">
                Profile</button>
            </li>
            <li>
              <button type="button" className="btn btn-primary position-relative">
                Shop!</button>
            </li>
            <li>
              <button type="button" className="btn btn-primary position-relative" />
              Inbox
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                1
                <span className="visually-hidden">unread messages</span>
              </span>
            </li><br />
            <li>
              <button type="button" className="btn btn-primary position-relative">
                <svg className="bi" width="24" height="24" role="img" aria-label="Customers">
                  <img src="./lib/images/key.svg" alt="OpenAI API Key" />
                </svg>
              </button>
            </li>
            <li>
              <button id="resizeReset" type="button" className="btn btn-warning position-relative">
                Reset!</button>
            </li>
          </ul>
          <div className="dropdown border-top">
            <a href="#" className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="./lib/images/wrench-adjustable.svg" alt="mdo" width="24" height="24" className="rounded-circle" />
            </a>
            <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
              <li>
                <a className="dropdown-item" href="#">New project...</a>
              </li>
              <li>
                <a className="dropdown-item" href="#">Settings</a>
              </li>
              <li>
                <a className="dropdown-item" href="#">Profile</a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">Sign out</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="column" id="chatcolumn">
        <Form />
      </div>
      <footer className="status-bar">
        <div className="style-box row">
          <svg className="bi" width="24" height="24" role="img" viewBox="0 0 100 100">
            <img className="dashed-line" src="./lib/images/dashedLine.svg" alt="" />
          </svg>
        </div>
        <div className="status-bar">
          <p className="status-bar">Made with ❤️ by <a href="https://rackley.app">Matthew Rackley</a></p>
        </div>
      </footer>
    </div>
  );
};
