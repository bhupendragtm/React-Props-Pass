import React from "react";
import { questions } from "./api";
import MyAccordian from "./MyAccordian";
// console.log('abc'+Accordian);

const Accordian = () => {
  return <div>{
    questions.map(({id, answer, question}) => 
    <MyAccordian key={id} question={question} answer={answer}   />
    )}</div>;
};

export default Accordian;