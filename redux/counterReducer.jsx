const initialData = {
  count: 0,
}

const counterReducer = (state = initialData, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 }
    case 'DECREMENT':
      return { ...state, count: state.count - 1 }
    case 'RESET':
      return initialData
    default:
      return state
  }
}

export default counterReducer