import React from "react";
import { render } from "react-dom";
import "./sass/main.scss";

const App = () => {
  return ( 
    <div>
      <h1>React - Parcel demo boiler</h1>
    </div>
  )
};
render( <App/> , document.getElementById("app"));
