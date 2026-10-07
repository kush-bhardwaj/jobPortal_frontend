import './index.css'
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './assets/components/Forms/Signup';
import Main from './assets/components/Main/Main';
import Dashboard from './assets/components/Dashboard/Dashboard';
import DashboardJobs from './assets/components/Dashboard/DashboardMenu';
import JobDetails from './assets/components/Jobs/SingleJobs';
// ho gya lodu
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />}>
            <Route path='job/:id' element={<JobDetails />}></Route>
          </Route>

          <Route path='/register' element={<Signup />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
