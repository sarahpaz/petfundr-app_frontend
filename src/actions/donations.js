// synchronous actions creators
export const setAllDonations = donations => {
  return {
    type: "SET_ALL_DONATIONS",
    donations
  };
};

export const addDonation = donation => {
  return {
    type: "ADD_DONATION",
    donation
  };
};

// asynchronous actions creators
export const getAllDonations = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/donations", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(donations => {
        if (donations.error) {
          alert(donations.error);
        } else {
          dispatch(setAllDonations(donations.data)); // dispatch action creator
        }
      })
      .catch(console.log);
  };
};

export const createDonation = donationData => {
  return dispatch => {
    const sendableDonationData = {
      amount: donationData.amount,
      message: donationData.message,
      pet_id: donationData.pet_id,
      user_id: donationData.user_id
    };
    return fetch("http://localhost:3001/api/v1/donations", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendableDonationData)
    })
      .then(res => res.json())
      .then(donation => {
        if (donation.error) {
          alert(donation.error);
        } else {
          dispatch(addDonation(donation.data)); // dispatch action creator
        }
      })
      .catch(console.log);
  };
};
