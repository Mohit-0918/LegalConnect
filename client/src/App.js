import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import LoginU from "./pages/Loginuser.jsx";
import PersonalProfile from "./pages/lawyerprofile.jsx"
import LoginL from "./pages/Loginlawyer.jsx"
import LoginIndex from "./pages/LoginIndex.jsx";
import Clientnext from "./pages/Clientnext.jsx";
import Lawyerregister from "./pages/lawyerregister.jsx";
import Post from "./pages/clientpost.jsx";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/lawyerprofile" element={<PersonalProfile />} />
          <Route path="/loginIndex" element={<LoginIndex />} />
          <Route path="/loginlawyer" element={<LoginL />} />
          <Route path="/loginuser" element={<LoginU />} />
          <Route path="/clientnext" element={<Clientnext />} />
          <Route path="/lawyerregister" element={<Lawyerregister/>} />
          <Route path="/post" element={<Post/>} />

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
