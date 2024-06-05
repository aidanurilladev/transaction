import { configureStore } from '@reduxjs/toolkit';
import transactionReducer from './slices/transactionSlice';
import balanceReducer from './slices/balanceSlice';

const store = configureStore({
  reducer: {
    transaction: transactionReducer,
    balance: balanceReducer,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
