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

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone:"",
    gender:"",
    email: "",
    userType: "",
    password: "",
    errors: {
      firstName: false,
      lastName: false,
      phone:false,
      email: false,
      userType: false,
      password: false,
    },
  });
  const [selectedOption, setSelectedOption] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleOptionChange = (event) => {
    const { value } = event.target;
    setSelectedOption(value);
    setShowInput(value === '1'|| value === '2');
// Show additional inputs if option 1 is selected
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
    await fetch(`http://localhost:5000/api/auth/register`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        const tokenObject = await res.json();
        if (tokenObject.message) {
          navigate("/");
        }

        // navigate("/");
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
    <Container maxWidth="sm" style={{ marginTop: "150px",marginBottom:"80px" }}>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h5" gutterBottom>
          Rregister
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
              <FormControl variant="outlined" fullWidth>
                <InputLabel>Gender</InputLabel>
                <Select
                  label="Gender"
                  name="gender"
                  value={formData.userType}
                  onChange={handleChange}
                  helperText={
                    formData.errors.gender
                      ?  "Please enter select a valid option" : ""
                  }
                >
                  <MenuItem value="1">Male</MenuItem>
                  <MenuItem value="2">Female</MenuItem>
                  <MenuItem value="3">Choose not to disclose</MenuItem>
                </Select>
              </FormControl>
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
            </Grid>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%'}}>
          <select className='form-select w-100' value={selectedOption} onChange={handleOptionChange}>
            <option disabled value="">Select option</option>
            <option value="1">Advocate</option>
            <option value="2">Lawyer</option>
            <option value="3">Paralegal</option>
          </select>
          </div>
          {showInput && (
          <div className='Grids'>
            <Grid container  spacing={2}>
            {selectedOption !== '2' && (
              <Grid item xs={12}>
                <TextField
                  label="BARC"
                  type="Barc"
                  variant="outlined"
                  fullWidth
                  name="Barc"
                  value={formData.barc}
                  onChange={handleChange}
                />
              </Grid>
            )}
            {selectedOption !== '2' && (
              <Grid item xs={12}>
                <TextField
                  label="Pratising area"
                  type="Pratising area"
                  variant="outlined"
                  fullWidth
                  name="Pratising area"
                  value={formData.password}
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
                    <MenuItem value="1">Family Law</MenuItem>
                    <MenuItem value="2">Criminal Law</MenuItem>
                    <MenuItem value="3">Consumer Law</MenuItem>
                    <MenuItem value="4">Business Law</MenuItem>
                    <MenuItem value="5">Labour Law</MenuItem>
                    <MenuItem value="6">Constitutional Law</MenuItem>
                    <MenuItem value="7">Intellectual Law</MenuItem>
                    <MenuItem value="8">Taxation</MenuItem>

                  </Select>
                </FormControl>
            </Grid>
            </Grid>
          </div>
          )}
          
<div className='last'>
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
            </div>



        </form>
      </Paper>
    </Container>
</Container>
  );
};

export default Register;
