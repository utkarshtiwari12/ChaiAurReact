import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordGenerator = useCallback(() => {

    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numAllowed) str += '0123456789';
    if (charAllowed) str += '~!@#$%^&*`';

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, numAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);


  const passRef = useRef(null);

  const copyPassToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 10);
  }, [password])

  return (
    <>
      <div className="max-w-lg mx-auto shadow-lg px-6 py-3 text-orange-600 bg-gray-700 my-8 rounded-md">
        <h1 className="text-white text-center text-2xl mb-4">
          Password Generator
        </h1>

        <div className="flex shadow rounded-md overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passRef}
          />
          <button className="outline-none bg-blue-600 text-white px-3 py-2 shrink-0 hover:bg-slate-400 hover:text-orange-700 font-semibold"
          onClick={copyPassToClipboard}>
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={30}
              value={length}
              className="cursor-pointer"
              id="length"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="length"> Length : {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkBox"
              defaultChecked = {numAllowed}
              id="numInput"
              onChange={() => {
                setNumAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="numInput">IncludeNumbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkBox"
              defaultChecked = {charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="charInput">IncludeCharacters</label>
          </div>

        </div>
      </div>
    </>
  );
}

export default App
