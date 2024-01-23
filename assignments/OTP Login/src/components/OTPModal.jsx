import { useEffect, useRef, useState } from 'react';

const OTPModal = ({ length = 4, onOTPSubmit = () => {} }) => {
   const [otp, setOtp] = useState(new Array(length).fill(''));
   const inputRefs = useRef([]);

   const handleChange = (i, e) => {
      const value = e.target.value;
      if (isNaN(value)) return;

      const newOtp = [...otp];
      // allow only one input
      // the last one
      newOtp[i] = value.substring(value.length - 1);
      setOtp(newOtp);

      const combinedOtp = newOtp.join('');
      if (combinedOtp.length === length) onOTPSubmit(combinedOtp);

      // move cursor to next field if current field is filled
      if (value && i < length - 1 && inputRefs.current[i + 1]) {
         inputRefs.current[i + 1].focus();
      }
   };

   const handleClick = (i) => {
      // move cursor to the right on click (for that specific input)
      inputRefs.current[i].setSelectionRange(1, 1); // selects from (start, end)

      // move to previous first empty field
      if (i > 0 && !otp[i - 1]) {
         inputRefs.current[otp.indexOf('')].focus();
      }
   };

   const handleKeyDown = (i, e) => {
      // handle backspace
      // move cursor to previous field on backspace
      if (
         e.key == 'Backspace' &&
         !otp[i] &&
         i > 0 &&
         inputRefs.current[i - 1]
      ) {
         inputRefs.current[i - 1].focus();
      }

      // to left
      if (e.key == 'ArrowLeft' && i > 0 && inputRefs.current[i - 1]) {
         inputRefs.current[i - 1].focus();
      }
      // to right
      if (e.key == 'ArrowRight' && i < length - 1 && inputRefs.current[i + 1]) {
         inputRefs.current[i + 1].focus();
      }
   };

   useEffect(() => {
      if (inputRefs.current[0]) {
         inputRefs.current[0].focus();
      }
   }, []);

   return (
      <div className='flex justify-center items-center'>
         {otp.map((val, i) => {
            return (
               <input
                  type='text'
                  value={val}
                  ref={(input) => (inputRefs.current[i] = input)}
                  key={i}
                  onChange={(e) => handleChange(i, e)}
                  onClick={() => handleClick(i)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  className='border-2 rounded border-gray-600 w-10 h-10 m-1 text-center text-xl'
               />
            );
         })}
      </div>
   );
};

export default OTPModal;
