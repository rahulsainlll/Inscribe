import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link className="links" to="/">
        Home
      </Link>
      <div>
        <Link className="links" to="/register">
          Register
        </Link>
        <Link className="links" to="/login">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
