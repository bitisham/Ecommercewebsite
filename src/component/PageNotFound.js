import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <button onClick={handleBack}>PageNotFound</button>
    </div>
  );
};

export default PageNotFound;
