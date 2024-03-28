import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import LoginU from "./pages/Loginuser.jsx";
import PersonalProfile from "./pages/lawyerprofile.jsx"
import LoginL from "./pages/Loginlawyer.jsx"
import LoginIndex from "./pages/LoginIndex.jsx";
import Clientnext from "./pages/Clientnext.jsx";
import Lawyerregister from "./pages/lawyerregister.jsx";
import ClientPost from "./pages/clientpost.jsx";
import Hirelaw from "./pages/hirelawyer.jsx";
import MyPost from "./pages/consultlawyer.jsx";
import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer/UseReducer.js";
import Nav from "./components/Nav.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

export const UserContext = createContext();

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/lawyerprofile" element={<PersonalProfile />} />
      <Route path="/loginIndex" element={<LoginIndex />} />
      <Route path="/loginlawyer" element={<LoginL />} />
      <Route path="/loginuser" element={<LoginU />} />
      <Route path="/clientnext" element={<Clientnext />} />
      <Route path="/hirelaw" element={<Hirelaw />} />
      <Route path="/lawyerregister" element={<Lawyerregister />} />
      <Route path="/clientpost" element={<ClientPost />} />
      <Route path="/mypost" element={<MyPost />} />
      <Route path="/nav/:navId" element={<Nav />} />

      {localStorage.getItem("token") ? (
        <>
          <Route path="/home" element={<Home />} />
        </>
      ) : null}
    </Routes>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <BrowserRouter >
        <UserContext.Provider value={{ state, dispatch }}>
          <Navbar />
          <AppRouter />
          <Footer />
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
