const cat = (state = '', action: { cat: string; type: string }) => {
  switch (action.type) {
    case 'SET_CAT':
      return action.cat;
    default:
      return state;
  }
};

export default cat;
