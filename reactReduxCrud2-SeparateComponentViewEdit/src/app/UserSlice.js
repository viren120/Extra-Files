import { createSlice } from '@reduxjs/toolkit';
import InitialData from './initialData.js';

export const userSlice = createSlice({
  name: 'data',
  initialState: [...InitialData],
  reducers: {
    addUserData(state, action) {
      state.push(action.payload);
    },
    editUserData(state, action) {
      const { unid, firstname, lastname, email, stateSelect, xender } =
        action.payload;
      return state.map((user) =>
        user.unid === unid
          ? { ...user, firstname, lastname, email, stateSelect, xender }
          : user
      );
    },
    deleteUserData(state, action) {
      const newState = state.filter(
        (item) => item.unid !== action.payload.unid
      );
      return newState;
    },
  },
});

export const { addUserData, deleteUserData, editUserData } = userSlice.actions;
export default userSlice.reducer;
