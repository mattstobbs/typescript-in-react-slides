import React from 'react';

export default function Input() {
  const [value, setValue] = React.useState('');

  const handleChange = () => {};

  return <input value={value} onChange={handleChange} />;
}
