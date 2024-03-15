import React from "react";
import dsa from "../resources/ask (1).png";
import reshot from "../resources/reshot.png";
import consul from "../resources/ask (3).png";


const Work = () => {
  const workInfoData = [
    {
      image:reshot,
      title: "Hire your lawyer",
      text: "Send a legal notice, review a legal document, cases  etc.",
      button:"Get Lawyer"

    },
    {
      image:dsa,
      title: "Ask a Question",
      text: "Get legal answers from lawyers. It’s quick, easy, and anonymous!",
      button:"Get advice"
    },
    {
      image:consul,
      title: "Consult Laywer",
      text: "Schedule a 15-minute call with a lawyer.It’s quick, easy, and confidential!",
     button:"Consult"
    },
  ];

       
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Application</p>
        <h1 className="primary-heading">Options You Have</h1>
        <p className="primary-text">
          Choose what you want to do.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
             
            <h2>{data.title}</h2>
            <p>{data.text}</p>
            <button className="secondary-button">{data.button} </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;