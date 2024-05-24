// src/features/counter/Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterSlice';

const Counter = () => {
  const count = useSelector((state1) => state1.counter.count);
  const dispatch = useDispatch();

  // Concatenate "ha" 3 times.
  const laughing = "ha".repeat(3);
  console.log(laughing); // "hahaha"

  // Concatenate "1" 8 times.
  const eightBits = "1".padStart(8,"*");
  console.log(eightBits ); // "11111111"


  const name = "Khanh Duy";
  const text = [...name]
  console.log('text',text);

  const myMap = new Map();

// Add new elements to the map
myMap.set("bar", "foo");
myMap.set(1, "foobar");

// Update an element in the map
myMap.set("bar", "baz");

console.log("map", myMap);
console.log(myMap.get(1));
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
      
    </div>
  );
};

export default Counter;
