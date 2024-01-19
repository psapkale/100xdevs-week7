import { useRecoilState, useRecoilValue } from 'recoil';
import './App.css';
import {
   jobsAtom,
   messagingAtom,
   networkAtom,
   notificationsAtom,
} from './store/atoms/atom';
import { totalNotificationSelector } from './store/selectors/selectors';

const App = () => {
   const networkNotificationCount = useRecoilValue(networkAtom);
   const jobsAtomCount = useRecoilValue(jobsAtom);
   const notificationsAtomCount = useRecoilValue(notificationsAtom);
   const [messagingAtomCount, setMessagingAtomCount] =
      useRecoilState(messagingAtom);

   const totalNotificationCount = useRecoilValue(totalNotificationSelector);

   return (
      <>
         <button>Home</button>

         <button>
            My network (
            {networkNotificationCount >= 100 ? '99+' : networkNotificationCount}
            )
         </button>
         <button>Jobs ({jobsAtomCount})</button>
         <button>Messaging ({messagingAtomCount})</button>
         <button>Notifications ({notificationsAtomCount})</button>

         <button onClick={() => setMessagingAtomCount((c) => c + 1)}>
            Me ({totalNotificationCount})
         </button>
      </>
   );
};

export default App;
