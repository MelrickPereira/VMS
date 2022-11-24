
import './App.css';
import Login from '../src/Login/Login'
import About from '../src/About/About';
import {BrowserRouter,Route,Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
  
  <Routes>
    <Route path="/" element={<> <About /> </>} />
    <Route path="/login" element={<> <Login /> </>} />
  
   
  </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
