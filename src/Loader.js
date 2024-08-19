import React from "react";

const Loader = ({ isLoading }) => (
  <React.Fragment>
    <div
      className={
        isLoading ? "flex justify-center items-center min-h-screen" : "hidden"
      }
    >
      <div className="relative">
        <div className="w-12 h-12 rounded-full absolute border border-solid border-gray-200"></div>
        <div className="w-12 h-12 rounded-full animate-spin absolute border border-solid border-yellow-500 border-t-transparent shadow-md"></div>
      </div>
    </div>
  </React.Fragment>
);

export default Loader;
