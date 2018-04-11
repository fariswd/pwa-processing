const initialState = {
  name: 'capung'
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_NAME':
      return {...state, name: action.name}
    default:
      return state
  }
}
