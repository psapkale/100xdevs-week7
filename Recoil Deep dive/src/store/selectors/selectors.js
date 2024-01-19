import { selector } from 'recoil';
import {
   allNotification,
   jobsAtom,
   messagingAtom,
   networkAtom,
   notificationsAtom,
} from '../atoms/atom';

export const totalNotificationSelector = selector({
   key: 'totalNotificationSelector',
   get: ({ get }) => {
      const networkNotificationCount = get(networkAtom);
      const jobsAtomCount = get(jobsAtom);
      const notificationsAtomCount = get(notificationsAtom);
      const messagingAtomCount = get(messagingAtom);

      return (
         networkNotificationCount +
         jobsAtomCount +
         notificationsAtomCount +
         messagingAtomCount
      );
   },
});

export const totalNotificationSelectorForAsyncQueries = selector({
   key: 'totalNotificationSelectorForAsyncQueries',
   get: ({ get }) => {
      const allNotifications = get(allNotification);

      return (
         allNotifications.network +
         allNotifications.jobs +
         allNotifications.notifications +
         allNotifications.messaging
      );
   },
});
