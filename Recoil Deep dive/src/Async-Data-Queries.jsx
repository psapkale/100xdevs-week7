import { useRecoilState, useRecoilValue } from 'recoil';
import { allNotification } from './store/atoms/atom';
import { totalNotificationSelectorFromAsyncQueries } from './store/selectors/selectors';
import { useEffect } from 'react';

const AsyncDataQueries = () => {
   const [networkCount, setNetworkCount] = useRecoilState(allNotification);
   const totalNotificationCount = useRecoilValue(
      totalNotificationSelectorFromAsyncQueries
   );

   useEffect(() => {
      // ? can not make useEffect async
      setData();
   }, []);

   const setData = async () => {
      const data = await fetch('https://sum-server.100xdevs.com/notifications');
      const json = await data.json();

      setNetworkCount(json);
   };

   return (
      <>
         <button>Home</button>

         <button>
            My network (
            {networkCount.network >= 100 ? '99+' : networkCount.network})
         </button>
         <button>Jobs ({networkCount.jobs})</button>
         <button>Messaging ({networkCount.messaging})</button>
         <button>Notifications ({networkCount.notifications})</button>

         <button>Me ({totalNotificationCount})</button>
      </>
   );
};

export default AsyncDataQueries;
