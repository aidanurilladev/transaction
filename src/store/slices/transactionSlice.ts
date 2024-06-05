import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Transaction } from "../../types";

interface TransactionState {
  transactions: Transaction[];
}

const initialState: TransactionState = {
  transactions: JSON.parse(localStorage.getItem("transactions") || "[]"),
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    addTransaction(state, action: PayloadAction<Transaction>) {
      state.transactions = [...state.transactions, action.payload];
      localStorage.setItem("transactions", JSON.stringify(state.transactions));
    },
  },
});

export const { addTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
