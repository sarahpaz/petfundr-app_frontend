export default (state = [], action) => {
  switch (action.type) {
    case "SET_ALL_USERS":
      return action.users;
    default:
      return state;
  }
};
