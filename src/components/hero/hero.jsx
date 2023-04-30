import "./hero.css";
import Navbar from "../navbar/Navbar";
const Hero = () => {
  return (
    <section className="hero">
      <Navbar />
      <div className="hero-left">
        <div className="content">
          <h3 className="logo"> XeroCodee</h3>
          <h1>Build your</h1>
          <h1>audience and</h1>
          <h1>grow your brand</h1>
          <p className="desc">
            --no more, no less. Deploy from our single pane of glass, manage
            them with ease and scale up as fast as your workload grows.
          </p>
        </div>

        <div className="btn-container">
          <div className="btn btn-primary">
            <a>Get Started</a>
          </div>
          <div className="video-button">
            <button className="watch-video">
              <b className="watch-text">Watch Video</b>
              <div className="video">
                <img src="./video-icon.png" alt="icon" />
              </div>
            </button>
          </div>
        </div>
      </div>
      <img className="support-img" alt="" src="/grafanatrainingsupport.png" />
      <img className="bg-blue" alt="" src="/background6.svg" />
    </section>
  );
};

export default Hero;
