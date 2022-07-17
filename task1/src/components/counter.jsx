import React, { useState } from "react";

const Counter = (props) => {
  const { value } = props;
  // const [value, setValue] = useState(props.value);

  const formatValue = () => {
    return value === 0 ? "empty" : value;
  };

  const getBageClases = () => {
    let classes = "badge m-2 ";
    classes += value === 0 ? "bg-warning" : "bg-primary";
    return classes;
  };

  const hangleIncrement = () => {
    console.log("hangleIncrement");
    //setValue((prevState) => prevState + 1);
  };

  const hangleDecrement = () => {
    console.log("hangleDecrement");
    //setValue((prevState) => prevState - 1);
  };

  return (
    <div>
      <span>{props.name}</span>
      <span className={getBageClases()}>{formatValue()}</span>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => props.onIncrement(props.id, props.value)}
      >
        +
      </button>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => props.onDecrement(props.id, props.value)}
      >
        -
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => props.onDelete(props.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
