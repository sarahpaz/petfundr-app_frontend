const initialState = {
  amount: 0,
  message: "",
  pet_id: "",
  user_id: ""
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
