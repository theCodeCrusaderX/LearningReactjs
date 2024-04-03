import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../../slices/counter/Index'

export const Store = configureStore({
  reducer: {
    counter: counterSlice
  },
})