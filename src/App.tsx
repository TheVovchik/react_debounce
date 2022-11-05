import React, { useCallback, useState } from 'react';
import './App.css';
import 'bulma/css/bulma.min.css';


type Func = React.Dispatch<React.SetStateAction<string>>;

function debouncer(f: Func, delay: number) {
  let timerId: number;

  return (...arg: any) => {
    clearTimeout(timerId);
    timerId = setTimeout(f, delay, ...arg);
  }
}



function App() {
  const [text, setText] = useState('');
  const [appliedText, setAppliedText] = useState(text);

  const applyText = useCallback(debouncer(setAppliedText, 1000), []);

  function handleTextInput(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
    applyText(event.target.value);
  }

  return (
    <div className="App">
      <h1 className="title is-1">Your text will appear here:</h1>
      <p className="subtitle is-4">{appliedText || 'your text will appear here'}</p>
      <input
        className="input is-danger is-rounded m-r-5"
        style={{ 'width': '33%'}}
        id="text"
        placeholder='type text here'
        value={text}
        onChange={handleTextInput}
        />
    </div>
  );
}

export default App;
