import { Link } from 'react-router-dom'

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
            Delivery moderno e rápido
          </span>

          <h1 className="mt-6 text-4xl font-black leading-tight text-slate-900 md:text-6xl">
            Peça sua comida favorita com rapidez e praticidade
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            O RangoJá oferece um cardápio digital moderno, experiência intuitiva e um fluxo
            de pedidos pensado para ser simples, rápido e profissional.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/cardapio" className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-600">
              Ver cardápio
            </Link>

            <Link to="/login" className="rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:border-orange-300 hover:text-orange-600">
              Fazer login
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-orange-200 blur-2xl" />
          <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-amber-200 blur-2xl" />
          <img
            src="/comidas.jpg"
            alt="Comidas variadas"
            className="relative h-[420px] w-full rounded-[28px] object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
