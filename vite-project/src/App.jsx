import './App.css';
import { useState } from 'react';

function Bulb() {
  const [light, setLight] = useState('OFF');

  return (
    <div>
      <h1 style={{ backgroundColor: light === 'ON' ? 'orange' : 'gray' }}>
        {light}
      </h1>
      <button onClick={() => setLight(light === 'ON' ? 'OFF' : 'ON')}>
        전구 끄기/켜기
      </button>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

function App() {
  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
}

export default App;