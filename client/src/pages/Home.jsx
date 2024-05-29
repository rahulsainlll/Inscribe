
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home 👨🏻‍💻</h1>
      <Link to="/form1">Go to Form 1</Link>
    </div>
  );
}

export default Home;
