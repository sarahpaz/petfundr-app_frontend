// syncrhonous action creators
export const updateNewDonationInfo = (name, value) => {
  const formData = { name, value };
  // console.log(formData);
  return {
    type: "UPDATE_NEW_DONATION_FORM",
    formData
  };
};

export const resetSignupForm = () => {
  return {
    type: "RESET_SIGNUP_FORM"
    // No payload required because form is being reset
  };
};

// asynchronous actions creators
