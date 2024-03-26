import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <ul className="nav-bar">
        <li><Link className="navbar-link" to='/'>Home</Link></li>
        <li><Link className="navbar-link" to='/about'>About</Link></li>
        <li><Link className="navbar-link" to='/counter'>Counter</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
