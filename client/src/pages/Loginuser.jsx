import { useState ,useContext} from "react";
import BannerBackground from "../resources/home-banner-background.png";
import {
  Container,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { loginFailure, loginStart, loginSuccess } from "../redux/userslice";
import { useDispatch } from "react-redux";


const Login = () => {
  const dispatch =useDispatch();
  const navigate = useNavigate();
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");


  const handleUserLogin = async (e) => {
    // Handle user login logic
    e.preventDefault();
    dispatch(loginStart())
    //console.log(userCredentials);
    await fetch(`http://localhost:4000/loginuser`, {
      method: "POST",
      body: JSON.stringify(userCredentials),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (res) => {
      if (res.status === 200) {
        const userData = await res.json();
        dispatch(loginSuccess(userData))
        localStorage.setItem("token", userData.token);
        navigate("/");
      } else if (res.status === 403) { // If user not found
        setErrorMessage("Invalid username or password");
      } else {
        dispatch(loginFailure());
        // Check if response is JSON
        const contentType = res.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          // Valid JSON response, parse it
          const errorData = await res.json();
          setErrorMessage(errorData.message || "An error occurred");
        } else {
          // Invalid JSON response, handle gracefully
          setErrorMessage("An error occurred");
        }
      }
    })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
        <Container>
          <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
          <Container maxWidth="lg" style={{  marginTop: "230px", width: "100%", display: "flex", justifyContent: "center", marginLeft: "auto" }}>
        <Grid container spacing={3} style={{display:"flex " ,justifyContent:"center",alignItems:"center", marginLeft:"70px"}}>
          {/* User Panel */}
          <Grid item xs={6} >
            <Paper elevation={3} style={{
              padding:"20px",
      borderRadius: '16px',
      width: '80%',
      height: '120%'
    }}>
              <Typography variant="h5" gutterBottom>
                User Login
              </Typography>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={userCredentials.email}
                onChange={(e) =>
                  setUserCredentials({
                    ...userCredentials,
                    email: e.target.value,
                  })
                }
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                value={userCredentials.password}
                onChange={(e) =>
                  setUserCredentials({
                    ...userCredentials,
                    password: e.target.value,
                  })
                }
              />
              <Grid item xs={12} style={{ margin: "10px" }}>
                <Link to="/register">Not Registered?</Link>
              </Grid>
              <Button
                variant="contained"
                // color="primary"
                onClick={handleUserLogin}
                style={{backgroundColor:"#f7c10f",display:"flex",margin:"auto"}}
              >
                Login
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      {errorMessage && (
        <div className="popup">
          <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
            <Typography variant="body1">{errorMessage}</Typography>
          </Paper>
        </div>
      )}
        </Container>
  
  );
}

export default Login;
