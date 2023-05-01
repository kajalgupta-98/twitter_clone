import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Navbar from "./components/navbar/Navbar";
import { useRecoilValue } from "recoil";
import userLoggedInStatus from "./userLoggedInStatus";
import { fetchTweets } from "./services/tweets";
import { useEffect } from "react";
import { useSetRecoilState } from 'recoil'
import {tweetAtom} from './Recoil/tweets'
function App() {
  const setTweets =useSetRecoilState(tweetAtom)
  useEffect(() => {
    fetchTweets().then((tweets) => {
      setTweets(tweets);
    
    });
  }, []);
  const isUserLoggedIn = useRecoilValue(userLoggedInStatus);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={isUserLoggedIn? <Home />: <Navigate to={"/login"}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      {isUserLoggedIn ? <></> : <Navbar />}
    </div>
  );
}

export default App;
