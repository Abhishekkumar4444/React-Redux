import React from "react";

import { useSelector, useDispatch } from "react-redux";
//?useSelector  hook is used to read state value and useDispatch hook is uesd to modify state.

import { decrement, increment } from "./counterSlice";
const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const txtcolor = useSelector((state) => state.theme.color);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className="button"
        area-label="Increment value"
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <span className="value" style={{ color: txtcolor }}>
        count : {count}
      </span>
      <button
        className="button"
        area-label="Decrement value"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      {/* <button
        className="button"
        onClick={() => {
          dispatch(incrementByAmount(10));
        }}
      >
        Increment by 10
      </button> */}
    </div>
  );
};

export default Counter;
