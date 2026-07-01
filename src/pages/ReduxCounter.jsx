import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ReduxCounter = () => {
  const count = useSelector((store) => store.count)
  const dispatch = useDispatch()  //reducer ma event pathaucha

  return (
    <main className='flex min-h-screen items-center justify-center bg-slate-100 px-4'>
      <section className='w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm'>
        <p className='mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600'>Redux demo</p>
        <h1 className='text-3xl font-bold text-slate-900'>Counter value: {count}</h1>
        <p className='mt-3 text-slate-600'>This page now uses a real Redux store and updates when you press the buttons.</p>

        <div className='mt-6 flex justify-center gap-3'>
          <button
            type='button'
            onClick={() => dispatch({ type: 'DECREMENT' })}
            className='rounded-full bg-slate-800 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700'
          >
            Decrease
          </button>
          <button
            type='button'
            onClick={() => dispatch({ type: 'RESET' })}
            className='rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100'
          >
            Reset
          </button>
          <button
            type='button'
            onClick={() => dispatch({ type: 'INCREMENT' })}
            className='rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500'
          >
            Increase
          </button>
        </div>
      </section>
    </main>
  )
}

export default ReduxCounter