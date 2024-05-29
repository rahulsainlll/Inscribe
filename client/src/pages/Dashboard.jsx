import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import FormDataList from "../components/FormDataList";

const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      {/* {!!user && <p>Hey 👋 {user.name}</p>} */}
      <FormDataList formName="form1" />
    </div>
  );
};

export default Dashboard;
