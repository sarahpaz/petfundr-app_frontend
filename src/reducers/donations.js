const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_ALL_DONATIONS":
      return action.donations;
    case "ADD_DONATION":
      return state.concat(action.donation);
    default:
      return state;
  }
};
