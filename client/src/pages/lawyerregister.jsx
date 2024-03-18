import { useState } from "react";
import { Grid, TextField, Select, MenuItem } from '@mui/material';
import BannerBackground from "../resources/home-banner-background.png";
import '../CSS/lawreg.css';
import {
  Container,
  Paper,
  Button,
  Typography,
  FormControl,
  InputLabel,

} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';

const Register = () => {
  const navigate = useNavigate();
  const confirmPassword=useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedOption, setSelectedOption] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [Option, setOption] = useState('');

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone:"",
    gender:"",
    email: "",
    userType: "",
    password: "",
    confirmPassword: "",
    barc:"",
    practisingarea:"",
    caseCategory: "",
    errors: {
      firstName: false,
      lastName: false,
      phone:false,
      email: false,
      userType: false,
      password: false,
      barc:false,
    practisingarea:false,
    caseCategory: false,
    },
  });
  // Handle form data changes

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  }

  const handleOptionChange = (event) => {
    const { value } = event.target;
    setSelectedOption(value);
    setShowInput(value === 'Advocate'|| value === 'Lawyer');
    setFormData({
      ...formData,
      userType: value,
      // You can add more fields to formData if needed
    });
  };
  const handlGenderChnange =(e)=>{
    const {value}=e.target;
    setOption(value);
    setFormData({
      ...formData,
      gender: value,
    });
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
    } else if (name === "phone") {
      const isValid = validatePhone(value);
      setFormData({
        ...formData,
        errors: {
          ...formData.errors,
          phone: !isValid,
        },
      });
    }
  };

  const validateEmail = (email) => {
    // Regular expression to match email format
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {  
    // Regular expression to match only numbers
    const regex = /^[0-9]*$/;
    return regex.test(phone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const requiredFields = ["firstName", "lastName", "phone", "email", "password", "gender", "userType"]; // Add field names you want to check for emptiness
  
    const emptyFields = Object.keys(formData)
      .filter(key => requiredFields.includes(key)) // Filter only required fields
      .filter(key => formData[key] === ""); // Filter empty fields
  
    if (emptyFields.length > 0) {
      const updatedErrors = {};
      emptyFields.forEach(field => {
        updatedErrors[field] = true;
      });
      setFormData(prevData => ({
        ...prevData,
        errors: { ...prevData.errors, ...updatedErrors }
      }));
      return;
    }
  
    const name = `${formData.firstName} ${formData.lastName}`;
    const { firstName, lastName, errors, ...formDataWithoutName } = formData;
    // Create a new formData object with combined name
    const combinedFormData = {
      ...formDataWithoutName,
      name: name.trim(), // Trim any leading/trailing spaces
    };
    console.log(JSON.stringify(combinedFormData));
    try {
      const response = await fetch(`http://localhost:4000/lawyerregister`, {
        method: "POST",
        body: JSON.stringify(combinedFormData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const tokenObject = await response.json();
      if (response.status === 200) {
        setSuccessMessage("Registration successful!");
        setOpenSnackbar(true);
        navigate("/loginIndex");
      } else if (response.status === 400) {
        setErrorMessage(tokenObject.message);
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
<Container>
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
    <Container maxWidth="sm" style={{ marginTop: "150px",marginBottom:"80px" }}>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h5" gutterBottom>
          Rregister As A Lawyer
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="First Name"
                variant="outlined"
                fullWidth
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                helperText={
                  formData.errors.firstName
                    ?  "Please enter name" : ""
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Last Name"
                variant="outlined"
                fullWidth
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                helperText={
                  formData.errors.lastName
                    ?  "Please enter name" : ""
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              label="Phone"
              variant="outlined"
              fullWidth
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              error={formData.errors.phone}
              helperText={
                formData.errors.phone ? "Please enter a valid phone number" : ""
              }
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
            <FormControl variant="outlined" fullWidth>
              <TextField
                select
                label="Gender"
                name="gender"
                value={Option}
                onChange={handlGenderChnange}
                variant="outlined"
              >
                <MenuItem value="" disabled>
                  Gender
                </MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="No Disclosure">Choose Not To Disclose</MenuItem>
              </TextField>
            </FormControl>
            </Grid>
            <Grid item xs={12}>
            <FormControl variant="outlined" fullWidth >
            <TextField
              select
              value={selectedOption}
              onChange={handleOptionChange}
              className="form-select"
              name="userType"
              label="User Type"
            >
              <MenuItem value="" disabled>
                Select option
              </MenuItem>
              <MenuItem value="Advocate">Advocate</MenuItem>
              <MenuItem value="Lawyer">Lawyer</MenuItem>
              <MenuItem value="Paralegal">Paralegal</MenuItem>
            </TextField>
          </FormControl>
          {showInput && (
            <Grid container  spacing={2}>
            {selectedOption !== "Lawyer" && (
              <Grid item xs={12}>
                <TextField
                  label="BARC"
                  type="Barc"
                  variant="outlined"
                  fullWidth
                  name="barc"
                  style={{marginTop:"20px"}}
                  value={formData.barc}
                  onChange={handleChange}
                />
              </Grid>
            )}
            {selectedOption !== "Lawyer" && (
              <Grid item xs={12}>
                <TextField
                  label="Pratising area"
                  type="Pratising area"
                  variant="outlined"
                  fullWidth
                  name="practisingarea"
                  value={formData.practisingarea}
                  onChange={handleChange}
                />
              </Grid>
            )}
            <Grid item xs={12}>
            <FormControl variant="outlined" fullWidth>
                  <InputLabel id="case-category-label">Case Category</InputLabel>
                  <Select
                    labelId="case-category-label"
                    id="case-category-select"
                    label="Case Category"
                    value={formData.caseCategory}
                    onChange={handleChange}
                    name="caseCategory"
                  >
                    <MenuItem value="">Select Case Category</MenuItem>
                      <MenuItem value="Family Law">Family Law</MenuItem>
                      <MenuItem value="Criminal Law">Criminal Law</MenuItem>
                      <MenuItem value="Consumer Law">Consumer Law</MenuItem>
                      <MenuItem value="Business Law">Business Law</MenuItem>
                      <MenuItem value="Labour Law">Labour Law</MenuItem>
                      <MenuItem value="Constitutional Law">Constitutional Law</MenuItem>
                      <MenuItem value="Intellectual Property Law">Intellectual Property Law</MenuItem>
                      <MenuItem value="Taxation Law">Taxation Law</MenuItem>
                  </Select>
                </FormControl>
            </Grid>
            </Grid>
          
          )}
            </Grid>
            
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                // color="primary"
                fullWidth
                style={{backgroundColor:"#f7c10f"}}
              >
                Rregister
              </Button>
            </Grid>
          </Grid>
        </form>
        <Snackbar
            open={openSnackbar}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
            message={successMessage}
          />

          {errorMessage && (
            <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
              <Typography variant="body1">{errorMessage}</Typography>
              
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
