import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import '../CSS/clientpost.css';
import BannerBackground from "../resources/home-banner-background.png";
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ClientPost = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    areaoflaw: "",
    title: "",
    question: "",
    city: "",
    state: "",
    pincode: "",
    phonenumber: "",
  });
  const user =useSelector(state=>state.user.currentUser._id);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear validation error when user starts typing again
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Form validation
    const validationErrors = {};
    if (!formData.pincode.match(/^\d{6}$/)) {
      validationErrors.pincode = "PIN code must be 6 digits";
    }
    if (!formData.phonenumber.match(/^\d{10}$/)) {
      validationErrors.phonenumber = "Phone number must be 10 digits";
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    formData.user=user;
    // Convert form data to JSON object
    const jsonData = JSON.stringify(formData);

    try{
      const res=await fetch(`http://localhost:4000/post`,{
        method:"POST",
        body: jsonData,
        headers:{
          "Content-Type":"application/json"
        },
      });
      if(res.ok){
        window.alert("Successfully submited the form")
        navigate("/")
      }else{
        window.alert("Error in submission");
        console.log(res.status);
      }
    }catch(err){
      console.log("Error in Submitting the Data");
    }
    // Log JSON object to console
    console.log(jsonData);
    // You can optionally save the JSON data to a file or send it to a server here
  };

  return (
    <div>
      <Navbar />
      <div className="Container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Select
                name="areaoflaw"
                onChange={handleChange}
                aria-label="Default select example" defaultValue=""
              >
                <option disabled value="">Area of Law</option>
                <option value="Family Law">Family Law</option>
                <option value="Criminal Law">Criminal Law</option>
                <option value="Consumer Law">Consumer Law</option>
                <option value="Business Law">Business Law</option>
                <option value="Labour Law">Labour Law</option>
                <option value="Constitutional Law">Constitutional Law</option>
                <option value="Intellectual Law">Intellectual Law</option>
                <option value="Taxation">Taxation</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" name="title" onChange={handleChange} placeholder="Title" />
              {/* You can add validation error message here if needed */}
            </Form.Group>
            <Form.Group className="AA mb-3">
              <Form.Label>Question</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="question"
                onChange={handleChange}
                placeholder="Question"
              />
              {/* You can add validation error message here if needed */}
            </Form.Group>
            <div className="A">
              <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" name="city" onChange={handleChange} placeholder="City" />
                {/* You can add validation error message here if needed */}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" name="state" onChange={handleChange} placeholder="State" />
                {/* You can add validation error message here if needed */}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>PIN CODE</Form.Label>
                <Form.Control type="text" name="pincode" onChange={handleChange} placeholder="PIN CODE" />
                {errors.pincode && <Form.Text className="text-danger">{errors.pincode}</Form.Text>}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Phone number</Form.Label>
                <Form.Control type="text" name="phonenumber" onChange={handleChange} placeholder="Phone number" />
                {errors.phonenumber && <Form.Text className="text-danger">{errors.phonenumber}</Form.Text>}
              </Form.Group>
              <div className="">
                <button type="submit" className='secondary-button'>Submit</button>
              </div>
            </div>
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ClientPost;
