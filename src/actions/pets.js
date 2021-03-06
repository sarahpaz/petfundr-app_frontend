import toast from "toasted-notes";
import "toasted-notes/src/styles.css";
// syncrhonous action creators - state is updated immediately
export const setAllPets = pets => {
  return {
    type: "SET_ALL_PETS", // matches the case in the reducer
    pets // shorthand version of payload: user
  };
};

export const clearAllPets = () => {
  return {
    type: "CLEAR_ALL_PETS"
  };
};

// asynchronous action creators -- requests to the backend are required first
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
          // alert(pets.error);
          toast.notify(pets.error, {
            position: "bottom-right"
          });
        } else {
          dispatch(setAllPets(pets.data)); // dispatch action creator
        }
      })
      .catch(console.log);
  };
};
