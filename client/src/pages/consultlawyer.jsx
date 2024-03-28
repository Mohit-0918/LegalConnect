import React from "react";
import Form from "react-bootstrap/Form";
import '../CSS/clientpost.css';
import BannerBackground from "../resources/home-banner-background.png"
import Navbar from '../components/Navbar';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../components/Footer";

// Import the CSS file



const MyPost = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({//use te new names @garima
    areaoflaw: "",
    title: "",//new name:title
    question: "",//question
    city: "",//city
    state: "",//state
    pincode: "",//pincode
    phonenumber: "",//phonenumber
  });
  const [selectedOption, setSelectedOption] = useState('');
  const [showInput, setShowInput] = useState(false);

  const handleOptionChange = (event) => {
    const { value } = event.target;
    setSelectedOption(value);
    setShowInput(value === '1' || value === '2');
    // Show additional inputs if option 1 is selected
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="Container">
      <div className="home-bannerImage-container">
        <img src={BannerBackground} alt="" />
      </div>
      <div>
        <Form>
          <Form.Group className="mb-3">
            <Form.Select //make this changes like adding name and onchange function to every  select field
              name="areaoflaw"
              onChange={handleChange}
              aria-label="Default select example" defaultValue="">
              <option disabled value="">Area of Law</option>
              <option value="1">Family Law</option>
              <option value="2">Criminal Law</option>
              <option value="3">Consumer Law</option>
              <option value="1">Business Law</option>
              <option value="1">Labour Law</option>
              <option value="1">Constitutional Law</option>
              <option value="1">Intellectual Law</option>
              <option value="1">Taxation </option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">

            <Form.Label></Form.Label>
            <Form.Control type="title" name="title" onChange={handleChange} placeholder="Title " />
            <Form.Text muted>
              contain letters and numbers, and must not contain spaces,
              special characters, or emoji.
            </Form.Text>
          </Form.Group>

          <Form.Group className="AA mb-3">
            <Form.Label></Form.Label>
            <Form.Control
              as="textarea"
              rows={3} // Set the number of rows as needed
              name="question"
              onChange={handleChange}
              placeholder="Question"
            />
            <Form.Text muted>
              Contain letters and numbers, and must not contain spaces,
              special characters, or emoji.
            </Form.Text>
          </Form.Group>
          <div className="A">
            <Form.Group className="mb-3">
              <Form.Label></Form.Label>
              <Form.Control type="city" name="city" onChange={handleChange} placeholder=" City" />
              <Form.Text muted>
                contain letters and numbers, and must not contain spaces,
                special characters, or emoji.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label></Form.Label>
              <Form.Control type="state" name="state" onChange={handleChange} placeholder="State" />
              <Form.Text muted>
                contain letters and numbers, and must not contain spaces,
                special characters, or emoji.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label></Form.Label>
              <Form.Control type="pincode" name="pincode" onChange={handleChange} placeholder="PIN CODE" />
              <Form.Text muted>
                contain letters and numbers, and must not contain spaces,
                special characters, or emoji.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label></Form.Label>
              <Form.Control type="phonenumber" name="phonenumber" onChange={handleChange} placeholder="Phone number" />
              <Form.Text muted>
                contain letters and numbers, and must not contain spaces,
                special characters, or emoji.
              </Form.Text>
            </Form.Group>

            <div className="">
              <button className='secondary-button'>Submit</button>
            </div>
          </div>
        </Form>

      </div>
    </div>



  )

};

export default MyPost;
