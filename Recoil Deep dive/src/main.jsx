import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RecoilRoot } from 'recoil';
import AsyncDataQueries from './Async-Data-Queries';
import Todos from './Todos';
import Loadables from './Loadables';

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <RecoilRoot>
         {/* <App /> */}
         {/* <AsyncDataQueries /> */}
         {/* <Todos /> */}
         <Loadables />
      </RecoilRoot>
   </React.StrictMode>
);
