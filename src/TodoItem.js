import React, { Component } from "react";

class TodoItem extends Component
{
    constructor(props) {
      super(props);
      this.state = {
          isEditMode : false
      };
      this.saveItem = this.saveItem.bind(this);
    }

    saveItem(e) {
     var dueDate = new Date(this.dateinput.value).getTime();
    if (this._inputElement.value !== "" && (dueDate >= Date.now())){
      var newItem = {
        text: this._inputElement.value,
        dueDate:dueDate,
        isCompleted: this.props.item.isCompleted,
        key: this.props.item.key
      };
      this.props.update(newItem.key , newItem);

      this.setState({
        isEditMode:false
      });
     
      this._inputElement.value = "";
    }
    else{
      alert("invalid date");
    }
     
    console.log(this.state.items);
       
  }

    render()
    {
        let item = this.props.item;
        let bgColor = "bg-white ";
        if (item.isCompleted) {
          bgColor="bg-gray-600";
        }

        if (this.state.isEditMode)  {
          return(
            <div className="flex my-8">
                <div className={"w-full rounded shadow-lg p-5 "+ bgColor}> 
                    <div className="flex justify-between">
                    <div> 
                     <input className="block text-lg mx-auto p-3 rounded border py-2 px-3 text-grey-darkest" ref={(a) => this._inputElement = a} placeholder="enter task"/>
                    </div>
                    <div><input className="block text-lg mx-auto p-3 rounded border py-2 px-3 text-grey-darkest" ref={(d) => this.dateinput = d} type="date" /></div>
                    <div><div className="" style={{cursor: 'pointer'}} onClick={ () => this.saveItem(item.key)}> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg></div>
                    <div style={{cursor: 'pointer'}} onClick={ () => this.setState({isEditMode: false})}><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg></div></div>
                    </div>
                </div> 
            </div>
          );
        } else {
        return ( <div className="flex my-8">
        <div className={"w-full rounded shadow-lg p-5 "+ bgColor}> 
          {/* <div className="w-72"> {item.text} {timeConverter(item.dueDate)}</div>  */}
           <div className="flex justify-between">
           <div> <input type="checkbox" checked={item.isCompleted} onClick={() => this.props.checkedItem(item)} class="form-checkbox h-4 w-4 my-1 mr-2"></input> </div>
              <div className={item.isCompleted? "content-start line-through pr-40" :"content-start pr-40"}> {item.text}</div>
               <div className="flex space-x-2 "> {this.props.dueDatecolors(item.dueDate)} 
               <div style={{cursor: 'pointer'}} onClick={() => this.setState({isEditMode: true})}><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg></div>
              <div className="" style={{cursor: 'pointer'}} onClick={ () => this.props.delete(item.key)} key={item.key}>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
              </div>
              </div>
              {/* </div> */}
            </div>
        </div> 
    </div> );
        }
    }
    }

export default TodoItem;