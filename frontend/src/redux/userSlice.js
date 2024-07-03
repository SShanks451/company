import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: null,
    emailId: null,
  },
  reducers: {
    addUser: (state, action) => {
      state.name = action.payload.name;
      state.emailId = action.payload.emailId;
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
