// import { Notify } from 'notiflix';

export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  if (payload.includes('have no any car')) {
    state.cars = [];
  }
  state.error = payload;
};

export const handleFulfilled = (state, { payload }) => {
  state.cars = payload;
  state.isLoading = false;
  state.error = null;
};