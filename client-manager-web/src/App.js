import NavBar from './navbar';
import { Routes, Route } from 'react-router-dom';
import { config } from './utils/configLoader';
import Dashboard from './dashboard';
import Clients, { Client } from './clients';
import './App.css';

function App() {
  return (
    <>
      <NavBar links={config.navlinks} />
      <div className="App">
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path="/client/*" element={<Client />} />
          <Route path="/clients" element={<Clients />} />
          <Route path='/' exact element={null} />
        </Routes>
      </div>
    </>
  );
}

export default App;
