const reducer = (state, action) => {
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] }
  }
  if (action.type === 'REMOVE_ITEM') {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload),
    }
  }
  if (action.type === 'ADD_ITEM') {
    return {
      ...state,
      cart: state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 }
        }
        return item
      }),
    }
  }
  if (action.type === 'DECREASE_ITEM') {
    return {
      ...state,
      cart: state.cart
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount - 1 }
          }
          return item
        })
        .filter((item) => item.amount !== 0),
    }
  }
  if (action.type === 'FETCH_CART') {
    let { total, amount } = state.cart.reduce(
      (acc, item) => {
        const { price, amount } = item
        acc.amount += amount
        acc.total += price * amount
        return acc
      },
      { total: 0, amount: 0 },
    )
    total = total.toFixed(2)
    return { ...state, total, amount }
  }

  return state
}

export default reducer
