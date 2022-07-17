import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const intialState = [
    { id: 0, value: 0, name: "Ненужная вещь", price: "200" },
    { id: 1, value: 0, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ];

  const [counters, setCounters] = useState(intialState);

  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };

  const handleReset = () => {
    setCounters(intialState);
  };

  const handleIncrement = (id, value) => {
    const newIncrement = counters.map((obj) =>
      obj.id === id ? { ...obj, value: value + 1 } : obj
    );
    setCounters(newIncrement);
  };

  const handleDecrement = (id, value) => {
    const newIncrement = counters.map((obj) =>
      obj.id === id ? { ...obj, value: value - 1 } : obj
    );
    setCounters(newIncrement);
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...count}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};

export default CountersList;
