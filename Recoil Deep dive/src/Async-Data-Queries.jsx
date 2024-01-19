import { useRecoilValue } from 'recoil';
import { allNotificationAtom } from './store/atoms/atom';
import { totalNotificationSelectorForAsyncQueries } from './store/selectors/selectors';

const AsyncDataQueries = () => {
   const networkCount = useRecoilValue(allNotificationAtom);
   const totalNotificationCount = useRecoilValue(
      totalNotificationSelectorForAsyncQueries
   );

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
