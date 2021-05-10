import React, { Component } from "react";
//import "./TodoList.css";
import { Alert } from 'reactstrap';
import TodoItem from "./TodoItem"


function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var time = date + ' ' + month + ' ' + year + ' ';
  return time;
}
class TodoItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.createTasks = this.createTasks.bind(this);
        this.dueDatecolors = this.dueDatecolors.bind(this);
        this.checkedItem = this.checkedItem.bind(this);
        this.delete = this.delete.bind(this);
    }
     
    dueDatecolors(dueDate) {
      const millsecsinDay = 86400000;
      console.log(dueDate, Date.now(),( dueDate - Date.now()), millsecsinDay*2 );
      
      if((dueDate - Date.now()) < millsecsinDay*2) {
        return <span style={{color:"red"}}>{timeConverter(dueDate)} </span>
      } else if ((dueDate - Date.now()) < millsecsinDay*5) {
        return <span style={{color:"blue"}}>{timeConverter(dueDate)} </span>
      } else {
        return <span style={{color:"green"}}>{timeConverter(dueDate)} </span>
      }   
    }

     checkedItem(item) {
      item.isCompleted = !item.isCompleted;
      this.props.update(item.key , item);
     }

  
      
    delete(key){
     this.props.delete(key);
    }
    createTasks(item)  {
        return (
          <TodoItem deleteItem={this.delete}
                    update={this.props.update}
                    checkedItem={this.checkedItem}
                    dueDatecolors={this.dueDatecolors}
                    item={item}/>
        );
    }
   
  render() {
    var todoEntries = this.props.listentries;
    var listItems = todoEntries.filter(function (item) {
      return (item.isCompleted === false);
    }).map(this.createTasks);

    var completedItems = todoEntries.filter(function (item) {
      return (item.isCompleted === true);
    }).map(this.createTasks);

    var count = completedItems.length;
 
    return (
      <div className="mt-5 ">
          {listItems}
          <div className="text-purple-800 antialiased"> You have completed {count} tasks</div>
          {completedItems}
      </div>
    );
  }
};
 
export default TodoItems;