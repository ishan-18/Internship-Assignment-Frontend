
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>

      <Route path="/" element={<Login />}></Route>
     
      <Route path="/register" element={<Register />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>

     
      </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
