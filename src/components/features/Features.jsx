import "./Features.scss";
const Features = () => {
  return (
    <div className="wrapper">
      <div className="features">
        <div className="top-content">
          <div className="">
            <button className="btn btn-opacity ">Features</button>
          </div>
          <h2>Save 10000s of expensive coder hours</h2>
        </div>
        {/* first */}
        <div className="box-wrapper">
          <div className="first">
            <img className="dashboard-icon" alt="" src="/dashboard.svg" />
            <div className="content">
              <div className="text-content">
                <h3>Any Developer Happier</h3>
                <p className="para">
                  Context switches are used often, whether you're a DevOps
                  engineer or a full stack developer. To 1000x the developer
                  experience, we're here.
                </p>
              </div>
              <a href="#" className="learn-more">
                Learn More
              </a>
            </div>
          </div>
          {/* second */}
          <div className="second">
            <img className="icon-two" alt="" src="/icon3.svg" />
            <div className="second-bg" />
            <div className="content">
              <div className="text-content">
                <h3>Speed up delivery</h3>
                <p className="para">
                  Spend less time understanding, communicating, and managing
                  DevOps resources. Make time-consuming chores a one-click
                  operation.
                </p>
              </div>
              <a href="#" className="learn-more active">
                Learn More
              </a>
            </div>
          </div>
          {/* third */}
          <div className="third">
            <img className="icon-two" alt="" src="/icon4.svg" />
            <div className="content">
              <div className="text-content">
                <h3>Excellence & Compliance</h3>
                <p className="para">
                  Set the requirements for compliance and software quality using
                  scorecards, golden pathways, and other tools. Create change by
                  creating standards.
                </p>
              </div>
              <a href="#" className="learn-more">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
