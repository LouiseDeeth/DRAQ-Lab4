import logo from './logo.svg';
import './App.css';

function App() {
  return (
    //Added h1 header and h2 present time
    <div className="App">
          <h1>Hello World</h1>
          <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

export default App;