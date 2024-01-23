import { useState, useRef, useEffect } from 'react';
import randomWords from '../data/words';

const Generator = () => {
   const [length, setLength] = useState(0);
   const [paragraph, setParagraph] = useState('');
   const inpRef = useRef(null);

   useEffect(() => {
      inpRef?.current?.focus();
   }, []);

   const handleGenerate = () => {
      const sentence = [];
      for (let i = 0; i < length; i++) {
         sentence.push(
            randomWords[Math.floor(Math.random() * (randomWords.length - 1))]
         );
      }
      setParagraph(sentence.join(' '));
   };

   return (
      <div>
         <h1 className='font-bold text-2xl'>Para Generator</h1>
         <input
            ref={inpRef}
            className='m-3 p-3 rounded-md'
            type='number'
            placeholder='Enter Number of Words'
            value={length}
            onChange={(e) => {
               const value = parseInt(e.target.value, 10);
               if (isNaN(value)) {
                  setLength(0);
               }
               setLength(value);
               console.log(length);
            }}
         />
         <button onClick={handleGenerate}>Generate</button>
         <p className='font-bold text-xl'>{paragraph}</p>
      </div>
   );
};

export default Generator;
