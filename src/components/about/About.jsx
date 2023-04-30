import "./about.css";
const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="left-wrapper">
        <div className="left-content">
          {/*  */}
          <div className="heading-container">
            <h2>Powerful and easy to use</h2>
            <h2>saas deploy platform</h2>
          </div>
          <p className="para">
            Effortlessly deploy your saas with a powerful platform that
            simplifies the process and maximizes your potential.
          </p>
          {/*  */}
          {/*  */}
          <div className="cost-effective">
            <img className="icon" alt="" src="/icon1.svg" />
            <div className="content-box">
              <h3>Cost Effective</h3>
              <p className="para">
                Deploy your applications in the cloud with cost-effective
                solutions that optimize your budget and performance.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="cost-effective">
            <img className="icon" alt="" src="/icon2.svg" />
            <img className="icon-sm" alt="" src="/841345-1@2x.png" />
            <div className="content-box">
              <h3>Scale Anywhere</h3>
              <p className="para">
                Scale your application automatically and seamlessly across any
                infrastructure with ease and efficiency.
              </p>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
      <img className="right-img" alt="" src="/3-1@2x.png" />
    </section>
  );
};

export default AboutUs;
