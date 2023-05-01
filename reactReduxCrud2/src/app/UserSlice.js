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
      const { unid, firstname, lastname, email, stateSelect, gender } = action.payload;
      return state.map((user) =>
        user.unid === unid
          ? { ...user, firstname, lastname, email, stateSelect, gender }
          : user
      );
    },
    deleteUserData(state, action) {
      const newState = state.filter(
        (item) => item.unid !== action.payload.unid
      );
      return newState;
    },
    showViewData(state, action) {
      state.view = true;
    },
  },
});

export const { showViewData, addUserData, deleteUserData, editUserData } = userSlice.actions;
export default userSlice.reducer;
