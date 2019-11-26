export default (state = [], action) => {
  switch (action.type) {
    case "SET_ALL_PETS":
      return action.pets;
    case "CLEAR_ALL_PETS":
      return [];
    default:
      return state;
  }
};
