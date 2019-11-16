// syncrhonous action creators
export const updateNewDonationInfo = (name, value) => {
  // console.log(name, value);
  const formData = { name, value };
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

export const addDonation = donation => {
  return {
    type: "ADD_DONATION",
    donation
  };
};
