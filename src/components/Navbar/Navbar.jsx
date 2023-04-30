import "./navbar.css";
const Navbar = () => {
  return (
    <nav className="container">
      <div className="navbar">
        <div className="nav-items">
          <span className="item">Home </span>
          <span className="item">About </span>
          <span className="item">Features</span>
          {/*  down icon left */}
          <span className="item">Pages </span>
          <span className="item">Blog</span>
          <span className="item"> Cart (0)</span>
        </div>
      </div>
      <button className="btn btn-gray util">Sign In</button>
    </nav>
  );
};

export default Navbar;
