import './CSS/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/home";
import Login from "./pages/Login";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />

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
