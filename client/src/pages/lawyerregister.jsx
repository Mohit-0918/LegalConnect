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
    email: "",
    userType: "",
    password: "",
    confirmPassword: "",
  });
   const [selectedOption, setSelectedOption] = useState('');
  const [showInput, setShowInput] = useState(false);

  const handleOptionChange = (event) => {
    const { value } = event.target;
    setSelectedOption(value);
    setShowInput(value === '1'|| value === '2');
// Show additional inputs if option 1 is selected
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
     <Container maxWidth="sm" style={{ marginTop: "200px" }}>
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
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone"
                variant="outlined"
                fullWidth
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
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel>Gender</InputLabel>
                <Select
                  label="Gender"
                  name="Gender"
                  value={formData.userType}
                  onChange={handleChange}
                >
                  <MenuItem valufee="Male">Male</MenuItem>
                  <MenuItem value="Female">Female
                  </MenuItem>
                  <MenuItem value="Choose not to discose">Choose not to disclose
                  </MenuItem>
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
      <TextField
        label="Case Category"
        type="Case Category"
        variant="outlined"
        fullWidth
        name="Case Category"
        value={formData.password}
        onChange={handleChange}
      />
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
