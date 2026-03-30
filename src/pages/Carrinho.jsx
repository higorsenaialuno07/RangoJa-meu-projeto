import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { useCarrinho } from '../contexts/CarrinhoContext'

export function Carrinho() {
  const { carrinho, aumentarQuantidade, diminuirQuantidade, removerDoCarrinho, subtotal, taxaEntrega, total, limparCarrinho } = useCarrinho()

  function finalizarPedido() {
    alert('Pedido finalizado com sucesso!')
    limparCarrinho()
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-10">
          <span className="text-sm font-semibold uppercase tracking-wider text-orange-600">Carrinho</span>
          <h1 className="mt-3 text-4xl font-black text-slate-900">Revise seu pedido</h1>
        </div>

        {carrinho.length === 0 ? (
          <div className="rounded-3xl bg-white p-10 text-center shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">Seu carrinho está vazio</h2>
            <p className="mt-3 text-slate-600">Adicione produtos do cardápio para continuar.</p>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1.6fr_0.9fr]">
            <div className="space-y-5">
              {carrinho.map((item) => (
                <div key={item.id} className="flex flex-col gap-4 rounded-3xl bg-white p-5 shadow-sm md:flex-row md:items-center">
                  <img src={item.imagem} alt={item.nome} className="h-28 w-full rounded-2xl object-cover md:w-36" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900">{item.nome}</h3>
                    <p className="mt-1 text-sm text-slate-600">{item.descricao}</p>
                    <p className="mt-2 font-semibold text-orange-600">R$ {item.preco.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button onClick={() => diminuirQuantidade(item.id)} className="h-10 w-10 rounded-full bg-orange-100 font-bold text-orange-700">-</button>
                    <span className="min-w-6 text-center font-bold">{item.quantidade}</span>
                    <button onClick={() => aumentarQuantidade(item.id)} className="h-10 w-10 rounded-full bg-orange-100 font-bold text-orange-700">+</button>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-slate-900">R$ {(item.preco * item.quantidade).toFixed(2)}</p>
                    <button onClick={() => removerDoCarrinho(item.id)} className="mt-2 text-sm font-semibold text-red-500">Remover</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-fit rounded-3xl bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">Resumo</h2>
              <div className="mt-6 space-y-4 text-slate-600">
                <div className="flex justify-between"><span>Subtotal</span><span>R$ {subtotal.toFixed(2)}</span></div>
                <div className="flex justify-between"><span>Taxa de entrega</span><span>R$ {taxaEntrega.toFixed(2)}</span></div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-black text-slate-900"><span>Total</span><span>R$ {total.toFixed(2)}</span></div>
                </div>
              </div>
              <button onClick={finalizarPedido} className="mt-6 w-full rounded-2xl bg-orange-500 px-4 py-3 font-semibold text-white transition hover:bg-orange-600">Finalizar pedido</button>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </div>
  )
}
