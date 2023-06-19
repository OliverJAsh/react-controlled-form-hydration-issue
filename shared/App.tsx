import * as React from 'react';

export const App = () => {
  const [value, setValue] = React.useState('');

  const [, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log('mount');

    setCount(1);
  }, []);

  return (
    <form>
      <div>Value: {value}</div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
    </form>
  );
};
