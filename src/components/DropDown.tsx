import React, { useState } from "react";

type Props = {
  data: string[];
  onSelect: (value: string) => void;
};

const DropDown: React.FC<Props> = ({ data, onSelect }) => {
  const [show, setShow] = useState(false);
  const [currentText, setCurrentText] = useState("select");

  function itemClickHandler(text: string) {
    setCurrentText(text);
    onSelect(text);
    setShow(false);
  }

  return (
    <div className="dropDown-wrap">
      <button
        style={{
          width: "320px",
          height: "40px",
        }}
        onClick={() => setShow(!show)}
      >
        {currentText}
      </button>
      <br />

      <ul style={{ display: show ? "inline-block" : "none" }}>
        {data.map((el) => {
          return <li onClick={() => itemClickHandler(el)}>{el}</li>;
        })}
      </ul>
    </div>
  );
};

export default DropDown;
