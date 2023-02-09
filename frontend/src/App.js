// import logo from './logo.svg';
import './App.css';
import {BrowserRouter  as Router ,Routes ,Route } from "react-router-dom";
import Navbar from './components/navbar';
import GetDoctors from './components/getDoctors';
import GetPatients from './components/getPatients';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <div className='routes'>
            <Routes>
              <Route path="/doctors" element={<GetDoctors/>}/>
              <Route path="/patients" element={<GetPatients/>}/>
            </Routes>
          </div>
      </Router>
    </div>
    
  );
}

export default App;
