import { ADD_LIST } from "../constants/actionTypes";
import { REMOVE_LIST } from "../constants/actionTypes";
import axios from "axios";

// export function addContact(payload) {
//   return { type: ADD_LIST, payload };
// }
export function removeContact(payload) {
  return { type: REMOVE_LIST, payload };
}

export const getContact = () => dispatch => {
  axios
    .get("/contact")
    .then(res => {
      dispatch({
        type: "GET_CONTACTS",
        payload: res.data
      });
      console.log(res.data, "hhh");
    })
    .catch(err => console.log(err));
};

export const addContact = newContact => dispatch => {
  axios.post("/add-contact", newContact).then(() => dispatch(getContact()));
};
export const getModifyContact = id => dispatch => {
  // var obj = {
  //   type: "GET_MODIFY_CONTACT"
  // }
  axios.get("/contact/" + id).then(res =>
    dispatch({
      type: "GET_MODIFY_CONTACT",
      payload: res.data
    })
  );
};

export const modifyContact = (id, modContact) => dispatch => {
  axios.put("/contact/" + id, modContact).then(() => dispatch(getContact()));
  // axios.put("/contact/" + id, modContact).then(res => console.log(res.data));
};

export const deletContact = id => dispatch => {
  axios.delete("/contact/" + id).then(() => dispatch(getContact()));
};
