import { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <p className="text-2xl font-semibold text-slate-900">Counter: {counter}</p>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          type="button"
          className="rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
          onClick={() => setCounter((value) => value + 1)}
        >
          Increment
        </button>
        <button
          type="button"
          className="rounded-full bg-rose-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-rose-700"
          onClick={() => setCounter((value) => value - 1)}
        >
          Decrement
        </button>
        <button
          type="button"
          className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          onClick={() => setCounter(0)}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Counter