import React, {useState} from "react";
// import "MyAccordian.css";

const MyAccordian = ({question, answer}) => {
  const [show, setShow] = useState(false);
  return (
    <><div className="main-heading"><p onClick={()=>setShow(!show)}><strong>+</strong></p>
      <h2>{question}</h2></div>
     {show &&<p className="answers">{answer}</p>}
    </>
  );
};

export default MyAccordian;
