import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashbord from './components/Dashbord'
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashbord" element={<Dashbord />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
