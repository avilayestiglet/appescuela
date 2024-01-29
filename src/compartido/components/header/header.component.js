import React from "react";
import logo from '../../../assets/images/logo.png';
import TimeComponent from "../time/time.component";

const HeaderComponent = () => {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-primary drop-shadow-lg">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex flex-row items-end">
          <img src={logo} alt="logo" className="w-8 h-8 object-fill"/>
          <h3 className="text-1xl font-sans font-bold text-white mx-2">U.E "Rafael Maria Baralt"</h3>
        </div>
        <div>
          <TimeComponent /> 
        </div>
      </div>
    </header>
  );
};


export default HeaderComponent;