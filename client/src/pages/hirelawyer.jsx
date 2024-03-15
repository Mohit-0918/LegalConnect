import React from "react";
import jus from "../resources/jus.jpeg"
import draft from "../resources/draft.jpeg"
import reports from "../resources/reports.jpeg"
import "../CSS/hirelawyer.css"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const hirelaw = () => {
  return (
    <div>
    <Navbar/>
    <div className="container">

      <div className="box" style={{backgroundImage: `url(${jus})`}}>
      <div className="content">
      <h1>Wide Range of Legal Services</h1>
      <p>Our platform offers a comprehensive range of legal services, covering various areas of law such as family law, business law, real estate law, and more. Whether you need assistance with drafting legal documents, resolving disputes, or seeking legal advice, our platform connects you with experienced lawyers who can address your specific needs efficiently and effectively.</p>
      </div>
      </div>
      <div className="box" style={{backgroundImage: `url(${draft})`}}>
      <div className="content">
        <h1>Convenience and Accessibility</h1>
        <p>With our online legal service platform, you can access legal assistance anytime, anywhere, from the comfort of your home or office. No need to schedule appointments or travel to law offices. Our user-friendly interface makes it easy to navigate through different legal services, submit inquiries, and communicate with lawyers seamlessly, saving you time and effort.</p>
      </div>
      </div>
      <div className="box" style={{backgroundImage: `url(${reports})`}}>
      <div className="content">
        <h1>Affordable and Transparent Pricing</h1>
        <p>We understand that legal services can be expensive, which is why we strive to make legal assistance more accessible and affordable for everyone. Our platform offers transparent pricing with no hidden fees, allowing you to choose services that fit your budget. Whether you opt for flat-rate packages, hourly consultations, or subscription-based plans, you'll know exactly what you're paying for upfront, giving you peace of mind.</p>
      </div>
      </div>
    </div>
    <Footer/>
    </div>
  );

};

export default hirelaw;

