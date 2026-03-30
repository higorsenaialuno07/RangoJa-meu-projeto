import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Footer } from '../components/Footer'
import { produtos } from '../data/produtos'
import { ProductCard } from '../components/ProductCard'
import { useCarrinho } from '../contexts/CarrinhoContext'

export function Home() {
  const { adicionarAoCarrinho } = useCarrinho()

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-orange-600">Diferenciais</span>
          <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">Por que escolher o RangoJá?</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-orange-50 p-8">
            <h3 className="text-xl font-bold text-slate-900">Entrega rápida</h3>
            <p className="mt-3 text-slate-600">Pedidos organizados para agilizar o atendimento e melhorar a experiência.</p>
          </div>
          <div className="rounded-3xl bg-orange-50 p-8">
            <h3 className="text-xl font-bold text-slate-900">Cardápio digital</h3>
            <p className="mt-3 text-slate-600">Interface clara e moderna para visualizar lanches, porções e bebidas.</p>
          </div>
          <div className="rounded-3xl bg-orange-50 p-8">
            <h3 className="text-xl font-bold text-slate-900">Pedido simplificado</h3>
            <p className="mt-3 text-slate-600">O cliente escolhe os itens, acompanha valores e finaliza tudo rapidamente.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-10">
          <span className="text-sm font-semibold uppercase tracking-wider text-orange-600">Destaques</span>
          <h2 className="mt-3 text-3xl font-black text-slate-900">Produtos em destaque</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {produtos.slice(0, 3).map((produto) => (
            <ProductCard key={produto.id} produto={produto} onAdd={adicionarAoCarrinho} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
