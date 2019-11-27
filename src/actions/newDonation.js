// syncrhonous action creators
export const updateNewDonationInfo = (name, value) => {
  const formData = { name, value };
  // console.log(formData);
  return {
    type: "UPDATE_NEW_DONATION_FORM",
    formData
  };
};

export const resetNewDonationForm = () => {
  return {
    type: "RESET_NEW_DONATION_FORM"
  };
};

// asynchronous actions creators
