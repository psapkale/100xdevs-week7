import { atom, selector } from 'recoil';

export const networkAtom = atom({
   key: 'networkAtom',
   default: 104,
});

export const jobsAtom = atom({
   key: 'jobsAtom',
   default: 0,
});

export const notificationsAtom = atom({
   key: 'notificationsAtom',
   default: 12,
});

export const messagingAtom = atom({
   key: 'messagingAtom',
   default: 0,
});

export const allNotificationAtom = atom({
   key: 'allNotificationAtom',
   default: selector({
      key: 'allNotificationSelector',
      get: async () => {
         const data = await fetch(
            'https://sum-server.100xdevs.com/notifications'
         );

         return await data.json();
      },
   }),
});
