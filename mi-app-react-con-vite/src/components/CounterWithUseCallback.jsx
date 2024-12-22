import React, { useState, useCallback } from 'react';

const CounterWithUseCallback = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h3>Counter with useCallback: {count}</h3>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default CounterWithUseCallback;
