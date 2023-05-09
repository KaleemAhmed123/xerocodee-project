import SubHeaderBtn from "../subHeader/SubheaderBtn";
import "./howItWorks.scss";

const HowItWork = () => {
  return (
    <div className="how-it-works">
      <SubHeaderBtn />
      <div className="wrapper">
        <div className="build">
          <div className="left">
            <div className="profile">
              <img src="/icon.svg" alt="profile icon" />
              <h3>Build Infrastructure Automation</h3>
            </div>
            <p className="para">
              Infrastructure automation process is used by IT operations and
              development teams to compose, collaborate, reuse, and provision
              infrastructure as code.
            </p>
            <button className="btn btn-black">Get Started</button>
          </div>
          <div className="right">
            <img className="image-icon1" alt="" src="/image1@2x.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
