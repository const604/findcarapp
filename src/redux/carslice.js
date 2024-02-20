import { handleFulfilled, handlePending, handleRejected } from './handlers';

const { createSlice } = require('@reduxjs/toolkit');
const { getCars } = require('./operations');

const initialState = {
  cars: [],
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getCars.pending, handlePending)
      .addCase(getCars.fulfilled, handleFulfilled)
      .addCase(getCars.rejected, handleRejected);
    // .addCase(updateCar.pending, handlePending)
    // .addCase(updateCar.fulfilled, (state, { payload }) => {
    //   const updateCarIndex = state.cars.findIndex(
    //     car => car.id === payload.id
    //   );

    //   if (updateCarIndex >= 0) {
    //     state.cars[updateCarIndex] = {
    //       ...state.cars[updateCarIndex],
    //       ...payload,
    //     };
    //   }
    //   state.isLoading = false;
    //   state.error = null;
    // })
    // .addCase(updateCar.rejected, handleRejected);
  },
});

export const carsReducer = carsSlice.reducer;
