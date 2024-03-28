// Clientnext.jsx

import { React, useState } from 'react';
import BannerBackground from "../resources/home-banner-background.png"

import img1 from '../resources/client-image.jpg';
import '../CSS/Clientnext.css'; // Import the CSS file
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';

const Clientnext = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [showInput, setShowInput] = useState(false);

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    if (value === "2") {
      setShowInput(true);
    } else {
      setShowInput(false);
    }
  };
  return (
    <div className='leadcontainer'>
      <div>
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className='container'>
          <div className='container2'>
            <div className='maincontainer'>
              <div className='cardshadow1'>
                <div className='row'>
                  <div className='col-lg-3'>
                    <img src={img1} alt='' className='rounded-circle m-3 card-img' style={{ width: '100px', height: '100px' }} />
                    <p className='m-2 h2 card-title' style={{ fontSize: '2.0rem', padding: '20px' }}>Client Name</p>
                  </div>
                  <div className='col-lg-9' style={{ maxHeight: '200px', overflowY: 'scroll', }}>
                    <textarea className='input' type='text' placeholder='' style={{ width: '600px', height: '200px' }}></textarea>
                  </div>
                </div>
              </div>
              <div className='cardshadow2'>
                <div className='row'>
                  <div className='col-lg-3'>
                    <img src={img1} alt='' className='rounded-circle m-3 card-img' style={{ width: '100px', height: '100px' }} />
                    <p className='m-3 h3 card-title' style={{ fontSize: '1.8rem' }}>Lawyer Name</p>
                  </div>
                  <div className='col-lg-9' style={{ maxHeight: '200px', overflowY: 'scroll', }}>
                    <textarea className='input1' type='text' placeholder='Type your Advise' style={{ width: '600px', height: '200px' }}></textarea>
                  </div>
                </div>
              </div>
              <div className='cardshadow3'>
                <p className='h3 payment-mode'>Payment Mode</p>
                <div>
                  <select className='form-select w-100' value={selectedOption} onChange={handleOptionChange}>
                    <option disabled value="">Select option</option>
                    <option value="1">Date-wise payment</option>
                    <option value="2">One time payment</option>
                  </select>
                  {showInput && (
                    <input className='input2' type='text' placeholder='Amount' />
                  )}
                </div>
                <div className='text-center'>
                  <button type="button" className='btn text-white'>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Clientnext;
