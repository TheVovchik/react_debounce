import React, { useCallback, useState } from 'react';
import './App.css';

type Func = React.Dispatch<React.SetStateAction<string>>;

function debouncer(f: Func, delay: number) {
  let timerId: NodeJS.Timeout;

  return (arg: string) => {
    clearTimeout(timerId);
    timerId = setTimeout(f, delay, arg);
  }
}

function App() {
  const [text, setText] = useState('example');
  const [appliedText, setAppliedText] = useState(text);

  const applyText = useCallback(debouncer(setAppliedText, 1000), []);

  return (
    <div className="App">
      <h1>Your text will appear here:</h1>
      <p>{appliedText}</p>
      <input 
        id="input1" 
        value={text}
        onChange={event => {
          setText(event.target.value);
          applyText(event.target.value);
        }}
        />
    </div>
  );
}

export default App;
