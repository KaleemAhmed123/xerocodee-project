import "./Navbar.scss";
const Navbar = () => {
  return (
    <nav className="container">
      {/*  */}
      <div className="navbar">
        {/* one */}
        <h2>XeroCodee</h2>
        {/* two */}
        <div className="nav-wrapper">
          <div className="nav-items">
            <a className="item">Home </a>
            <a className="item">About </a>
            <a className="item">Features</a>
            {/*  down icon left */}
            <a className="item">Pages </a>
            <a className="item">Blog</a>
            <a className="item"> Cart(0)</a>
          </div>
          <div>
            <button className="btn btn-white">Sign In</button>
          </div>
        </div>
        {/* three */}
        {/*  */}
      </div>
    </nav>
  );
};

export default Navbar;
