import MyCarousel from "../components/MyCarousel";
import Counter from "../../hooks/Counter";

const Homepage = () => {
  return (
    <main className='mx-auto max-w-6xl px-4 py-10'>
      <MyCarousel />
      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <Counter />
      </section>
    </main>
  )
}

export default Homepage;