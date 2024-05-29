import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();

    const { email, password } = data;

    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });

      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Login Succesful. Welcome!");
        navigate("/dashboard");
      }
    } catch (err) {
      console.log(`Login frontend error: `, err);
    }
  };

  return (
    <div>
      <h1 className=" text-lg m-6 mt-20">For Admin</h1>
      <form onSubmit={loginUser} className="form-container">
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

        <Button
          style={{
            gridColumn: "span 2",
            marginBottom: "10px",
            marginTop: "10px",
          }}
          type="submit"
        >
          Login
        </Button>

        {/* <div style={{ gridColumn: "span 2" }}>
          Don't have an account?
          <Link className="links" to="/register">
            Sign up
          </Link>
        </div> */}
      </form>
    </div>
  );
}

export default Login;
