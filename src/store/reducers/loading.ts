const loading = (state = false, action: { type: string }) => {
  switch (action.type) {
    case 'SET_LOADING':
      return !state;
    case 'SET_COMPLETED':
      return state;
    default:
      return state;
  }
};

export default loading;
