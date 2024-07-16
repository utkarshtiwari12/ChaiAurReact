import { useState } from "react"

function App() {
  const [color, setColor] = useState('#414141')

  // function changeBg(color)
  // {
  //   setColor(color);
  // }

  return (
    <div className="w-screen h-screen" style={{ backgroundColor: color }}>
      <div className="fixed bottom-12 inset-x-0 flex flex-wrap justify-center px-2">
        <div className="bg-white flex flex-wrap justify-center px-3 py-2 gap-3 shadow-xl rounded-3xl">
          <button
            className="rounded-full text-white shadow-md outline-none px-4 py-1"
            style={{ backgroundColor: 'red' }}
            onClick={() => setColor('red')}
          >
            Red
          </button>
          <button
            className="rounded-full text-white shadow-md outline-none px-4 py-1"
            style={{ backgroundColor: 'green' }}
            onClick={() => setColor('green')}
          >
            Green
          </button>
          <button
            className="rounded-full text-white shadow-md outline-none px-4 py-1"
            style={{ backgroundColor: 'blue' }}
            onClick={() => setColor('blue')}
          >
            Blue
          </button>
          <button
            className="rounded-full text-black shadow-md outline-none px-4 py-1"
            style={{ backgroundColor: 'yellow' }}
            onClick={() => setColor('yellow')}
          >
            Yellow
          </button>
          <button
            className="rounded-full text-black shadow-md outline-none px-4 py-1"
            style={{ backgroundColor: 'pink' }}
            onClick={() => setColor('pink')}
          >
            Pink
          </button>
          <button
            className="rounded-full text-black shadow-md outline-none px-4 py-1"
            style={{ backgroundColor: 'lavender' }}
            onClick={() => setColor('lavender')}
          >
            Lavender
          </button>
          <button
            className="rounded-full text-white shadow-md outline-none px-4 py-1"
            style={{ backgroundColor: 'black' }}
            onClick={() => setColor('black')}
          >
            Black
          </button>
          <button
            className="rounded-full text-black shadow-md outline-none px-4 py-1"
            style={{ backgroundColor: 'white' }}
            onClick={() => setColor('white')}
          >
            White
          </button>
          <button
            className="rounded-full text-white shadow-md outline-none px-4 py-1"
            style={{ backgroundColor: 'purple' }}
            onClick={() => setColor('purple')}
          >
            Purple
          </button>
        </div>
      </div>
    </div>
  );
}

export default App
