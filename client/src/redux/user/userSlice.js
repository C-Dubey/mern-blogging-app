import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart: (state) => {
        console.log("signInStart state :", state );
      state.loading = true;
      state.error = null;
    },
    signInSuccess: (state, action) => {
        console.log("signInSuccess state, action :", state, action);
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
        console.log("signInFailure state, action :", state, action);
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// console.log("userSlice :", userSlice);

export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;

export default userSlice.reducer;