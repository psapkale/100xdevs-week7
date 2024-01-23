/* eslint-disable react-hooks/rules-of-hooks */
import { useMemo, useState } from 'react';
import { USER } from '../data/user';

function formatNumber(number) {
   const suffixes = ['', 'K', 'M', 'B', 'T'];
   const suffixNum = Math.floor(('' + number).length / 3);
   let shortNum = parseFloat(
      (suffixNum !== 0
         ? number / Math.pow(1000, suffixNum)
         : number
      ).toPrecision(2)
   );

   if (shortNum % 1 !== 0) {
      if (shortNum >= 1 && shortNum < 10) {
         shortNum = shortNum.toFixed(1);
      } else {
         shortNum = shortNum.toFixed(0);
      }
   }

   return shortNum + suffixes[suffixNum];
}

const CardComponent = () => {
   const [user] = useState(USER);

   if (!user) {
      return;
   }

   const formatedFollowersCount = useMemo(
      () => formatNumber(user.followersCount),
      [user.followersCount]
   );
   const formatedLikesCount = useMemo(
      () => formatNumber(user.likesCount),
      [user.likesCount]
   );
   const formatedPhotosCount = useMemo(
      () => formatNumber(user.photosCount),
      [user.photosCount]
   );

   return (
      <div className='w-[50vh] h-[70vh] border-[1px] border-red-100 flex flex-col gap-3 rounded-xl overflow-hidden'>
         <div className='w-full h-[35%] relative bg-teal-500'>
            <img
               src={user.profilePhoto}
               alt='Photo'
               className='rounded-full absolute bottom-[-35%] left-[30%]'
            />
         </div>
         <div className='w-full h-[65%] mt-[4em]'>
            <div className='mb-10'>
               <div className='flex items-center justify-center gap-3'>
                  <h2 className='font-bold text-slate-100 text-xl'>
                     {user.name}
                  </h2>
                  <span className='text-gray-300 text-lg font-thin'>
                     {user.age}
                  </span>
               </div>
               <span className='font-thin text-gray-200 text-lg'>
                  {user.location}
               </span>
            </div>
            <hr className='opacity-30' />
            <div className='flex items-center justify-around mt-[4em]'>
               <div>
                  <h1 className='font-bold text-[20px]'>
                     {formatedFollowersCount}
                  </h1>
                  <span className='font-thin text-[13px] text-gray-300'>
                     Followers
                  </span>
               </div>
               <div>
                  <h1 className='font-bold text-[20px]'>
                     {formatedLikesCount}
                  </h1>
                  <span className='font-thin text-[13px] text-gray-300'>
                     Likes
                  </span>
               </div>
               <div>
                  <h1 className='font-bold text-[20px]'>
                     {formatedPhotosCount}
                  </h1>
                  <span className='font-thin text-[13px] text-gray-300'>
                     Photos
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CardComponent;
