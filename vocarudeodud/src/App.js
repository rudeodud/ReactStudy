import './App.css';
import Hellow from './components/Hellow'
function App() {
  return (
    <div className="App">
      <h3>props : properties</h3>
      <Hellow age={10}/>
      <Hellow age={20}/>
      <Hellow age={30}/>
    </div>
  );
} 


export default App;
