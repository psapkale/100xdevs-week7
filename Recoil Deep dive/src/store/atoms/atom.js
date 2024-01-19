import { atom } from 'recoil';

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

export const allNotification = atom({
   key: 'allNotification',
   default: {
      network: 0,
      jobs: 0,
      messaging: 0,
      notifications: 0,
   },
});
