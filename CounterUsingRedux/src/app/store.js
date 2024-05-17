import { configureStore } from '@reduxjs/toolkit'
import counterSlice01 from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter02: counterSlice01
  },
})