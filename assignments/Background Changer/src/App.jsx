import { useState } from 'react';
import './App.css';

function App() {
   const [bgColor, setBgColor] = useState('bg-orange-700');

   return (
      <div className={`h-[100vh] flex justify-center items-end ${bgColor}`}>
         <div className='py-4 px-8 flex gap-8 shadow-2xl mb-3 rounded-full bg-white'>
            <button
               onClick={() => setBgColor('bg-red-700')}
               className='px-4 py-2 bg-red-700 rounded-lg text-slate-100'
            >
               Red
            </button>
            <button
               onClick={() => setBgColor('bg-yellow-700')}
               className='px-4 py-2 bg-yellow-700 rounded-lg text-slate-100'
            >
               Yellow
            </button>
            <button
               onClick={() => setBgColor('bg-black')}
               className='px-4 py-2 bg-black rounded-lg text-slate-100'
            >
               Black
            </button>
            <button
               onClick={() => setBgColor('bg-purple-700')}
               className='px-4 py-2 bg-purple-700 rounded-lg text-slate-100'
            >
               Purple
            </button>
            <button
               onClick={() => setBgColor('bg-green-700')}
               className='px-4 py-2 bg-green-700 rounded-lg text-slate-100'
            >
               Green
            </button>
            <button
               onClick={() => setBgColor('bg-blue-700')}
               className='px-4 py-2 bg-blue-700 rounded-lg text-slate-100'
            >
               Blue
            </button>
            <button
               onClick={() => setBgColor('bg-orange-700')}
               className='px-4 py-2 bg-orange-700 rounded-lg text-slate-100'
            >
               Default
            </button>
         </div>
      </div>
   );
}

export default App;
