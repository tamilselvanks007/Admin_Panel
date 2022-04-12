// eslint-disable-next-line
import { Link } from "react-router-dom";
import React from "react";
import DisplayDashboardData from "./DisplayDashboardData";
import ProjectProgress from "./ProjectProgress";
import ColorSystem from "./ColorSystem";
import DoughnutChart from "./doughnutchart";
import Linechart from "./linechart";
function AdminDashboard() {
  const datas = [
    {
      Earnings: "Earnings (Monthly)",
      value: "$40,000",
      symbol: "fas fa-calendar",
      bar: 0,
      color: "primary",
    },
    {
      Earnings: "Earnings (Annual)",
      value: "$215,000",
      symbol: "fas fa-dollar-sign",
      bar: 0,
      color: "success",
    },
    {
      Earnings: "Tasks",
      value: "50%",
      symbol: "fas fa-clipboard-list",
      bar: 1,
      color: "info",
    },
    {
      Earnings: "Pending Requests",
      value: "18",
      symbol: "fas fa-comments",
      bar: 0,
      color: "warning",
    },
  ];

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <span
          className="d-none d-sm-inline-block btn btn-sm btn-info shadow-sm"
          style={{ color: "black" }}
        >
          <i className="fas fa-download fa-sm text-black-50"></i>
          Generate Report
        </span>
      </div>

      <div className="row">
        {datas.map((data, index) => {
          return <DisplayDashboardData key={index} data={data} />;
        })}
      </div>
      <div className="row">
        {/* <!-- Area Chart --> */}
        <div className="col-xl-8 col-lg-7">
          <div className="card shadow mb-4">
            {/* <!-- Card Header - Dropdown --> */}
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between bg-secondary">
              <h6 className="m-0 font-weight-bold" style={{ color: "black" }}>
                Earnings Overview
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
              <div>
                <Linechart />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Pie Chart --> */}
        <div className="col-xl-4 col-lg-5">
          <div className="card shadow mb-4">
            {/* <!-- Card Header - Dropdown --> */}
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between bg-secondary">
              <h6 className="m-0 font-weight-bold" style={{ color: "black" }}>
                {" "}
                Revenue Sources
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
              <div>
                <DoughnutChart />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 mb-4">
          <ProjectProgress />
        </div>
        <div className="col-lg-6 mb-4">
          {/* <div className="row"> */}
          <ColorSystem />
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
