export const role = (state = "", action) => {
  switch (action.type) {
    case "ROLE":
      state = action.payload;
      console.log(state, "is role");
      return state;

    default:
      return state;
  }
};
