import { createContext, useContext, useMemo, useState } from 'react'

const CarrinhoContext = createContext()

export function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState([])

  function adicionarAoCarrinho(produto) {
    setCarrinho((anterior) => {
      const itemExistente = anterior.find((item) => item.id === produto.id)

      if (itemExistente) {
        return anterior.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item,
        )
      }

      return [...anterior, { ...produto, quantidade: 1 }]
    })
  }

  function aumentarQuantidade(id) {
    setCarrinho((anterior) =>
      anterior.map((item) =>
        item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item,
      ),
    )
  }

  function diminuirQuantidade(id) {
    setCarrinho((anterior) =>
      anterior
        .map((item) =>
          item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item,
        )
        .filter((item) => item.quantidade > 0),
    )
  }

  function removerDoCarrinho(id) {
    setCarrinho((anterior) => anterior.filter((item) => item.id !== id))
  }

  function limparCarrinho() {
    setCarrinho([])
  }

  const subtotal = useMemo(
    () => carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0),
    [carrinho],
  )

  const taxaEntrega = carrinho.length > 0 ? 6 : 0
  const total = subtotal + taxaEntrega

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        adicionarAoCarrinho,
        aumentarQuantidade,
        diminuirQuantidade,
        removerDoCarrinho,
        limparCarrinho,
        subtotal,
        taxaEntrega,
        total,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  )
}

export function useCarrinho() {
  return useContext(CarrinhoContext)
}
