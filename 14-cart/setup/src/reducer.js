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
  if (action.type === 'LOADING') {
    return { ...state, loading: true }
  }
  if (action.type === 'DISPLAY_ITEMS') {
    return { ...state, loading: false, cart: action.payload }
  }
  if (action.type === 'TOGGLE_AMOUNT') {
    let tempCart = state.cart
      .map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            amount:
              action.payload.type === 'inc' ? item.amount + 1 : item.amount - 1,
          }
        }
        return item
      })
      .filter((item) => item.amount !== 0)
    return { ...state, cart: tempCart }
  }

  throw new Error('Not a valid action')
}

export default reducer
