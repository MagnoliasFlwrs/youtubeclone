import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import popularVideoService from "../../service/popularVideoService";
import categoryVideoService from "../../service/categoryVideoService";

export const getPopularVideo =  createAsyncThunk('popularVideo/getPopularVideo', async ( _, {rejectWithValue}) => {
    try {
      const result = await popularVideoService.getAll()
      return result.items
    } catch (e) {
      return rejectWithValue(e)
    }
})
export const getCategoryVideo =  createAsyncThunk('categoryVideo/getCategoryVideo', async ( value, {rejectWithValue}) => {
  try {
    const result = await categoryVideoService.getAll(value)
    return result.items
  } catch (e) {
    return rejectWithValue(e)
  }
})
const getVideoSlice = createSlice({
    name: 'video',
    initialState: {
      videoList: [],
      isLoading: false,
      error: '',
      nextPageToken: null,
      activeCategory: 'All'
    },
    extraReducers: {
        [getPopularVideo.pending]: (state, action) => {
            state.isLoading = true
        },
        [getPopularVideo.fulfilled]: (state, action) => {
            state.videoList = action.payload
            state.nextPageToken = action.nextPageToken
            state.activeCategory = action.payload.activeCategory
        },
        [getPopularVideo.rejected]: (state, action) => {
            state.error = action.payload.message
        },
        [getCategoryVideo.pending]: (state, action) => {
          state.isLoading = true
        },
        [getCategoryVideo.fulfilled]: (state, action) => {
          state.videoList = action.payload
          state.nextPageToken = action.nextPageToken
          state.activeCategory = action.payload.activeCategory
        },
        [getCategoryVideo.rejected]: (state, action) => {
            state.error = action.payload.message
        },

    }
  })

export const videoListReducer = getVideoSlice.reducer
