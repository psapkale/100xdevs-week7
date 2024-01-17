import { atom } from 'recoil';

export const countAtom = atom({
   // only takes one argument
   key: 'countAtom', // ! unique
   default: 0,
});
