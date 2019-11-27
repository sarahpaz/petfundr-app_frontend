// syncrhonous action creators
export const updateNewDonationInfo = (name, value) => {
  const formData = { name, value };
  // console.log(formData);
  return {
    type: "UPDATE_NEW_DONATION_FORM",
    formData
  };
};

// asynchronous actions creators
