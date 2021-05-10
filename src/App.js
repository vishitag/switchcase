import logo from './logo.svg';
import  './App.css';
import SwitchList from './SwitchList.js';
import TodoList from './TodoList';

function App() {
  return (
    <div className="bg-purple-400 flex  h-screen w-full">
      <header className="w-max mx-auto rounded p-20 m-20 ">
      {/* <SwitchList/> */}
      <TodoList/>
      </header>
    </div>

    // <div className="flex pt-10 pl-80 pr-80 bg-purple-400 h-screen w-full">
    //   <header>
    //   {/* <SwitchList/> */}
    //   <TodoList/>
    //   </header>
    // </div>

  );
}

export default App;
