import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { AuthType } from '../types/AuthType';

type InitialStateType = {
  auth: AuthType
}

const initialState:InitialStateType = {
  auth: { uid: "",email: "", displayName: "", photoURL: "" }
}

const liffId = process.env.NEXT_PUBLIC_LIFF_ID

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.auth = action.payload
    },
    logout: (state) => {
      state.auth = initialState.auth
    },
    updateUserProfile: (state, action: PayloadAction<AuthType>) => {
      state.auth.photoURL = action.payload.photoURL;
      state.auth.displayName = action.payload.displayName;
    }
  },
});

export const { login, logout,updateUserProfile } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;