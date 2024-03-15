import { useState } from "react";
import BannerBackground from "../resources/home-banner-background.png";
import {
  Container,
  Paper,
  Grid,
  TextField,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    errors: {
      email: false,}
  });

  const [passwordError, setPasswordError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      const isValid = validateEmail(value);
      setFormData({
        ...formData,
        errors: {
          ...formData.errors,
          email: !isValid,
        },
      });
    }
  };
  const validateEmail = (email) => {
    // Regular expression to match email format
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emptyFields = Object.keys(formData).filter((key) => formData[key] === "");

    // Set error state for empty fields
    if (emptyFields.length > 0) {
      const updatedErrors = {};
      emptyFields.forEach((field) => {
        updatedErrors[field] = true;
      });
      setFormData((prevData) => ({
        ...prevData,
        errors: { ...prevData.errors, ...updatedErrors },
      }));
      return;
    }
    await fetch(`http://localhost:4000/register`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        const tokenObject = await res.json();
        if (res.status===200) {
          navigate("/loginIndex");
        }else if (res.status === 400) {
          setErrorMessage(tokenObject.message);
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
     <Container maxWidth="sm" style={{ marginTop: "200px" }}>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h5" gutterBottom>
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="name"
                variant="outlined"
                fullWidth
                name="name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={formData.errors.email}
                helperText={
                formData.errors.email ? "Please enter a valid email address" : ""
              }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                name="password"
                value={formData.password}
                onChange={handleChange}
                helperText={
                  formData.errors.password
                    ?  "Please enter password" : ""
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Confirm Password"
                type="password"
                variant="outlined"
                fullWidth
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                onBlur={() => setPasswordError(formData.password !== formData.confirmPassword)}
                error={passwordError}
                helperText={passwordError ? "Passwords do not match" : ""}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                // color="primary"
                fullWidth
                style={{backgroundColor:"#f7c10f"}}
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </form>

        {errorMessage && (
          <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
            <Typography variant="body1">{errorMessage}</Typography>
            {/* Optionally, include a login button */}
            <Button
              variant="contained"
              onClick={() => {
                // Handle login button click
              }}
            >
              Login
            </Button>
          </Paper>
        )}


      </Paper>
    </Container>
 </Container>
  );
};

export default Register;
