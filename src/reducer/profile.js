const initialState = {
  name: 'https://github.com/fariswd/pwa-processing'
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_NAME':
      return {...state, name: action.name}
    default:
      return state
  }
}
