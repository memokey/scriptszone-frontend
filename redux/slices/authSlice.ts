import { apiCaller, getErrorMessage } from './../../utils/fetcher';
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Router } from 'next/router';
import { PasteType } from '../../components/Pastes/Paste';

export interface AuthState {
  authtoken: string;
  pastes: any[];
}

const initialState: AuthState = {
  authtoken: '',
  pastes: [],
};

type loginProps = {
  publicKey: any;
  walletType: "solana" | "ethereum";
  provider: any;
  next?: any;
};

export const login = createAsyncThunk(
  "auth/login",
  async (
    { publicKey, walletType, provider, next }: loginProps,
    { dispatch }
  ) => {
    let response = false;
    try {
      const {
        data: { nonce },
      } = await apiCaller.post("/auth/login", {
        requestNonce: true,
        walletType,
        publicKey,
      });
      response = true;
      if (next) next();
    } catch (err) {
      console.log(err);
    }
    return response;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthToken(state, action: PayloadAction<string>) {
      state.authtoken = action.payload;
    },
    setPastes(state, action: PayloadAction<any[]>) {
      state.pastes = action.payload;
    },
    removePaste(state, action: PayloadAction<string>) {
      const pastes = [...state.pastes];
      const pasteIndex = pastes.findIndex(s => s.id == action.payload);
      if(pasteIndex != -1) {
        pastes.splice(pasteIndex, 1);
        state.pastes = pastes;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
    });
  },
});

export const { setAuthToken, setPastes, removePaste } = authSlice.actions;

export default authSlice.reducer;
