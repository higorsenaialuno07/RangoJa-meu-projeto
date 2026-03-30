import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export function Login() {
  const { signIn } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [erro, setErro] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setErro('')
    try {
      await signIn(email, password)
      navigate('/cardapio')
    } catch {
      setErro('Não foi possível entrar. Faça um cadastro primeiro.')
    }
  }

  return (
    <div className="grid min-h-screen md:grid-cols-2">
      <div className="hidden md:block">
        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&auto=format&fit=crop" alt="Restaurante" className="h-full w-full object-cover" />
      </div>
      <div className="flex items-center justify-center bg-gradient-to-br from-orange-50 to-white px-6 py-12">
        <form onSubmit={handleSubmit} className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
          <h1 className="text-3xl font-black text-slate-900">Bem-vindo de volta</h1>
          <p className="mt-2 text-slate-600">Acesse sua conta para continuar.</p>
          <div className="mt-8 space-y-4">
            <input type="email" placeholder="Seu email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-400" />
            <input type="password" placeholder="Sua senha" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-400" />
          </div>
          {erro && <p className="mt-4 text-sm font-medium text-red-500">{erro}</p>}
          <button className="mt-6 w-full rounded-2xl bg-orange-500 px-4 py-3 font-semibold text-white transition hover:bg-orange-600">Entrar</button>
          <p className="mt-6 text-center text-sm text-slate-600">Ainda não tem conta? <Link to="/cadastro" className="font-semibold text-orange-600">Cadastre-se</Link></p>
        </form>
      </div>
    </div>
  )
}
