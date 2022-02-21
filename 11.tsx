import React from 'react';

export default function Button() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return <button onClick={handleClick}>{count}</button>;
}
