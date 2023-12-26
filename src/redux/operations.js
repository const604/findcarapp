import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6479fda8a455e257fa6429b8.mockapi.io/adverts';

export const getCars = createAsyncThunk(
  'cars/getAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/cars');
      // console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const favoriteCar = createAsyncThunk(
//   'cars/favoriteCar',
//   async (payload, thunkAPI) => {
//     try {
//       const { id } = payload;
//       const res = await axios.put(`/cars/${id}`);
//       res.data.car.id = id;
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const updateCar = createAsyncThunk(
//   'cars/updateCars',
//   async (payload, thunkAPI) => {
//     try {
//       const { id, favorites } = payload;
//       const res = await axios.put(`/cars/${id}`, { favorites });
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
