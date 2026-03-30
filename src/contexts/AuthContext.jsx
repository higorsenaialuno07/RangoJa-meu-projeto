import { createContext, useContext, useMemo, useState } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading] = useState(false)

  async function signUp(nome, email, password) {
    const novoUsuario = { id: Date.now(), nome, email, password }
    localStorage.setItem('rangoja_user', JSON.stringify(novoUsuario))
    setUser(novoUsuario)
    return novoUsuario
  }

  async function signIn(email, password) {
    const salvo = localStorage.getItem('rangoja_user')
    const usuario = salvo ? JSON.parse(salvo) : null

    if (!usuario || usuario.email !== email) {
      throw new Error('Usuário não encontrado')
    }

    setUser(usuario)
    return usuario
  }

  async function signOut() {
    setUser(null)
  }

  const value = useMemo(
    () => ({ user, loading, signUp, signIn, signOut }),
    [user, loading],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}
