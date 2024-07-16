import { useState } from 'react'
import './App.css'

function App() {
  
  const [count, setCount] = useState(10);

  function incValue()
  {
    if(count < 20)
    setCount(count + 1);
  }

  function decValue()
  {
    if (count > 0)
    setCount(count - 1);
  }

  return (
    <>
      <h1>Count Value : {count}</h1>
      <button onClick={incValue}>Increase Count</button>
      <button onClick={decValue}>Decrease Count</button>
    </>
  );
}

export default App
