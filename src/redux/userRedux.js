import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.error = false;
      
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      console.log("**********************")
      console.log(action.payload)
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    resetError:(state) =>
    {
      //console.log("object2");  
      state.isFetching = false;
      state.error = false;
    },
    logoutStart: (state) => {
      state.currentUser = null;
    },
    fetchingData: (state)=>{
      state.isFetching = !(state.isFetching);
    }
  },
});

export const { loginStart, loginSuccess, loginFailure,resetError,logoutStart,fetchingData
} = userSlice.actions;
export default userSlice.reducer;
