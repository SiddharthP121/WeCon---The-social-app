import "./App.css";
import Signup from "./Components/Signup"; ;
import Login from "./Components/Login";
import Home from "./Components/Home"; 
import Notifications from "./Components/Notifications";
import Search from "./Components/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/notifications" element={<Notifications />}/>
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
