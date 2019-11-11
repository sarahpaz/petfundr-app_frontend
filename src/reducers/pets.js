export default (state = [], action) => {
  switch (action.type) {
    case "SET_ALL_PETS":
      return action.pets;
    default:
      return state;
  }
};

//  t.string "name"
//   t.integer "age"
//   t.string "image"
//   t.text "cause"
//   t.integer "goal"
