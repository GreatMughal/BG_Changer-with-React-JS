import { useState } from "react"


function App() {
  const [color, setcolor] = useState("white")

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center items-center px-2 inset-x-0 bottom-12">
        <div className="flex flex-wrap justify-center px-4 py-2 bg-slate-300 rounded-3xl shadow-lg gap-3">

          <button
            onClick={() => setcolor("red")}
            className="text-white rounded-full px-6 py-2 shadow-lg"
            style={{ backgroundColor: "red" }}
          >Red</button>

          <button
          onClick={() => setcolor("yellow")}
            className="text-black rounded-full px-6 py-2 shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >Yellow</button>

          <button
          onClick={() => setcolor("green")}
            className="text-white rounded-full px-6 py-2 shadow-lg"
            style={{ backgroundColor: "green" }}
          >Green</button>

          <button
          onClick={() => setcolor("blue")}
            className="text-white rounded-full px-6 py-2 shadow-lg"
            style={{ backgroundColor: "blue" }}
          >Blue</button>

          <button
          onClick={() => setcolor("hotpink")}
            className="text-white rounded-full px-6 py-2 shadow-lg"
            style={{ backgroundColor: "hotpink" }}
          >HotPink</button>

          <button
          onClick={() => setcolor("purple")}
            className="text-white rounded-full px-6 py-2 shadow-lg"
            style={{ backgroundColor: "purple" }}
          >Purple</button>

          <button
          onClick={() => setcolor("orange")}
            className="text-white rounded-full px-6 py-2 shadow-lg"
            style={{ backgroundColor: "orange" }}
          >Orange</button>

          <button
          onClick={() => setcolor("brown")}
            className="text-white rounded-full px-6 py-2 shadow-lg"
            style={{ backgroundColor: "brown" }}
          >Brown</button>

          <button
          onClick={() => setcolor("magenta")}
            className="text-white rounded-full px-6 py-2 shadow-lg"
            style={{ backgroundColor: "magenta" }}
          >Magenta</button>

          <button
          onClick={() => setcolor("grey")}
            className="text-white rounded-full px-6 py-2 shadow-lg"
            style={{ backgroundColor: "grey" }}
          >Grey</button>
        </div>
      </div>
    </div>
  )
}

export default App
