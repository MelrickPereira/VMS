
import './App.css';
import Login from '../src/Login/Login'
import About from '../src/About/About';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Register from './Login/Register';
import Showroom from './Showroom/Showroom';
import BMWpage from './BrandPages/BMWpage';
import Admin from './Admin/Admin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
  
  <Routes>
    <Route path="/VMS" element={<> <About /> </>} />
    <Route path="/login" element={<> <Login /> </>} />
    <Route path="/register" element={<> <Register /> </>} />
    <Route path="/showroom" element={<> <Showroom /> </>} />
    <Route path="/showroom/bmw" element={<> <BMWpage /> </>} />
    <Route path="/Admin" element={<> <Admin /> </>} />
  
   
  </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
