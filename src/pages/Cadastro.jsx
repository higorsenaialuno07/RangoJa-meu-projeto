import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export function Cadastro() {
  const { signUp } = useAuth()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [erro, setErro] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setErro('')
    try {
      await signUp(nome, email, password)
      navigate('/login')
    } catch {
      setErro('Não foi possível criar a conta.')
    }
  }

  return (
    <div className="grid min-h-screen md:grid-cols-2">
      <div className="hidden md:block">
        <img src="https://images.unsplash.com/photo-1520072959219-c595dc870360?q=80&w=1400&auto=format&fit=crop" alt="Hambúrguer" className="h-full w-full object-cover" />
      </div>
      <div className="flex items-center justify-center bg-gradient-to-br from-orange-50 to-white px-6 py-12">
        <form onSubmit={handleSubmit} className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
          <h1 className="text-3xl font-black text-slate-900">Criar conta</h1>
          <p className="mt-2 text-slate-600">Cadastre-se para começar a pedir.</p>
          <div className="mt-8 space-y-4">
            <input type="text" placeholder="Seu nome" value={nome} onChange={(e) => setNome(e.target.value)} className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-400" />
            <input type="email" placeholder="Seu email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-400" />
            <input type="password" placeholder="Crie uma senha" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-400" />
          </div>
          {erro && <p className="mt-4 text-sm font-medium text-red-500">{erro}</p>}
          <button className="mt-6 w-full rounded-2xl bg-orange-500 px-4 py-3 font-semibold text-white transition hover:bg-orange-600">Cadastrar</button>
          <p className="mt-6 text-center text-sm text-slate-600">Já possui conta? <Link to="/login" className="font-semibold text-orange-600">Entrar</Link></p>
        </form>
      </div>
    </div>
  )
}
