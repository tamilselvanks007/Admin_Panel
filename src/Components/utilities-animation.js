import React from "react";
import { Link } from "react-router-dom";

function UtilitiesAnimation() {
  return (
    <div className="container-fluid">
      {/* <!-- Page Heading --> */}
      <h1 className="h3 mb-1 text-gray-800">Animation Utilities</h1>

      {/* <!-- Content Row --> */}
      <div className="row">
        {/* <!-- Grow In Utility --> */}
        <div className="col-lg-6">
          <div className="card position-relative">
            <div className="card-header py-3 bg-secondary">
              <h6 className="m-0 font-weight-bold" style={{ color: "black" }}>
                Grow In Animation Utilty
              </h6>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <code>.animated--grow-in</code>
              </div>
              <div className="small mb-1">Navbar Dropdown Example:</div>
              <nav className="navbar navbar-expand navbar-light bg-light mb-4">
                <Link className="navbar-brand">Navbar</Link>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Dropdown
                    </Link>
                    <div
                      className="dropdown-menu dropdown-menu-right animated--grow-in"
                      aria-labelledby="navbarDropdown"
                    >
                      <Link className="dropdown-item">Action</Link>
                      <Link className="dropdown-item">Another action</Link>
                      <div className="dropdown-divider"></div>
                      <Link className="dropdown-item">Something else here</Link>
                    </div>
                  </li>
                </ul>
              </nav>
              <p className="mb-0 small">
                Note: This utility animates the CSS transform property, meaning
                it will override any existing transforms on an element being
                animated! In this theme, the grow in animation is only being
                used on dropdowns within the navbar.
              </p>
            </div>
          </div>
        </div>

        {/* <!-- Fade In Utility --> */}
        <div className="col-lg-6">
          <div className="card position-relative">
            <div className="card-header py-3 bg-secondary">
              <h6 className="m-0 font-weight-bold" style={{ color: "black" }}>
                Fade In Animation Utilty
              </h6>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <code>.animated--fade-in</code>
              </div>
              <div className="small mb-1">Navbar Dropdown Example:</div>
              <nav className="navbar navbar-expand navbar-light bg-light mb-4">
                <Link className="navbar-brand">Navbar</Link>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Dropdown
                    </Link>
                    <div
                      className="dropdown-menu dropdown-menu-right animated--fade-in"
                      aria-labelledby="navbarDropdown"
                    >
                      <Link className="dropdown-item">Action</Link>
                      <Link className="dropdown-item">Another action</Link>
                      <div className="dropdown-divider"></div>
                      <Link className="dropdown-item">Something else here</Link>
                    </div>
                  </li>
                </ul>
              </nav>
              <div className="small mb-1">Dropdown Button Example:</div>
              <div className="dropdown mb-4">
                <button
                  className="btn btn-primary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </button>
                <div
                  className="dropdown-menu animated--fade-in"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link className="dropdown-item">Action</Link>
                  <Link className="dropdown-item">Another action</Link>
                  <Link className="dropdown-item">Something else here</Link>
                </div>
              </div>
              <p className="mb-0 small">
                Note: This utility animates the CSS opacity property, meaning it
                will override any existing opacity on an element being animated!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UtilitiesAnimation;
