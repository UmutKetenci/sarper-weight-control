import React from "react";
import Login from "../components/authentication/login/Login";
import SignUp from "../components/authentication/signup/SignUp";
import InputForm from "../components/input/InputForm";
import LineChart from "../components/charts/LineChart";

const LoginPage = () => {
  return (
    <div>
      <Login></Login>
      <SignUp></SignUp>
      <InputForm headerText={"Sarper bugün kaç kg?"}></InputForm>
    </div>
  );
};

export default LoginPage;
