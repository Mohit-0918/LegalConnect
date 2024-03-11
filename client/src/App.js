import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PersonalProfile from "./pages/lawyerprofile.jsx"
import LoginL from "./pages/LoginL.jsx"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/lawyerprofile" element={<PersonalProfile />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/LoginL" element={<LoginL />} />
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
