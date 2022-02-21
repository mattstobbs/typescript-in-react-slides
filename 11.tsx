import React from 'react';

export default function Button() {
  const [counter, setCounter] = React.useState(0);

  const handleClick = () => {
    setCounter((prev) => prev + 1);
  };

  return <button onClick={handleClick}>{counter}</button>;
}
