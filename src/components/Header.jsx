import { Link, NavLink } from 'react-router-dom'
import { useCarrinho } from '../contexts/CarrinhoContext'
import { useAuth } from '../contexts/AuthContext'

export function Header() {
  const { carrinho } = useCarrinho()
  const { user, signOut } = useAuth()

  const quantidadeItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0)

  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-orange-600 font-semibold'
      : 'text-slate-700 hover:text-orange-600 transition'

  return (
    <header className="sticky top-0 z-50 border-b border-orange-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-2xl font-black tracking-tight text-orange-600">
          RangoJá
        </Link>

        <nav className="hidden gap-6 md:flex">
          <NavLink to="/" className={linkClass}>Início</NavLink>
          <NavLink to="/cardapio" className={linkClass}>Cardápio</NavLink>
          <NavLink to="/pedidos" className={linkClass}>Pedidos</NavLink>
          <NavLink to="/admin" className={linkClass}>Admin</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/carrinho" className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700 transition hover:bg-orange-200">
            Carrinho ({quantidadeItens})
          </Link>

          {user ? (
            <button onClick={signOut} className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90">
              Sair
            </button>
          ) : (
            <Link to="/login" className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600">
              Entrar
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
