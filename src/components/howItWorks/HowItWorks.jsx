import SubHeaderBtn from "../subHeader/SubheaderBtn";
import "./howItWorks.css";

const HowItWork = () => {
  return (
    <div className="how-it-work1">
      <SubHeaderBtn />{" "}
      <div className="content9">
        {" "}
        <div className="content10">
          {" "}
          <div className="content11">
            {" "}
            <div className="content12">
              {" "}
              <img className="icon3" alt="" src="/icon.svg" />{" "}
              <h4 className="build-infrastructure-automatio-container">
                {" "}
                <p className="build-infrastructure">
                  Build Infrastructure
                </p>{" "}
                <p className="build-infrastructure"> {`Automation `}</p>{" "}
              </h4>{" "}
            </div>{" "}
            <p className="infrastructure-automation-proc">
              {" "}
              Infrastructure automation process is used by IT operations and
              development teams to compose, collaborate, reuse, and provision
              infrastructure as code.{" "}
            </p>{" "}
          </div>{" "}
          <button className="button8">
            {" "}
            <b className="get-started2">Get Started</b>{" "}
          </button>{" "}
        </div>{" "}
        <img className="image-icon1" alt="" src="/image1@2x.png" />{" "}
      </div>{" "}
    </div>
  );
};

export default HowItWork;
