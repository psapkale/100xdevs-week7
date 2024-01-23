import { useState } from 'react';
import OTPModal from './OTPModal';

const LoginModal = () => {
   const [phoneNumber, setPhoneNumber] = useState('');
   const [showOTPModal, setShowOTPModal] = useState(false);

   const handlePhoneNumber = (e) => {
      setPhoneNumber(e.target.value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      // phone number validation
      const regex = /[^0-9]/g;

      if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
         alert('Invalid Phone Number');
         return;
      }

      setShowOTPModal(true);
   };

   const onOTPSubmit = (otp) => {
      console.log('Login Successful', otp);
   };

   return (
      <div className='text-center'>
         {!showOTPModal ? (
            <form action='' onSubmit={handleSubmit}>
               <input
                  type='text'
                  value={phoneNumber}
                  onChange={handlePhoneNumber}
                  placeholder='Enter your number'
               />
               <button type='submit'>Submit</button>
            </form>
         ) : (
            <div>
               <p>Enter OTP sent to {phoneNumber}</p>
               <OTPModal length={4} onOTPSubmit={onOTPSubmit} />
            </div>
         )}
      </div>
   );
};

export default LoginModal;
