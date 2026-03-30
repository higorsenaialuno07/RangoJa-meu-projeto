import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

export function Pedidos() {
  const pedidos = [
    { id: 101, data: '29/03/2026', status: 'Em preparo', total: 48.8 },
    { id: 102, data: '27/03/2026', status: 'Entregue', total: 31.9 },
  ]

  return (
    <div className="min-h-screen bg-orange-50">
      <Header />
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-10">
          <span className="text-sm font-semibold uppercase tracking-wider text-orange-600">Histórico</span>
          <h1 className="mt-3 text-4xl font-black text-slate-900">Meus pedidos</h1>
        </div>
        <div className="space-y-5">
          {pedidos.map((pedido) => (
            <div key={pedido.id} className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Pedido #{pedido.id}</h2>
                  <p className="mt-1 text-slate-600">Data: {pedido.data}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">{pedido.status}</span>
                  <span className="text-lg font-black text-slate-900">R$ {pedido.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}
