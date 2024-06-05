import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BalanceState {
  balance: number;
}

const initialState: BalanceState = {
  balance: 0,
};

const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    addIncome(state, action: PayloadAction<number>) {
      state.balance += action.payload;
    },
    addExpense(state, action: PayloadAction<number>) {
      state.balance -= action.payload;
    },
  },
});

export const { addIncome, addExpense } = balanceSlice.actions;
export default balanceSlice.reducer;
