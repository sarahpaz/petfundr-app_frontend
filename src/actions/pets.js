// synchronous actions creators
export const setAllPets = pets => {
  return {
    type: "SET_ALL_PETS", // matches the case in the reducer
    pets // shorthand version of payload: user
  };
};

// asynchronous actions creators
export const getAllPets = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/pets", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(pets => {
        if (pets.error) {
          alert(pets.error);
        } else {
          dispatch(setAllPets(pets.data)); // dispatch action creator
        }
      })
      .catch(console.log);
  };
};
