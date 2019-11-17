const initialState = {
  amount: 0,
  message: "",
  user: "",
  petID: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_NEW_DONATION_FORM":
      return {
        ...state,
        [action.formData.name]: action.formData.value
      };
    case "RESET_NEW_DONATION_FORM":
      return initialState;
    default:
      return state;
  }
};
