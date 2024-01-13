// Suspense handle the loading state while the dynamic imports are being resolved
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
const Dashboard = lazy(() => import('./components/Dashboard'));
const Landing = lazy(() => import('./components/Landing'));

function App() {
   return (
      <>
         <BrowserRouter>
            <Appbar />
            <Routes>
               <Route
                  path='/dashboard'
                  element={
                     <Suspense fallback={<div>Loading...</div>}>
                        <Dashboard />
                     </Suspense>
                  }
               />
               <Route
                  path='/'
                  element={
                     <Suspense fallback={<div>Loading...</div>}>
                        <Landing />
                     </Suspense>
                  }
               />
            </Routes>
         </BrowserRouter>
      </>
   );
}

function Appbar() {
   const navigate = useNavigate(); // the useNavigate hook should be inside the BrowserRouter (which is inside here)

   return (
      <div
         style={{
            backgroundColor: 'black',
            color: 'white',
            display: 'flex',
            gap: '1.5em',
         }}
      >
         Navigate through
         <button onClick={() => navigate('/dashboard')}>Dashboard</button>
         <button onClick={() => navigate('/')}>Landing</button>
      </div>
   );
}

export default App;
