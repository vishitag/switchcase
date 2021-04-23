import React, { Component } from "react";

const Switchcases = (props) => {
    return (
      <div>
        {props.isOn ?
         <div>
          <div style = { {float:"right",width : 20, height : 5, border : 5,padding : 20,backgroundColor : "green" }}>on</div>
          <div onClick={() => {props.toggle(props.id)}} style = { {float:"right",width : 20, height : 5, border : 5,padding : 20,backgroundColor : "white" }}></div>
         </div>
        :
          <div>
            <div onClick={() => {props.toggle(props.id)}} style = { {float:"right",width : 20, height : 5, border : 5,padding : 20,backgroundColor : "white" }}></div>
            <div style = { {float:"right",width : 20, height : 5, border : 5,padding : 20,backgroundColor : "red" }}>off</div>
          </div>
        }
        
        <div>On count{props.counterON} </div>
        <div>Off count{props.counterOFF} </div>
      </div>
    );
};
  
export default Switchcases;