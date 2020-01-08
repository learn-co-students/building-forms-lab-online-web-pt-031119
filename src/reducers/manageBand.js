export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      // return [...state, action.newBand]
      console.log({bands: [...state.bands, action.newBand]})
      return {bands: [...state.bands, action.newBand]}
      // initially had return [...state.bands, action.newBand] b/c of how default state is defined
    default:
      return state
  }
  
};
