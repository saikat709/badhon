// import logo from './logo.svg';
import './App.css';

import BasicRoutes from './routes/BasicRoutes';
import React from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FecthProvider } from './context/hooks/usefetch';
import { AuthPovider } from './context/hooks/useAuth';

function App() {

  return (
    <AuthPovider>
      <FecthProvider>
        <div>
          <BasicRoutes />
          <ToastContainer />
        </div>
      </FecthProvider>
    </AuthPovider>
  );
}

export default App;
