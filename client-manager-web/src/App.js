import NavBar from './navbar';
import { config } from './utils/configLoader';
import './App.css';

function App() {
  return (
    <>
      <NavBar links={config.navlinks} />
      <div className="App">
      </div>
    </>
  );
}

export default App;
