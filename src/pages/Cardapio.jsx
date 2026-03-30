import { useMemo, useState } from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { ProductCard } from '../components/ProductCard'
import { useCarrinho } from '../contexts/CarrinhoContext'
import { produtos } from '../data/produtos'

export function Cardapio() {
  const { adicionarAoCarrinho } = useCarrinho()
  const [busca, setBusca] = useState('')
  const [categoria, setCategoria] = useState('Todos')

  const categorias = ['Todos', ...new Set(produtos.map((p) => p.categoria))]

  const produtosFiltrados = useMemo(() => {
    return produtos.filter((produto) => {
      const matchCategoria = categoria === 'Todos' || produto.categoria === categoria
      const texto = busca.toLowerCase()
      const matchBusca = produto.nome.toLowerCase().includes(texto) || produto.descricao.toLowerCase().includes(texto)
      return matchCategoria && matchBusca
    })
  }, [busca, categoria])

  return (
    <div className="min-h-screen bg-orange-50">
      <Header />
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-10">
          <span className="text-sm font-semibold uppercase tracking-wider text-orange-600">Cardápio</span>
          <h1 className="mt-3 text-4xl font-black text-slate-900">Escolha seu pedido</h1>
          <p className="mt-3 max-w-2xl text-slate-600">Explore as categorias, encontre seus pratos favoritos e adicione ao carrinho com rapidez.</p>
        </div>

        <div className="mb-8 grid gap-4 rounded-3xl bg-white p-5 shadow-sm md:grid-cols-[1fr_auto]">
          <input type="text" placeholder="Buscar produto..." value={busca} onChange={(e) => setBusca(e.target.value)} className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-400" />
          <select value={categoria} onChange={(e) => setCategoria(e.target.value)} className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-400">
            {categorias.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {produtosFiltrados.map((produto) => (
            <ProductCard key={produto.id} produto={produto} onAdd={adicionarAoCarrinho} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}
