import { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <h1>Hello, world!</h1>
      <NewButton />
    </>
  );
}

function NewButton() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Button variant="outline-warning" onClick={handleClick}>
        ШМЯК
      </Button>
      <p>Кнопка нажата {count} раз(а)</p>
    </>
  );
}

export default App;