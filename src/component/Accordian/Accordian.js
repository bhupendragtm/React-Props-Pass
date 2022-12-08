import React from "react";
import { questions } from "./api";
import MyAccordian from "./MyAccordian";
// console.log('abc'+Accordian);

const Accordian = () => {
  return <div>{questions.map((data) => <MyAccordian key={data.id} data={data}/> )}</div>;
};

export default Accordian;
