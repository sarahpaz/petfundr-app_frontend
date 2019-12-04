// syncrhonous action creators - state is updated immediately
export const updateSignupForm = formData => {
  return {
    type: "UPDATE_SIGNUP_FORM",
    formData
  };
};

export const resetSignupForm = () => {
  return {
    type: "RESET_SIGNUP_FORM"
    // No payload required because form is being reset
  };
};
