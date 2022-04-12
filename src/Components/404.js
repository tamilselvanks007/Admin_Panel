import React from "react";
import { Link } from "react-router-dom";
function Error() {
  return (
    <div className="container-fluid">
      {/* <!-- 404 Error Text --> */}
      <div className="text-center">
        <div className="error text-danger mx-auto my-5" data-text="404">
          404
        </div>
        <p className="lead text-gray-800 mb-5">Page Not Found</p>
        <p className="text-gray-500 mb-0">
          It looks like you found a glitch in the matrix...
        </p>
        <Link to="/">&larr; Back to Dashboard</Link>
      </div>
    </div>
  );
}

export default Error;
