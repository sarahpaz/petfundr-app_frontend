export default (state = [], action) => {
  switch (action.type) {
    case "SET_ALL_DONATIONS":
      return action.donations;
    default:
      return state;
  }
};
