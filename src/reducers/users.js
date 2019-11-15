export default (state = [], action) => {
  switch (action.type) {
    case "SET_ALL_USERS":
      return action.users;
    case "CLEAR_ALL_USERS":
      return [];
    default:
      return state;
  }
};
