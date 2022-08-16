import './App.css';
import Counter from './component/Counter';
import Todo from './component/Todo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <div><Counter/></div>
        <div><Todo/></div>
      </header>
    </div>
  );
}

export default App;
