import React from 'react'

const AboutPage = () => {
  return (
    <main className='mx-auto max-w-6xl px-4 py-12'>
      <section className='grid gap-8 md:grid-cols-2 md:items-center'>
        <div>
          <h1 className='text-3xl font-bold text-slate-900'>About Us</h1>
          <p className='mt-4 text-slate-600'>
            We build simple React training pages that focus on clean layout,
            basic routing, and reusable components.
          </p>
          <p className='mt-3 text-slate-600'>
            The goal is to learn the flow of a real app without making the UI
            too complicated.
          </p>
        </div>

        <div className='overflow-hidden rounded-lg border bg-white shadow-sm'>
          <img src='/seed.webp' alt='Seed' className='h-full w-full object-cover' />
        </div>
      </section>
    </main>
  )
}

export default AboutPage