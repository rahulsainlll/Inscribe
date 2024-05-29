import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();

    const { name, email, password } = data;

    try {
      const { data } = await axios.post("/register", {
        name,
        email,
        password,
      });

      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Register Succesful. Welcome!");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={registerUser} className="form-container">
        <label className="form-label">Name</label>
        <input
          className="form-input"
          type="text"
          placeholder="enter name..."
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <label className="form-label">Email</label>
        <input
          className="form-input"
          type="email"
          placeholder="enter email..."
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <label className="form-label">Password</label>
        <input
          className="form-input"
          type="password"
          placeholder="enter password..."
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button style={{ gridColumn: "span 2",  marginBottom: "10px" }} type="submit">
          Submit
        </button>

        <div style={{ gridColumn: "span 2" }}>
          Already have an account?
          <Link to="/login">Sign in</Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
