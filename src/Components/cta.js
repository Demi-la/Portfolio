import React from "react";
import resume from "../Assets/Adebiyi Resume.pdf";
const CTA = () => {
  return (
    <div className="cta">
      <a href={resume} download className="btn btn-primary">
        Download CV
      </a>
     
    </div>
  );
};

export default CTA;
