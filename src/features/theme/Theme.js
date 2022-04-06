import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { chngTextClr } from "./themeSlice";

const Theme = () => {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        className="textbox"
        onChange={(e) => setColor(e.target.value)}
      />
      <button
        className="button"
        style={{ color: color }}
        onClick={() => {
          dispatch(chngTextClr(color));
        }}
      >
        chg txt clr
      </button>
    </div>
  );
};

export default Theme;
