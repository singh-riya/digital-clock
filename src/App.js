import { useEffect } from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [time, updateTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      updateTime(new Date())
    }, 1000);
  
    return () => {
      clearInterval(timer)
    }
  }, [])
  
  return (
    <div className="App">
      <header>
        <h4>Digital Clock</h4>
      </header>
      <div className='clock-div'>
        <h1>{time.toLocaleTimeString()}</h1>
      </div>
    </div>
  );
}

export default App;
