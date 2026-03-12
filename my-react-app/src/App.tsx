import { useState } from 'react';
import './App.css';
import Button from './Button';
import Clock from './Time';
import withBorder from './withBorder';

// Wrap the image Button with a border using the HOC
const BorderedButton = withBorder(Button);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        {/* Bordered image */}
        <BorderedButton />

        <h1 style={{ marginTop: '30px' }}>Vite + React</h1>

        <div className="card" style={{ marginTop: '20px' }}>
          {/* Counter button */}
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>

          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>

          {/* Live Clock */}
          <Clock />
        </div>

        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  );
}

export default App;
