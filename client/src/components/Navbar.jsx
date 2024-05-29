import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

function Navbar() {
  const { user } = useContext(UserContext);

  return (
    <nav>
      <Link className="links" to="/">
        Home
      </Link>
      <div>
        {/* <Link className="links" to="/register">
          Register
        </Link> */}
        <Link className="links" to="/login">
          Login
        </Link>
        {user && (
          <Link className="links" to="/dashboard">
            Dashboard
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
