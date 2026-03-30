import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { produtos } from '../data/produtos'

export function Admin() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-10">
          <span className="text-sm font-semibold uppercase tracking-wider text-orange-600">Painel administrativo</span>
          <h1 className="mt-3 text-4xl font-black text-slate-900">Gestão do sistema</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm"><p className="text-sm text-slate-500">Produtos cadastrados</p><h2 className="mt-3 text-4xl font-black text-slate-900">{produtos.length}</h2></div>
          <div className="rounded-3xl bg-white p-6 shadow-sm"><p className="text-sm text-slate-500">Pedidos do dia</p><h2 className="mt-3 text-4xl font-black text-slate-900">12</h2></div>
          <div className="rounded-3xl bg-white p-6 shadow-sm"><p className="text-sm text-slate-500">Faturamento</p><h2 className="mt-3 text-4xl font-black text-slate-900">R$ 586,90</h2></div>
        </div>

        <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Produtos</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-y-3">
              <thead>
                <tr className="text-left text-sm text-slate-500">
                  <th className="px-4">Produto</th>
                  <th className="px-4">Categoria</th>
                  <th className="px-4">Preço</th>
                  <th className="px-4">Ações</th>
                </tr>
              </thead>
              <tbody>
                {produtos.map((produto) => (
                  <tr key={produto.id} className="rounded-2xl bg-orange-50">
                    <td className="rounded-l-2xl px-4 py-4 font-semibold text-slate-900">{produto.nome}</td>
                    <td className="px-4 py-4 text-slate-700">{produto.categoria}</td>
                    <td className="px-4 py-4 text-slate-700">R$ {produto.preco.toFixed(2)}</td>
                    <td className="rounded-r-2xl px-4 py-4">
                      <div className="flex gap-2">
                        <button className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Editar</button>
                        <button className="rounded-xl bg-red-500 px-4 py-2 text-sm font-semibold text-white">Excluir</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
