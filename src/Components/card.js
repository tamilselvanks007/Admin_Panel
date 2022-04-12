import React from "react";
import { Link } from "react-router-dom";

function Card() {
  return (
    <div class="container-fluid">
      {/* <!-- Page Heading --> */}
      <h1 className="h3 mb-4 text-gray-800">Cards</h1>
      <div className="row">
        <div className="col-lg-6">
          {/* <!-- Default Card Example --> */}
          <div className="card mb-4">
            <div
              className="card-header bg-secondary"
              style={{ color: "black" }}
            >
              Default Card Example
            </div>
            <div className="card-body">
              This card uses Bootstrap's default styling with no utility
              classNamees added. Global styles are the only things modifying the
              look and feel of this default card example.
            </div>
          </div>
          {/* <!-- Basic Card Example --> */}
          <div className="card shadow mb-4">
            <div className="card-header py-3 bg-secondary">
              <h6 className="m-0 font-weight-bold" style={{ color: "black" }}>
                Basic Card Example
              </h6>
            </div>
            <div className="card-body">
              The styling for this basic card example is created by using
              default Bootstrap utility classNamees. By using utility
              classNamees, the style of the card component can be easily
              modified with no need for any custom CSS!
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          {/* <!-- Dropdown Card Example --> */}
          <div className="card shadow mb-4">
            {/* <!-- Card Header - Dropdown --> */}
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between bg-secondary">
              <h6 className="m-0 font-weight-bold" style={{ color: "black" }}>
                Dropdown Card Example
              </h6>
              <div className="dropdown no-arrow">
                <Link
                  className="dropdown-toggle"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </Link>
                <div
                  className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                  aria-labelledby="dropdownMenuLink"
                >
                  <div className="dropdown-header">Dropdown Header:</div>
                  <Link className="dropdown-item">Action</Link>
                  <Link className="dropdown-item">Another action</Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item">Something else here</Link>
                </div>
              </div>
            </div>
            {/* <!-- Card Body --> */}
            <div className="card-body">
              Dropdown menus can be placed in the card header in order to extend
              the functionality of a basic card. In this dropdown card example,
              the Font Awesome vertical ellipsis icon in the card header can be
              clicked on in order to toggle a dropdown menu.
            </div>
          </div>
          {/* <!-- Collapsable Card Example --> */}
          <div className="card shadow mb-4">
            {/* <!-- Card Header - Accordion --> */}
            <Link
              className="d-block card-header py-3 bg-secondary"
              data-toggle="collapse"
              role="button"
              aria-expanded="true"
              aria-controls="collapseCardExample"
            >
              <h6 className="m-0 font-weight-bold" style={{ color: "black" }}>
                Collapsable Card Example
              </h6>
            </Link>
            {/* <!-- Card Content - Collapse --> */}
            <div className="collapse show" id="collapseCardExample">
              <div className="card-body">
                This is a collapsable card example using Bootstrap's built in
                collapse functionality.{" "}
                <strong>Click on the card header</strong> to see the card body
                collapse and expand!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
