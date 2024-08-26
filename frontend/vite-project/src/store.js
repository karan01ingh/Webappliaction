import { configureStore} from '@reduxjs/toolkit'
import userReducer from "./features/userSlice.js"
// import  modeReducer from '../features/modeSlice.js'
export const store = configureStore({
  reducer:{
    User:userReducer,
    // theme:modeReducer
  },
})