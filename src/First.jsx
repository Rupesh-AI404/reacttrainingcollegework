import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

const First = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
      <div className='max-w-6xl mx-auto px-6 py-16'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h1 className='text-5xl font-bold text-white mb-4'>React + Vite</h1>
          <p className='text-xl text-slate-300'>Lightning-fast React development</p>
        </div>

        {/* Logos Section */}
        <div className='flex justify-center items-center gap-16 mb-16'>
          <div className='flex flex-col items-center'>
            <img src={reactLogo} alt='React Logo' className='h-32 w-32 hover:scale-110 transition-transform' />
            <p className='text-white mt-4 font-semibold'>React</p>
          </div>
          <div className='text-4xl text-white'>+</div>
          <div className='flex flex-col items-center'>
            <img src={viteLogo} alt='Vite Logo' className='h-32 w-32 hover:scale-110 transition-transform' />
            <p className='text-white mt-4 font-semibold'>Vite</p>
          </div>
        </div>

        {/* Features */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
          <div className='bg-slate-700 rounded-lg p-8 text-center hover:bg-slate-600 transition'>
            <h3 className='text-2xl font-bold text-blue-400 mb-3'>⚡ Fast</h3>
            <p className='text-slate-300'>Lightning-fast HMR for instant updates</p>
          </div>
          <div className='bg-slate-700 rounded-lg p-8 text-center hover:bg-slate-600 transition'>
            <h3 className='text-2xl font-bold text-green-400 mb-3'>📦 Optimized</h3>
            <p className='text-slate-300'>Pre-configured build optimization</p>
          </div>
          <div className='bg-slate-700 rounded-lg p-8 text-center hover:bg-slate-600 transition'>
            <h3 className='text-2xl font-bold text-purple-400 mb-3'>🚀 Modern</h3>
            <p className='text-slate-300'>ES modules and modern JavaScript</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default First