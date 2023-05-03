import "./subHeaderBtn.css";

const SubHeaderBtn = () => {
  return (
    <div className="sub-content">
      <div className="heading">
        <button className="btn">
          <div className="btn-child" />
          <b className="btn-text">How It Work</b>
        </button>
        <h3 className="heading-text">
          <h2>Work smarter</h2>
          <h2>with easy deploys, manages & scales</h2>
        </h3>
      </div>
      {/*  */}
      <div className="btn-container">
        <a href="#" className="btn-full active">
          <b className="create-account">01. BUILD</b>
        </a>
        <a href="#" className="btn-full">
          <b className="standardize">02. STANDARDIZE</b>
        </a>
        <a href="#" className="btn-full">
          <b className="track-analytics">03. INNOVATE</b>
        </a>
      </div>
    </div>
  );
};

export default SubHeaderBtn;
