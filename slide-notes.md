# TypeScript with React

## Slide 4

```ts
add(3, 4);
add(3);
add(3, '4');

function add5(a: number | undefined) {
  return add(a, 5);
}
```

## Slide 6

```ts
function seriousFunction() {
  const fancyWords = [
    { fanciness: 5, name: 'extravagant' },
    { fanciness: 5, name: 'flamboyant' },
    { fanciness: 5, name: 'parlance' },
    { fanciness: 5, name: 'despondent' },
    { fanciness: 5, name: 'effervescence' },
  ];

  return mapToGoodBoi(fancyWords.map(({ name }) => name));
}
```

## Slide 7

```ts
function includesHash(word?: string) {
  return word?.includes('#');
}
```

## Slide 8

- Haven't done the first one but heard good things about it (for absolute beginners)
- execute program has 3 TypeScript courses, uses spaced repetition and active recall to help you learn it
  - about £30/40 a month
  - i enjoyed the free lessons
- Use it on the frontend

## Slide 9

```tsx
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  isLoading?: boolean;
  loadingText?: string;
  size?: 'sm' | 'md' | 'lg';
  onClick: () => void;
}

function Button({
  children,
  isLoading = false,
  loadingText,
  size = 'md',
  onClick,
}: ButtonProps) {
  const handleClick = () => {
    onClick();
  };

  return (
    <button
      className={`btn btn-${size}`}
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading ? loadingText : children}
    </button>
  );
}

export default Button;
```

## Slide 10

```tsx
import React, { useEffect } from 'react';

export default function Button() {
  const [counter, setCounter] = React.useState<number | undefined>(undefined);

  useEffect(() => {
    // const initialCount = fetchCount();

    setCounter(1000);
  });

  const handleClick = () => {
    setCounter((prev) => {
      if (prev !== undefined) {
        return prev + 1;
      }
    });
  };

  return <button onClick={handleClick}>{counter}</button>;
}
```

## Slide 11

```tsx
import React from 'react';

export default function Input() {
  const [value, setValue] = React.useState('');

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  return <input value={value} onChange={handleChange} />;
}
```
