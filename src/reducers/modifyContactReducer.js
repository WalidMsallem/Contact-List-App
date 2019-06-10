const modifyContactReducer = (state = {}, action) => {
  if (action.type === "GET_MODIFY_CONTACT") {
    return action.payload;
  }
  return state;
};

export default modifyContactReducer;
