import "./MyFirstComponent.css";
import { useState } from 'react';



function App(): JSX.Element {
  const [number1, setNumber1] = useState<number | undefined>();
  const [number2, setNumber2] = useState<number | undefined>();
  const [total, setTotal] = useState<number>(0);

  function calculateTotal(): void {
    if (number1 !== undefined && number2 !== undefined) {
      setTotal(number1 + number2);
    }
  }

  return (
    <div>
      <h2>Adding Two Numbers</h2>
      <input
        placeholder="First Number"
        type="number"
        value={number1 || ''}
        onChange={(e) => setNumber1(+e.target.value)}
      />
      <input
        placeholder="Second Number"
        type="number"
        value={number2 || ''}
        onChange={(e) => setNumber2(+e.target.value)}
      />

      <button onClick={calculateTotal}>Add Two Numbers</button>
      <p>Total: {total || ''}</p>
    </div>
  );
}

export default App