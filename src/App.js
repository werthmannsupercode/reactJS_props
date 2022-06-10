import ListLev13Props from './components/ListLev13Props';
import ListLev21Props from './components/ListLev21Props';
import ListLev32Props from './components/ListLev32Props';
import ListLev11Map from './components/ListLev11Map';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {

  return (
    <div className="App">
      <ListLev13Props />
      <ListLev21Props />
      <ListLev32Props />
      <ListLev11Map />
      <ToDoList />
    </div>
  );
}

export default App;
