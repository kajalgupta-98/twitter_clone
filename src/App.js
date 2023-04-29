import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Navbar from "./components/navbar/Navbar"
import { useRecoilValue } from 'recoil';
import userLoggedInStatus from './userLoggedInStatus';
function App() {
  const isUserLoggedIn = useRecoilValue(userLoggedInStatus)
  return (
  
   <div className ='App'>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
     </Routes>
     {isUserLoggedIn? <></> :  <Navbar/>}
   
     </div>
    

  );
}

export default App;
