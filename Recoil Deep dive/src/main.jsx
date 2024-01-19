import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RecoilRoot } from 'recoil';
import AsyncDataQueries from './Async-Data-Queries';

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <RecoilRoot>
         {/* <App /> */}
         <AsyncDataQueries />
      </RecoilRoot>
   </React.StrictMode>
);
