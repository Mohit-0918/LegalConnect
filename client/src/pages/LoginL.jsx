import { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const LoginL = () => {
  const navigate = useNavigate();
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const [lawyerCredentials, setLawyerCredentials] = useState({
    email: "",
    password: "",
  });

  const handleUserLogin = async (e) => {
    // Handle user login logic
    e.preventDefault();
    console.log(userCredentials);

    // eslint-disable-next-line no-undef
    await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      body: JSON.stringify(userCredentials),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        const tokenObject = await res.json();
        localStorage.setItem("token", tokenObject.token);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLawyerLogin = async (e) => {
    // Handle lawyer login logic
    e.preventDefault();

    // eslint-disable-next-line no-undef
    await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      body: JSON.stringify(lawyerCredentials),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        const tokenObject = await res.json();
        localStorage.setItem("token", tokenObject.token);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Container maxWidth="lg" style={{ marginTop: "250px" }}>
        <Grid container spacing={3} style={{display:"flex" ,justifyContent:"center"}}>
          {/* User Panel */}
          <Grid item xs={6} >
            <Paper elevation={3} style={{ padding:"20px",
      borderRadius: '16px',
      width: '80%',
      height: '120%'}}>
              <Typography variant="h5" gutterBottom>
                Lawyer Login
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
                style={{backgroundColor:"#f7c10f",display:"flex",margin:"auto",justifySelf:"center",alignSelf:"center"}}
              >
                Login
              </Button>
            </Paper>
          </Grid>

          {/* Lawyer Panel */}
          {/* <Grid item xs={6}>
            <Paper elevation={3} style={{ padding: "20px" }}>
              <Typography variant="h5" gutterBottom>
                Lawyer Login
              </Typography>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                margin="normal"
                value={lawyerCredentials.username}
                onChange={(e) =>
                  setLawyerCredentials({
                    ...lawyerCredentials,
                    username: e.target.value,
                  })
                }
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                value={lawyerCredentials.password}
                onChange={(e) =>
                  setLawyerCredentials({
                    ...lawyerCredentials,
                    password: e.target.value,
                  })
                }
              />
              <Grid item xs={12} style={{ margin: "10px" }}>
                <Link to="/register">Not Registered?</Link>
              </Grid>
              <Button
                variant="contained"
                color="primary"
                onClick={handleLawyerLogin}
              >
                Login
              </Button>
            </Paper>
          </Grid> */}
        </Grid>
      </Container>
    </>
  );
};

export default LoginL;
