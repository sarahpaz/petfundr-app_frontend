export default (state = [], action) => {
  switch (action.type) {
    case "SET_ALL_PETS":
      return action.pets;
    default:
      return state;
  }
};
