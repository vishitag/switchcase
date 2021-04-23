import React, { Component } from "react";
import TodoItems from "./TodoItems";
import Switchcases from "./Switchcases";

const solution = [true,false,false];
const totalChances = 4 ;

class SwitchList extends Component {

    constructor(props) {
        super(props);
        this.state = 
        {
            items: [],
            totalCountOn : 0,
            totalCountOff : 0,
            counterOFFone:0,
            counterOFFtwo:0,
            counterOFFthree:0,
            counterONone:0,
            counterONtwo:0,
            counterONthree:0,
            switchOneValue : false,
            switchTwoValue : false,
            switchThreeValue : false
            
        };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.incrementCountOnValue = this.incrementCountOnValue.bind(this);
        this.incrementCountOffValue = this.incrementCountOffValue.bind(this);
        this.setSwitchValue = this.setSwitchValue.bind(this);
        this.resetCount = this.resetCount.bind(this);
      }
       
      addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
              text: this._inputElement.value,
              key: Date.now()
            };
            this.setState((prevState) => {
              return { 
                items: prevState.items.concat(newItem) 
              };
            });
            this._inputElement.value = "";
          }
          console.log(this.state.items);
          e.preventDefault();
      }

      deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
          return (item.key !== key);
        });
        this.setState({
          items: filteredItems
        });
      }

      incrementCountOnValue()
      {
        this.setState({
          totalCountOn : this.state.totalCountOn +1
        });
      }

      incrementCountOffValue()
      {
        this.setState({
          totalCountOff : this.state.totalCountOff +1
        });
      }

      setSwitchValue(CurrentSwitchValue,switchId)
      {
        
        if(switchId == "one") {
          if(CurrentSwitchValue) {
          this.setState({switchOneValue : CurrentSwitchValue, counterONone : this.state.counterONone+1})
          } else {
            
          this.setState({switchOneValue : CurrentSwitchValue, 
            counterOFFone : this.state.counterOFFone+1 })
          }
        }

        if(switchId == "two")
        {
          if(CurrentSwitchValue)
          {
            this.setState({switchTwoValue : CurrentSwitchValue, counterONtwo:this.state.counterOFFtwo+1})
          } else {
            this.setState({switchTwoValue:CurrentSwitchValue,
            counterOFFtwo:this.state.counterOFFtwo+1})
         } 
        }
        
        if(switchId == "three")
        if(CurrentSwitchValue){
        this.setState({switchThreeValue : CurrentSwitchValue,counterONthree:this.state.counterOFFthree+1})
        }
        else{
              this.setState({switchThreeValue:CurrentSwitchValue,
              counterOFFthree:this.state.counterOFFthree+1})
        }
      }
      resetCount()
      {
        this.setState({
          totalCountOn : 0,
            totalCountOff : 0,
            switchOneValue : false,
            switchTwoValue : false,
            switchThreeValue : false
        });
      }

  render(){
    console.log(this.state)

    var remainingclicks = totalChances - (this.state.totalCountOn + this.state.totalCountOff);
    var isWon = this.state.switchOneValue == solution[0] && this.state.switchTwoValue == solution[1] && this.state.switchThreeValue == solution[2];
       
    return (
<div className="todoListMain">
 <div className="header">
        <form onSubmit={this.addItem}>
        <input ref={(a) => this._inputElement = a} 
            placeholder="enter task">
            </input>
            <button type="submit">add</button>
          </form>
  </div>

        total on count: {this.state.totalCountOn}<br></br>
        total off count: {this.state.totalCountOff}

        <br></br><br></br> remaining clicks{remainingclicks = totalChances - (this.state.totalCountOn + this.state.totalCountOff)}<br></br><br></br>
        
    {remainingclicks > 0 ? ( !isWon ? <div style={{display:"flex" , flexDirection:"row",justifyContent:"space-around"}}>
      <div style={{paddingLeft:30}}><Switchcases counterOFF={this.state.counterOFFone} counterON={this.state.counterONone} initialValue = {false} CurrentSwitchValue={this.state.switchOneValue} switchId = {"one"} setSwitchValue = {this.setSwitchValue} incrementCountOnValue = {this.incrementCountOnValue} incrementCountOffValue = {this.incrementCountOffValue}/></div>
      <div style={{paddingLeft:30}}><Switchcases counterOFF={this.state.counterONtwo} counterON={this.state.counterONtwo} initialValue = {true } CurrentSwitchValue={this.state.switchTwoValue}  switchId ={"two"} setSwitchValue = {this.setSwitchValue}  incrementCountOnValue = {this.incrementCountOnValue} incrementCountOffValue = {this.incrementCountOffValue} /></div>
      <div style={{paddingLeft:30}}><Switchcases counterOFF={this.state.counterOFFthree} counterON={this.state.counterONthree} switchId={"three"} CurrentSwitchValue={this.state.switchThreeValue}  setSwitchValue = {this.setSwitchValue} incrementCountOnValue = {this.incrementCountOnValue} incrementCountOffValue={this.incrementCountOffValue}/></div> 
   </div>: null) : <div> you failed <br></br><button onClick={this.resetCount}> try again </button></div> }

      <br></br>
    {remainingclicks > 0 &&  isWon  ? <div> success show gift image </div> : null}
        <br></br>

</div>
    );
  }
}
 
export default SwitchList;