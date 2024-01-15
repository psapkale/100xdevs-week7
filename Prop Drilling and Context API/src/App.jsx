import { useState } from 'react';
import './App.css';

function App() {
   const [count, setCount] = useState(0);

   return (
      <div>
         Hello from App
         <Count count={count} setCount={setCount} />
      </div>
   );
}

function Count({ count, setCount }) {
   return (
      <div>
         <CountRender count={count} />
         <Buttons count={count} setCount={setCount} />
      </div>
   );
}

function CountRender({ count }) {
   return <div>{count}</div>;
}

function Buttons({ count, setCount }) {
   return (
      <div>
         <button onClick={() => setCount(count + 1)}>Increase</button>
         <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
   );
}

export default App;
