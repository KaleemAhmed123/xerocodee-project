import React from "react";
import SubHeaderBtn from "../subHeader/SubheaderBtn";
import { testimomialHeader } from "../../const/data";
const Testimonials = () => {
  const { name, heading } = testimomialHeader;
  return (
    <div className="wrapper">
      <div className="testimonials">
        {/*  */}
        <div className="header">
          <div className="btn btn trans">Testimonials</div>
          <h2 className="">Trusted by millions of creator</h2>
          <h2 className="">"</h2>
        </div>
        {/*  */}
        <div className="testimonial-text">
          <button className="btn">X</button>
          <p className="para">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage .
          </p>
          <button className="btn">X</button>
        </div>
        {/*  */}
        <div className="user">
          <img src="/user.png" alt="user img" />
          <h3>Kaleem Ahmed</h3>
          <h4>Engineer</h4>
          <div className="stars">
            <span>*</span>
            <span>*</span>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default Testimonials;
