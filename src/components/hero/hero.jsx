import "./Hero.scss";
// import Navbar from "./Navbar";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <img className="bg-blue" alt="" src="/background6.svg" />
      <div className="hero-left">
        <h1>Build your</h1>
        <h1>audience and</h1>
        <h1>grow your brand</h1>
        <p className="desc">
          --no more, no less. Deploy from our single pane of glass, manage them
          with ease and scale up as fast as your workload grows.
        </p>

        <div className="btn-container">
          <button className="btn btn-primary"> Get Started</button>
          <button className="btn-video">
            <span>Watch Video</span>
            <img src="./video-icon.png" alt="icon" />
          </button>
        </div>
      </div>
      <img className="support-img" src="/grafanatrainingsupport.png" />
    </section>
  );
};

export default Hero;
