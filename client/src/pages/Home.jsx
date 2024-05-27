import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1> Home Page</h1>
      
          <Link to="/form1">Form 1</Link> <br/>
          <Link to="/form2">Form 2</Link>
        
    </div>
  );
}

export default Home;
