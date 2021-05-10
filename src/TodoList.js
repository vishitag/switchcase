import React, { Component} from "react";
import TodoItems from "./TodoItems";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Alert } from "bootstrap";
 
function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var time = date + ' ' + month + ' ' + year + ' ';
  return time;
}

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state=
    {
      items:[]
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.updateitem = this.updateitem.bind(this);
  }

  addItem(e) {
    console.log("date debugging", new Date(this.dateinput.value).getTime() >= Date.now(),new Date(this.dateinput.value).getTime(), Date.now());
    
    var dueDate = new Date(this.dateinput.value).getTime();
    if (this._inputElement.value !== "" && (dueDate >= Date.now())){
      var newItem = {
        text: this._inputElement.value,
        dueDate:dueDate,
        key: Date.now(),
        isCompleted: false
      };
      this.setState((prevState) => {
        return { 
          items: prevState.items.concat(newItem) 
        };
      });
     
      this._inputElement.value = "";
    }
    else{
      alert("invalid date");
    }
     
    console.log(this.state.items);
       
    e.preventDefault();
  }

  updateitem(key, newItem)
  {
    // var updateitems = this.state.items;
    // for (let i = 0; i<updateitems.length; i++) {
    // const existingItem = updateitems[i];
    //  if (existingItem.key == key) {
    //   updateitems[i] = Newitem;
    //   break;
    //  }
    // }

    var updateditems = this.state.items.map((item, index) => {
       if (item.key == key) {
         return newItem;
       }
       return item;
    })
   
    this.setState({
      items:updateditems
    });
  }
  
  deleteItem(key)
  {
    
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });
   
    this.setState({
      items: filteredItems
    });
  }
  

  render() {
    console.log(this.state.items);


    return (
      <div className="mx-auto">
        <form onSubmit={this.addItem}>
            <div className="flex  space-x-3">
             <div><input className="block text-lg mx-auto p-3 rounded border py-2 px-3 text-grey-darkest" ref={(a) => this._inputElement = a} placeholder="enter task"></input></div>
             <div><input className="block text-lg mx-auto p-3 rounded border py-2 px-3 text-grey-darkest" ref={(d) => this.dateinput = d} type="date" ></input></div>
             <div><button className="bg-purple-800 hover:bg-purple-300 text-white font-bold py-3 px-4 rounded" type="submit">add</button></div>
            </div>
        </form>

        <TodoItems listentries={this.state.items} 
                    delete={this.deleteItem}
                    update={this.updateitem} />
  
      </div>
    );
  }
}

export default TodoList;