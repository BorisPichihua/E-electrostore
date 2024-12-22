import React, { useState, useMemo } from 'react';

const CounterWithUseMemo = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  const expensiveComputation = useMemo(() => {
    console.log('Computing...');
    return count * 2;
  }, [count]);

  return (
    <div>
      <h3>Counter with useMemo: {expensiveComputation}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setOtherState(otherState + 1)}>Change Other State</button>
    </div>
  );
};

export default CounterWithUseMemo;
