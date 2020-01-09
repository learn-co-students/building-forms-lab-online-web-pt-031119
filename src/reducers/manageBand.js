export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case 'ADD_BAND':

    console.log('adding', action.band);

    return {
      ...state,
      bands: [...state.bands, action.band]
    };
   
    default: 
    console.log(state)
     return state;
  }
}
