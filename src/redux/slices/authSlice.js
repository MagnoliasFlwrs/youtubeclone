import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
      isAuth: false,
      token : localStorage.getItem('authToken') ? localStorage.getItem('authToken'):null,
      error: '',
      id : null,
      profile: localStorage.getItem('userProfile')? JSON.parse(localStorage.getItem('userProfile')):null,
    },
    reducers: {
        logIn(state, action) {
            state.isAuth = action.payload.isAuth
            state.token = action.payload.token
            state.id = action.payload.id
        },
        logOut(state , action) {
            state.isAuth = action.payload.isAuth
            state.token = action.payload.token
            state.id = action.payload.id
        },
        getProfile(state,action) {
            state.profile = action.payload.profile
        }

    },
    extraReducers: {

    }
  })
  export const { logIn, logOut, getProfile } = authSlice.actions

  export const AuthReducer = authSlice.reducer