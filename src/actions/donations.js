// synchronous actions creators
export const setAllDonations = donations => {
  return {
    type: "SET_ALL_DONATIONS",
    donations
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
