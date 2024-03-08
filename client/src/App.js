import './CSS/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import LoginL from './pages/LoginL';
import LoginIndex from './pages/LoginIndex';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginIndex/>}/>
          <Route path="/loginlawyer" element={<LoginL/>}/>
          <Route path="/loginuser" element={<Login/>}/>
          {localStorage.getItem("token") ? (
            <>
              <Route path="/home" element={<Home />} />
            </>
          ) : null}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
