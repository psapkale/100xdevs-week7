import { useContext, useState } from 'react';
import { CountContext } from './context';
import './App.css';

function ContextAPI() {
   const [count, setCount] = useState(0);

   // ? wrap anyone who want to use the teleported value inside a provider
   return (
      <div>
         Form ContextAPI
         <CountContext.Provider value={{ count, setCount }}>
            <Count count={count} setCount={setCount} />
         </CountContext.Provider>
      </div>
   );
}

function Count() {
   return (
      <div>
         <CountRender />
         <Buttons />
      </div>
   );
}

function CountRender() {
   const { count } = useContext(CountContext);

   return <div>{count}</div>;
}

function Buttons() {
   const { count, setCount } = useContext(CountContext);

   return (
      <div>
         <button onClick={() => setCount(count + 1)}>Increase</button>
         <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
   );
}

export default ContextAPI;
