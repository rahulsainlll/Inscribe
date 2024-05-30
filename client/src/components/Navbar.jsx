import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user context
    setUser(null);

    // Clear all cookies
    document.cookie.split(";").forEach((cookie) => {
      const [name] = cookie.split("=");
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
    });

    // Redirect to the home page
    navigate("/");
  };

  return (
    <nav className="flex justify-between items-center px-4 py-2 ">
      <div>
        <Link className="mr-4 hover:underline" to="/">
          Inscribe
        </Link>
      </div>
      <div>
        {!user ? (
          <Link className="mr-4 hover:underline" to="/login">
            Login
          </Link>
        ) : (
          <>
            <Link className="mr-4 hover:underline" to="/dashboard">
              Dashboard
            </Link>
            <button onClick={handleLogout} className="mr-4">
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
