export function Footer() {
  return (
    <footer className="mt-20 border-t border-orange-100 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-bold text-orange-600">RangoJá</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Aplicativo de pedidos com visual moderno, navegação simples e experiência rápida.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900">Links rápidos</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>Início</li>
            <li>Cardápio</li>
            <li>Pedidos</li>
            <li>Login</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900">Contato</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>Muriaé - MG</li>
            <li>contato@rangoja.com</li>
            <li>(32) 99999-9999</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-orange-100 px-6 py-4 text-center text-sm text-slate-500">
        © 2026 RangoJá. Todos os direitos reservados.
      </div>
    </footer>
  )
}
