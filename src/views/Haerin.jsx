import React, { useEffect } from "react";
import haerin from "../img/haerin-no.gif"

import ShimmerComponent from "../components/ShimmerComponent";
import { useState } from "react";

function Haerin() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeOutId = setTimeout(() => setIsLoading(false), 5000);
    return () => clearTimeout(timeOutId);
  }, [setIsLoading]);

  return (
    <div className="d-flex flex-column flex-grow-1 align-items-center justify-content-center">
      {isLoading ? <ShimmerComponent /> : (
        <div>
          <h1 className="no-text">nO</h1>
          <img src={haerin} alt="haerin-no" className="haerin-no"/>
        </div>
      )}
    </div>
  );
}

export default Haerin;
