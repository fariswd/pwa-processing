const initialState = {
  processing: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_IMAGES':
      return {...state, processing: action.payload.result}
    default:
      return state
  }
}
