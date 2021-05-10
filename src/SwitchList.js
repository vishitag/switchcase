import React, { Component } from "react";
import Switchcases from "./Switchcases";
import TodoList from "./TodoList";

const solution = [true,false,false];
const totalChances = 4 ;

class SwitchList extends Component {

    constructor(props) {
      super(props);
      this.state = 
      {
        switches:{}
      };
      this.toggle = this.toggle.bind(this);
      this.resetCount = this.resetCount.bind(this);
      this.getTotalCount = this.getTotalCount.bind(this);
      this.isWon = this.isWon.bind(this);
    }

    toggle(switchId) {
      var switches = this.state.switches;
      var switchItem = switches[switchId];

      if (switches[switchId]) {
        switches[switchId] = {
          isOn : !switchItem.isOn,
          counterON: switchItem.isOn ? switchItem.counterON : switchItem.counterON + 1 ,
          counterOFF: switchItem.isOn ? switchItem.counterOFF + 1 : switchItem.counterOFF,
        }

      } else {
        //update switches
        switches[switchId] = {
          isOn : true,
          counterON: 1,
          counterOFF: 0
        }
      }
      
      this.setState({switches: switches});
    }

    resetCount() {
      this.setState({
        switches: {}
      });
    }

    getTotalCount() {
      let totalCount = 0;
      
      for (const key in this.state.switches) {
        totalCount = totalCount + (this.state.switches[key].counterON + this.state.switches[key].counterOFF);
      }

      return totalCount;
    }

    isWon() {
      for (let index = 0; index < solution.length; index++) {
        const solutionValue = this.state.switches[index] ? this.state.switches[index] : {isOn: false} ;
        if (solutionValue.isOn != solution[index]) {
          return false;
        }
      }

      return true;
    }

    render() {
      console.log(this.state)

      var remainingclicks = totalChances - this.getTotalCount();
      var isWon = this.isWon(); 
      return (
        <div className="todoListMain">
         
          <div>
            total clicks: {this.getTotalCount()}<br></br>
          </div>
          <div style={{marginTop:20}}>
            remaining clicks{remainingclicks}<br></br><br></br>
          </div>

          {remainingclicks > 0 ? 
            (!isWon ? <div style={{display:"flex" , flexDirection:"row",justifyContent:"space-around"}}>
                {solution.map((val, index) => {
                  var switchValues = this.state.switches[index] ? this.state.switches[index] : {};
                  return (
                    <div className="pl-10 ">
                      <Switchcases 
                        counterOFF={switchValues.counterOFF} 
                        counterON={switchValues.counterON}  
                        isOn={switchValues.isOn} 
                        id = {index} 
                        toggle = {this.toggle} 
                      /> 
                    </div>
                  )
                })}
              </div>: null) 
            : <div> you failed <br></br><button onClick={this.resetCount}> try again </button></div> }

            {remainingclicks > 0 &&  isWon  ? <div style={{marginTop:20}}> success show gift image </div> : null}
            
            {/* code for todolist starts here */}
        
         {/* code for todolist ends here */}
      </div>
    );
  }
}
 
export default SwitchList;