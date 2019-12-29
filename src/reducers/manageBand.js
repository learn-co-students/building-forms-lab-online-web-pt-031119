export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      return { bands: [...state, action.name] }  

    default:
      return state 
  }
};

// { bands: state.bands.concat(action.payload.name) }
