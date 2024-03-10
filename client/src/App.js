import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/home";
import Login from "./pages/Login";
import PersonalProfile from "./pages/lawyerprofile.jsx"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/lawyerprofile" element={<PersonalProfile />} />
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
