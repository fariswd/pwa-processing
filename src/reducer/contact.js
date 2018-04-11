const initialState = {
  email: 'ca@pung.com'
}

export default function Contact(state = initialState, action) {
  switch (action.type) {
    case 'SET_EMAIL':
      return {...state, email: action.email}
    default:
      return state
  }
}
