import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

const Logout = () => {
    const navigate = useNavigate();
    const { state,dispatch } = useContext(UserContext);

    useEffect(() => {
    // Clear localStorage
    localStorage.removeItem("token");
    
    // Dispatch logout action to update user state
    dispatch({ type: "USER",payload:false });

    // Redirect to login page
    navigate("/login");
    }, [dispatch, navigate]);

  return null; // Render nothing
};

export default Logout;
