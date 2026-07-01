import { useEffect, useState } from 'react'

const StorePage = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [])

  return (
    <main className='mx-auto max-w-6xl px-4 py-10'>
      <section className='mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
        <p className='mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600'>Simple store</p>
        <h1 className='text-3xl font-bold text-slate-900'>Fresh picks from the fake store</h1>
        <p className='mt-3 max-w-2xl text-slate-600'>Browse a few products from the store API and see a clean card-based layout.</p>
      </section>

      {loading ? (
        <div className='rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-600 shadow-sm'>
          Loading products...
        </div>
      ) : (
        <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {products.map((product) => (
            <article key={product.id} className='flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm'>
              <img
                src={product.image}
                alt={product.title}
                className='mb-4 h-44 w-full object-contain'
              />
              <div className='flex flex-1 flex-col'>
                <h2 className='mb-2 text-lg font-semibold text-slate-900'>{product.title}</h2>
                <p className='mb-4 flex-1 text-sm text-slate-600'>{product.description}</p>
                <div className='flex items-center justify-between'>
                  <span className='text-lg font-bold text-indigo-600'>${product.price}</span>
                  <button className='rounded-full bg-slate-900 px-3 py-1.5 text-sm font-medium text-white'>Add to cart</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  )
}

export default StorePage
