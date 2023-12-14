

import React from "react";
import "./instructor.css";
import instructor1 from "../../Images/M.S.jpg";
import instructor2 from "../../Images/Mark Atta.jpg";
import instructor3 from "../../Images/Aziz.jpg";


export default function Instructors() {
  return (
    <>
      <div className="inst-container-large">
        <div className="inst-container">
          <h1 className="inst-heading">
            <span>Meet</span>
            Our Instructors
          </h1>
          <div className="inst-profiles">
            <div className="inst-profile">
              <img src={instructor1} alt="" />
              <h3 className="inst-name">Dr.Michael Soli</h3>
              <h5>DCIT 205 Lecturer</h5>
            </div>
            <div className="inst-profile">
              <img src={instructor2} alt="" />
              <h3 className="inst-name">Mr.Mark Mensah</h3>
              <h5>DCIT 207 Lecturer</h5>
            </div>{" "}
            <div className="inst-profile">
              <img src={instructor3} alt="" />
              <h3 className="inst-name">Dr.Abdul Aziz</h3>
              <h5>DCIT 203 Lecturer</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

