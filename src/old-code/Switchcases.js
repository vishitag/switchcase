import React, { Component } from "react";

class Switchcases extends Component {

  constructor(props) {
    super(props);
    this.state = 
    {
     // isON : props.initialValue == undefined ? false : props.initialValue,
      
    };
    this.toggle = this.toggle.bind(this);
  }
   toggle()
   {
      // if(this.state.isON)
      if(this.props.CurrentSwitchValue)
      {
      this.setState({
       // isON: false,
     // counterOFF : this.props.counterOFF +1  
    });
      this.props.incrementCountOffValue()
      this.props.setSwitchValue(false,this.props.switchId)

    }
      else
      {
        this.setState({
          //isON: true,
        //counterON : this.props.counterON +1 
      });
        this.props.incrementCountOnValue()
        this.props.setSwitchValue(true,this.props.switchId)

      }
   }

  render() {
    //console.log(this.props)
   // if(this.state.isON)
   if(this.props.CurrentSwitchValue)
    {
    return (
      <div>
        <div style = { {float:"right",width : 20, height : 5, border : 5,padding : 20,backgroundColor : "green" }}>on</div>
      <div onClick={this.toggle} style = { {float:"right",width : 20, height : 5, border : 5,padding : 20,backgroundColor : "white" }}></div>
      <div>on count{this.props.counterON} </div>
      <div>off count{this.props.counterOFF} </div>
      </div>
    );
    }
    else
    {
      return (
        <div>
        <div onClick={this.toggle} style = { {float:"right",width : 20, height : 5, border : 5,padding : 20,backgroundColor : "white" }}></div>
        <div style = { {float:"right",width : 20, height : 5, border : 5,padding : 20,backgroundColor : "red" }}>off</div>
        <div>on count{this.props.counterON} </div>
      <div>off count{this.props.counterOFF} </div>
        </div>
      );
    }
   }
};
  
  export default Switchcases;