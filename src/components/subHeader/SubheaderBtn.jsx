import "./SubHeaderBtn.scss";

const SubHeaderBtn = () => {
  // TODO- btn functionality left only
  return (
    <div className="wrapper">
      <div className="sub-content">
        <div className="heading">
          <div className="">
            <button className="btn btn-trans">How It Works</button>
          </div>
          <h3 className="heading-text">
            <h2>Work smarter</h2>
            <h2>with easy deploys, manages & scales</h2>
          </h3>
        </div>
        {/*  */}
        <div className="btn-container">
          <div>
            <a href="#" className="btn btn-full active">
              01. BUILD
            </a>
          </div>
          <div>
            <a href="#" className="btn btn-full">
              02. STANDARDIZE
            </a>
          </div>
          <div>
            <a className="btn btn-full">03. INNOVATE</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeaderBtn;
