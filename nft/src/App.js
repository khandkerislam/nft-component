import logo from './logo.svg';
import './App.css';
import {Card} from './components/card';

function App() {
  return (
    <div className="App">
      <Card title={"Equilibrium"} issue={3429} description={"Our Equilibrium collection promotes balance and calm"} value={0.041} time={3} author={"Jules Wyvern"}/>
    </div>
  );
}

export default App;
