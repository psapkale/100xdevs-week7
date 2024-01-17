import './App.css';
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { countAtom } from './store/atoms/count';
import { evenSelector } from './store/selectors/selectors';

function App() {
   return (
      <RecoilRoot>
         <Count />
      </RecoilRoot>
   );
}

function Count() {
   return (
      <div>
         <CountRender />
         <Buttons />
         <EvenSelector />
      </div>
   );
}

function EvenSelector() {
   const isEven = useRecoilValue(evenSelector);

   return <div>{isEven ? 'It is even' : null}</div>;
}

function CountRender() {
   const count = useRecoilValue(countAtom);

   return <div>{count}</div>;
}

function Buttons() {
   const setCount = useSetRecoilState(countAtom);
   console.log('button re-rendered');

   return (
      <div>
         <button onClick={() => setCount((count) => count + 1)}>
            Increase
         </button>
         <button onClick={() => setCount((count) => count - 1)}>
            Decrease
         </button>
      </div>
   );
}

export default App;
