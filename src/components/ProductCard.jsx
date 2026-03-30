export function ProductCard({ produto, onAdd }) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="overflow-hidden">
        <img src={produto.imagem} alt={produto.nome} className="h-52 w-full object-cover transition duration-300 group-hover:scale-105" />
      </div>

      <div className="p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
            {produto.categoria}
          </span>
          <span className="text-lg font-black text-orange-600">R$ {produto.preco.toFixed(2)}</span>
        </div>

        <h3 className="text-xl font-bold text-slate-900">{produto.nome}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{produto.descricao}</p>

        <button onClick={() => onAdd(produto)} className="mt-5 w-full rounded-2xl bg-slate-900 px-4 py-3 font-semibold text-white transition hover:bg-orange-500">
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  )
}
