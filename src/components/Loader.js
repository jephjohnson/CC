import React from "react";

const Loader = ({ modalState }) => {
    if(!modalState) {
      return null;
    }
    return(
        <div className="loader" id="loader-6">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
  }

  export default Loader;