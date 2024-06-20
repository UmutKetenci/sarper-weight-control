import moment from "moment";
import React, { useState } from "react";
import { kgArray } from "../charts/LineChart";
import { Button, ButtonBase, styled } from "@mui/material";

const InputForm = ({ headerText }) => {
  const [inputText, setInputText] = useState(0);
  const [inputNumber, setInputNumber] = useState(0);

  /*    await firestore.collection('inputs').add({
        text: inputText,
        userId: currentUser.uid,
        createdAt: new Date()
      }); */
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(kgArray);
    kgArray.push(inputNumber);
  };

  const ImageButton = styled(ButtonBase)({ position: "relative" });

  const date = moment().format("MMM Do YY");
  return (
    <>
      <form onSubmit={handleSubmit}>
        <ImageButton key={"sa"}></ImageButton>
        <h2>{date}</h2>

        <p>{headerText}</p>
        <input
          type="number"
          value={inputNumber}
          onChange={(e) => setInputNumber(e.target.value)}
        ></input>
        <Button variant="contained" onClick={handleSubmit} startIcon={"aa"}>
          OK
        </Button>
      </form>
      {kgArray.length > 1 ? "DOORS" : "DO"}
      {kgArray.map((item) => item)}
    </>
  );
};

export default InputForm;
