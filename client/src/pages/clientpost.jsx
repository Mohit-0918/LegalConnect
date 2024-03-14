import React from "react";
import Form from "react-bootstrap/Form";
import '../CSS/clientpost.css';
import BannerBackground from "../resources/home-banner-background.png"
import Navbar from '../components/Navbar';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../components/Footer";

// Import the CSS file



const ClientPost = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    areaoflaw: "",
    questiontitle: "",
    typeyourquestionhere: "",
    mycity: "",
    mystate: "",
    pincode: "",
    myphonenumberOptional: "",
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
    return(
      <div>
           <Navbar/>
      <div className="Container">
        <div className="home-bannerImage-container">
        <img src={BannerBackground} alt="" />
      </div>
        <div>
        <Form>
            <Form.Group className="mb-3">
              <Form.Label></Form.Label>
              <Form.Select aria-label="Default select example" defaultValue="">
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
              <Form.Control type="email" placeholder="Question title" />
              <Form.Text muted>
                contain letters and numbers, and must not contain spaces,
                special characters, or emoji.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label></Form.Label>
              <Form.Control type="email" placeholder="Type your question here." />
              <Form.Text muted>
                contain letters and numbers, and must not contain spaces,
                special characters, or emoji.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label></Form.Label>
              <Form.Control type="email" placeholder=" My city" />
              <Form.Text muted>
                contain letters and numbers, and must not contain spaces,
                special characters, or emoji.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label></Form.Label>
              <Form.Control type="email" placeholder=" My State" />
              <Form.Text muted>
                contain letters and numbers, and must not contain spaces,
                special characters, or emoji.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label></Form.Label>
              <Form.Control type="email" placeholder="PIN CODE" />
              <Form.Text muted>
                contain letters and numbers, and must not contain spaces,
                special characters, or emoji.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label></Form.Label>
              <Form.Control type="email" placeholder="My phone number.Optional" />
              <Form.Text muted>
                contain letters and numbers, and must not contain spaces,
                special characters, or emoji.
              </Form.Text>
            </Form.Group>

            <div className="">
            <button className='secondary-button'>Submit</button>
            </div>
          </Form>
    </div>
    </div>
    <Footer/>
    </div>



    )

};

export default ClientPost;
