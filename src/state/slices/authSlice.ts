import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthStateType {
  user: {
    token: string;
    firstName: string;
    lastName: string;
    email: string;
  };
}

const INITIAL_STATE: AuthStateType = {
  user: {
    token: "",
    firstName: "",
    lastName: "",
    email: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {
    setUser: (state, action: PayloadAction<AuthStateType>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.user = action.payload.user;
    },
  },
});

export const { setUser } = authSlice.actions;

export const authReducer = authSlice.reducer;
