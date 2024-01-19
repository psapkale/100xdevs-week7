import { atomFamily, selectorFamily } from 'recoil';

export const todoSelectorFamily = atomFamily({
   key: 'todoSelectorFamily',
   default: selectorFamily({
      key: 'todoSelectorFamilyDefault',
      get:
         (id) =>
         // eslint-disable-next-line no-unused-vars
         async ({ get }) => {
            const data = await fetch(
               `https://sum-server.100xdevs.com/todo?id=${id}`
            );
            const json = await data.json();

            return json?.todo;
         },
   }),
});
