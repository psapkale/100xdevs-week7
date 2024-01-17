import { selector } from 'recoil';
import { countAtom } from '../atoms/count';

export const evenSelector = selector({
   key: 'evenSelector',
   get: ({ get }) => {
      // ? 'get' gets the atom which this selector depends on
      const count = get(countAtom);
      return count % 2 === 0;
   },
});
