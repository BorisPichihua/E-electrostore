import React, { useState, useEffect } from 'react';

const CounterWithUseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count updated: ${count}`);
  }, [count]);

  return (
    <div>
      <h3>Counter with useEffect: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default CounterWithUseEffect;
