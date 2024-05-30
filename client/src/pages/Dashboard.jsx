import React, { useContext } from "react";
import FormDataList from "../components/FormDataList";

const Dashboard = () => {

  return (
    <div>
      <h2 className="text-3xl font-bold underline">Form Detials</h2>
      <FormDataList />
    </div>
  );
};

export default Dashboard;
