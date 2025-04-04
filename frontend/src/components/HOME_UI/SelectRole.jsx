import React from "react";
import './SelectRole.css';
import { useNavigate } from "react-router-dom";

  function SelectRole(){
     const navigate = useNavigate();
  return (
    <div id="container3" >
      <h1 className="heading3">Quick Hire</h1>
      <div className="options">
        <div className="labels">
            <div className="topdiv">
                 <button className="option1" onClick={()=>navigate('/RegisterEmployee')}>I want a Job</button>
            </div>
        </div>
        <div className="labels">
            <div className="bottomdiv">
            <button className="option2" onClick={()=>navigate('/EmployerRegistration')}>I want to Hire</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SelectRole;