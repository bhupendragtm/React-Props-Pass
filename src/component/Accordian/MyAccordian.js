import React, {useState} from "react";

const MyAccordian = ({ data }) => {
  const [show, setShow] = useState(false);
  return (
    <><div><p>+</p>
      <h1>{data.question}</h1></div>
     {show &&<h1>{data.answer}</h1>}
    </>
  );
};

export default MyAccordian;
