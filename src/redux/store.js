import { configureStore } from '@reduxjs/toolkit'
import { AuthReducer } from './slices/authSlice';
import { videoListReducer } from './slices/getVideoSlice';

const store = configureStore({
  reducer: {
    auth: AuthReducer,
    video: videoListReducer,
  }
})

export default store;