import React, { useState, useEffect } from "react";

import "./HomeTimetable.css";
import Schedule from "../Schedule";

const HomeTimetable = () => {
    return (
      <div className="homeTimetable_container">
        <div className="homeTimetable_title">2024학년도 1학기</div>
        <div className="homeTimetable_content1">
          <div className="homeTimetable_content2">
            <Schedule />
          </div>
        </div>
      </div>
    );
  };
  
  export default HomeTimetable;
  